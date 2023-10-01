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

### Connecter le backend à la database

- On va utiliser [SQLAlchemy](https://www.sqlalchemy.org/) pour connecter le backend à la database en suivant la [documentation de FastAPI](https://fastapi.tiangolo.com/tutorial/sql-databases/)

  - Installez le package `sqlalchemy` et `psycopg2` dans le backend
    `poetry add sqlalchemy psycopg2`
  - Créez un fichier `/backend/backend/database.py`

    ```python
    from sqlalchemy import create_engine
    from sqlalchemy.ext.declarative import declarative_base
    from sqlalchemy.orm import sessionmaker

    # Remplacez les valeurs par les valeurs de votre database
    SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

    engine = create_engine(SQLALCHEMY_DATABASE_URL, echo=True)
    SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

    Base = declarative_base()
    ```

  - Créez un fichier `/backend/backend/models.py`

    ```python
    from sqlalchemy import Column, Double, Integer, String

    from .database import Base


    class Item(Base):
        __tablename__ = "items"

        id = Column(Integer, primary_key=True, autoincrement=True)
        name = Column(String, index=True, nullable=False)
        description = Column(String, index=True)
        price = Column(Double, index=True, nullable=False)
    ```

  - Créez un fichier `/backend/backend/schemas.py`

    ```python
    from pydantic import BaseModel


    class ItemBase(BaseModel):
        name: str
        description: str | None = None
        price: float


    class ItemCreate(ItemBase):
        pass


    class Item(ItemBase):
        id: int

        class Config:
            from_attributes = True
    ```

  - Ajoutez les fonctions [CRUD](https://developer.mozilla.org/fr/docs/Glossary/CRUD) dans `/backend/backend/main.py`

    ```python
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


    @app.post("/items/", response_model=schemas.Item)
    def create_item(item: schemas.ItemCreate, db: Session = Depends(get_db)):
        db_item = models.Item(**item.model_dump())
        db.add(db_item)
        db.commit()
        db.refresh(db_item)
        return db_item


    @app.get("/items/", response_model=list[schemas.Item])
    def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
        return db.query(models.Item).offset(skip).limit(limit).all()


    @app.get("/items/{item_id}", response_model=schemas.Item)
    def read_item(item_id: int, db: Session = Depends(get_db)):
        db_item = db.query(models.Item).filter(models.Item.id == item_id).first()
        if db_item is None:
            raise HTTPException(status_code=404, detail="Item not found")
        return db_item


    @app.delete("/items/{item_id}", response_model=schemas.Item)
    def delete_item(item_id: int, db: Session = Depends(get_db)):
        db_item = read_item(item_id, db)
        db.delete(db_item)
        db.commit()
        return db_item
    ```

  - Démarrez le backend `poetry run uvicorn backend.main:app --reload` et testez les endpoints sur http://localhost:8000/docs
  - Modifiez le backend pour qu'il suive les twelve-factors et configurez-le correctement dans le Docker Compose

### Docker Registry

- Pousser les images Docker sur le GitLab Registry
  - [Documentation](https://docs.gitlab.com/ee/user/packages/container_registry/)
  - Les noms des images sont préfixés par l'adresse du registry (défaut au Docker Hub)
    - Exemple: `registry.gitlab.com/username/project/image:tag`
