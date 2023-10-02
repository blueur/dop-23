# Compose

## Objectifs

- Estimer son travail
- Créer un Makefile
- Utiliser Traefik
- Connecter les services d'un Docker Compose
- Appliquer les twelve-factor app

## Rendu

- Rapport individuel en Markdown sur Cyberlearn avant le prochain cours
  - Nom du fichier: `lab03-compose-{nom}.md`
  - Délai: 1 semaine

## Tâches

### Estimer son travail

- Estimez le temps total nécessaire pour réaliser ce laboratoire
  - Découpez le travail en tâches pour faciliter l'estimation
- A la fin du rapport, comparez le temps estimé avec le temps réellement passé:
  | Tâche | Temps estimé | Temps réel | Commentaire |
  |-------|--------------|------------|-------------|
  | ... | 30m | 45m | ... |
  | ... | ... | ... | ... |
  | Total | 2h | 1h30 | ... |

### Créer un Makefile

- Créez un `Makefile` à la racine pour automatiser les tâches suivantes:
  - `make install` pour installer les dépendances (backend et frontend)
  - `make dev-backend` pour démarrer le backend en mode développement
  - `make dev-frontend` pour démarrer le frontend en mode développement
  - `make dev-database` pour démarrer uniquement la database
- Indiquez votre démarche dans le rapport

### Utiliser Traefik

Pour éviter des probèmes de [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) avec le frontend, nous allons utiliser [Traefik](https://doc.traefik.io/traefik/) comme reverse proxy afin de servir le frontend et le backend sur le même domaine.

- Ajoutez Traefik au `docker-compose.yml` afin de rediriger les requêtes comme suit:
  - Commençant par `/` vers le frontend
  - Commençant par `/api` vers le backend
- [Exemple de Docker Compose](https://doc.traefik.io/traefik/user-guides/docker-compose/basic-example/)
- Utilisez la rule [PathPrefix](https://doc.traefik.io/traefik/routing/routers/#rule) pour rediriger les requêtes vers le bon service
- Pour le backend, utilisez le [StripPrefix](https://doc.traefik.io/traefik/middlewares/http/stripprefix/) afin de supprimer le préfixe `/api` avant de rediriger la requête
  - Une fois le middleware créé, il faut l'ajouter au service. Voir l'[exemple](https://doc.traefik.io/traefik/middlewares/http/overview/#configuration-example)
- De plus, il faut configurer le [root_path](https://fastapi.tiangolo.com/advanced/behind-a-proxy/) de FastAPI pour qu'il corresponde au préfixe `/api`

  - Afin de pouvoir changer la valeur du `root_path` grâce à une variable d'environnement, modifiez le fichier `main.py` comme suit:

    ```python
    from typing import Union
    from os import getenv // [!code focus]

    from fastapi import FastAPI

    app = FastAPI(root_path=getenv("ROOT_PATH")) // [!code focus]

    @app.get("/")
    def read_root():
        return {"Hello": "World"}

    @app.get("/items/{item_id}")
    def read_item(item_id: int, q: Union[str, None] = None):
        return {"item_id": item_id, "q": q}
    ```

- Indiquez votre démarche dans le rapport

::: details Solution `compose.yml`

```yml
services:
  reverse-proxy:
    image: traefik:v2.10
    command:
      - "--providers.docker=true"
      - "--entrypoints.web.address=:80"
    ports:
      - "80:80"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
  frontend:
    labels:
      - "traefik.http.routers.frontend.rule=PathPrefix(`/`)"
  backend:
    labels:
      - "traefik.http.routers.backend.rule=PathPrefix(`/api`)"
      - "traefik.http.routers.backend.middlewares=backend-stripprefix"
      - "traefik.http.middlewares.backend-stripprefix.stripprefix.prefixes=/api"
```

:::

### Connecter le backend à la database

- On va utiliser [SQLAlchemy](https://www.sqlalchemy.org/) pour connecter le backend à la database en suivant la [documentation de FastAPI](https://fastapi.tiangolo.com/tutorial/sql-databases/)

  - Installez le package `sqlalchemy` et `psycopg2` dans le backend
    `poetry add sqlalchemy psycopg2`
  - Créez/modifiez les fichiers suivants dans `/backend/backend/` afin d'avoir un service [CRUD](https://developer.mozilla.org/fr/docs/Glossary/CRUD) :

::: code-group

```python [database.py]
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Remplacez les valeurs par les valeurs de votre database
DATABASE_URL = "postgresql://user:password@postgresserver/db"

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

```python [models.py]
from sqlalchemy import Column, Double, Integer, String

from .database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, index=True, nullable=False)
    description = Column(String, index=True)
    price = Column(Double, index=True, nullable=False)
```

```python [schemas.py]
from pydantic import BaseModel


class ProductBase(BaseModel):
    name: str
    description: str | None = None
    price: float


class ProductCreate(ProductBase):
    pass


class Product(ProductBase):
    id: int

    class Config:
        from_attributes = True
```

```python [main.py]
from os import getenv

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(root_path=getenv("ROOT_PATH"))


@app.get("/")
def read_root():
    return {"Hello": "World"}


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/products/", response_model=schemas.Product)
def create_product(product: schemas.ProductCreate, db: Session = Depends(get_db)):
    db_product = models.Product(**product.model_dump())
    db.add(db_product)
    db.commit()
    db.refresh(db_product)
    return db_product


@app.get("/products/", response_model=list[schemas.Product])
def read_products(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(models.Product).offset(skip).limit(limit).all()


@app.get("/products/{product_id}", response_model=schemas.Product)
def read_product(product_id: int, db: Session = Depends(get_db)):
    db_product = (
        db.query(models.Product).filter(models.Product.id == product_id).first()
    )
    if db_product is None:
        raise HTTPException(status_code=404, detail="Product not found")
    return db_product


@app.delete("/products/{product_id}", response_model=schemas.Product)
def delete_product(product_id: int, db: Session = Depends(get_db)):
    db_product = read_product(product_id, db)
    db.delete(db_product)
    db.commit()
    return db_product
```

:::

- Démarrez le backend `poetry run uvicorn backend.main:app --reload` et testez les endpoints sur http://localhost:8000/docs
- Vérifiez que le Docker Compose fonctionne toujours `docker compose up --build` et corrigez au besoin
  - Indiquez vos corrections dans le rapport
- Modifiez le backend pour qu'il suive les twelve-factors app et configurez-le correctement dans le Docker Compose
  - Utilisez les mêmes variables d'environnement que la database ainsi que leur valeur par défaut
  - Extraire le mot de passe de la database dans un [.env](https://docs.docker.com/compose/environment-variables/set-environment-variables/#substitute-with-an-env-file) pour s'assurer qu'il soit le même dans les deux services
  - Ajoutez une vraie dépendance à la database dans le backend en utilisant un [healthcheck](https://docs.docker.com/engine/reference/builder/#healthcheck), voici un [exemple](https://laurent-bel.medium.com/waiting-for-postgresql-to-start-in-docker-compose-c72271b3c74a)
  - Changez le mot de passe de la database et vérifiez que le backend fonctionne toujours (il faudra peut-être supprimer le volume de la database pour la recréer)
  - Pour lancer le backend en utilisant le `.env`, on va utiliser [python-dotenv](https://saurabh-kumar.com/python-dotenv/)
    - `poetry add --group dev python-dotenv`
    - `poetry run dotenv -f ../.env run uvicorn backend.main:app --reload`
  - Indiquez vos modifications (autres que celles indiquées) dans le rapport

::: details Solution `/backend/backend/database.py`

```python
from os import getenv

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

postgres_user = getenv("POSTGRES_USER", "postgres")
postgres_password = getenv("POSTGRES_PASSWORD", "postgres")
postgres_host = getenv("POSTGRES_HOST", "localhost")
postgres_db = getenv("POSTGRES_DB", postgres_user)
DATABASE_URL = (
    f"postgresql://{postgres_user}:{postgres_password}@{postgres_host}/{postgres_db}"
)

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

:::

### Ajoutez un frontend

- Dans le dossier `/frontend/`, ajoutez/modifiez les fichiers suivants afin de configurer les [environnements](https://vitejs.dev/guide/env-and-mode.html) et le [proxy](https://vitejs.dev/config/server-options.html#server-proxy) :

::: code-group

```txt [.env]
VITE_BACKEND_URL=/api
```

```ts [env.d.ts]
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

```ts [vite.config.ts] {14-22}
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```

:::

- On va utiliser [Pure](https://purecss.io/) comme framework CSS :

  - `npm install purecss`
  - Modifier le fichier `frontend/src/main.ts` comme suit :

    ```ts
    import "purecss/build/pure-min.css"; // [!code focus]

    import { createApp } from "vue";
    import App from "./App.vue";

    createApp(App).mount("#app");
    ```

- Supprimez tous les fichiers sous `/frontend/src/assets/` et `/frontend/src/components/`
- Sous `/frontend/src/`, créez/modifiez les fichiers suivants :

::: code-group

```vue [App.vue]
<script setup lang="ts">
import ProductManager from "./components/ProductManager.vue";
</script>

<template>
  <ProductManager />
</template>
```

```vue [components/ProductManager.vue]
<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";

interface CreateProduct {
  name: string;
  description?: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
}

const products = ref<Product[]>([]);
const product = reactive<CreateProduct>({
  name: "",
  price: 0,
});

onMounted(() => {
  updateTable();
});

function updateTable() {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/products/`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      products.value = data;
    });
}

function createProduct(product: CreateProduct) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/products/`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => {
    product.name = "";
    product.description = undefined;
    product.price = 0;
    updateTable();
  });
}

function deleteProduct(id: number) {
  fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${id}`, {
    method: "DELETE",
  }).then(() => {
    updateTable();
  });
}
</script>

<template>
  <table class="pure-table">
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <td>
          <button class="pure-button" @click="deleteProduct(product.id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <form class="pure-form pure-form-aligned">
    <fieldset>
      <fieldset>
        <div class="pure-control-group">
          <label for="name">Name</label>
          <input v-model="product.name" type="text" id="name" />
          <span class="pure-form-message-inline"
            >This is a required field.</span
          >
        </div>
        <div class="pure-control-group">
          <label for="description">Description</label>
          <input v-model="product.description" id="description" />
        </div>
        <div class="pure-control-group">
          <label for="price">Price</label>
          <input v-model="product.price" type="number" id="price" />
          <span class="pure-form-message-inline"
            >This is a required field.</span
          >
        </div>
        <div class="pure-controls">
          <button
            class="pure-button pure-button-primary"
            @click.prevent="createProduct(product)"
          >
            Add product
          </button>
        </div>
      </fieldset>
    </fieldset>
  </form>
</template>
```

:::

- Démarrez le frontend `npm run dev` et testez l'application (avec le backend et la database démarrés)
- Vérifiez que le Docker Compose fonctionne

### Docker Registry

- Poussez les images Docker sur le GitLab Registry
  - [Documentation](https://docs.gitlab.com/ee/user/packages/container_registry/)
  - Les noms des images sont préfixés par l'adresse du registry (défaut au Docker Hub)
    - Exemple: `registry.gitlab.com/username/project/image:tag`
  - Doit fonctionner avec `docker compose push`
