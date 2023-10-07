# CI/CD

## Objectifs

- Estimer son travail
- Ajouter des tests unitaires en Python
- Créer une CI/CD pipeline sur GitLab

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab04-cicd-{nom}.pdf`
  - Délai: 2 semaines
- Mettez tout votre travail sur une branche `feature/04-cicd` et faites une merge request (MR) sur `main` en m'ajoutant comme reviewer
- Ajoutez un lien vers le commit dans votre rapport

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

### Tester le backend

- Ajoutez les dépendances de développement `poetry add -G dev pytest pytest-cov httpx`
  - Une dépendance de développement est une dépendance qui n'est pas nécessaire en production, par exemple uniquement pour les tests
  - `pytest` est le framework de test
  - `pytest-cov` permet de générer un rapport de couverture de code
  - `httpx` permet de faire des requêtes HTTP dans les tests
- Ajoutez/modifier les fichiers suivants (inspiré de cette [documentation](https://fastapi.tiangolo.com/advanced/testing-database/)) :

::: code-group

```python{2,10-11} [backend/backend/main.py]
from os import getenv
from sys import modules // [!code focus]

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import models, schemas
from .database import SessionLocal, engine

if "pytest" not in modules: // [!code focus]
    models.Base.metadata.create_all(bind=engine) // [!code focus]

app = FastAPI(root_path=getenv("ROOT_PATH"))

...
```

```python [backend/backend/tests/test_main.py]
from random import choices, uniform
from string import ascii_letters

from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from backend.database import Base
from backend.main import app, get_db

DATABASE_URL = "sqlite://"

engine = create_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)


def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


app.dependency_overrides[get_db] = override_get_db
client = TestClient(app)


def random_string(n=32):
    return "".join(choices(ascii_letters, k=n))


def random_double():
    return round(uniform(0.0, 100.0), 2)


product = {
    "name": random_string(),
    "description": random_string(512),
    "price": random_double(),
}


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}


def test_read_empty_products():
    response = client.get("/products/")
    assert response.status_code == 200
    assert response.json() == []


def test_create_product():
    response = client.post(
        "/products/",
        json=product,
    )
    assert response.status_code == 200
    assert response.json() == {"id": 1, **product}


def test_read_product():
    response = client.get("/products/1")
    assert response.status_code == 200
    assert response.json() == {"id": 1, **product}


def test_read_products():
    response = client.get("/products/")
    assert response.status_code == 200
    assert response.json() == [{"id": 1, **product}]


def test_delete_product():
    response = client.delete("/products/1")
    assert response.status_code == 200
    assert response.json() == {"id": 1, **product}
    response = client.get("/products/1")
    assert response.status_code == 404


def test_read_deleted_empty_products():
    response = client.get("/products/")
    assert response.status_code == 200
    assert response.json() == []
```

:::

- Pour lancer les tests : `poetry run pytest --cov`

### GitLab CI/CD

- Créez une pipeline sur GitLab CI/CD qui :
  - a les 3 stages :
    - build : vérifie que le code compile
    - test :
      - vérifie que les tests (du backend) passent
      - [Unit Test Reports](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html)
      - [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html)
      - [Code Coverage](https://docs.gitlab.com/ee/ci/testing/code_coverage.html)
      - [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)
      - [SAST](https://docs.gitlab.com/ee/user/application_security/sast/)
      - [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)
    - deploy : met à jour les images Docker sur le registry
  - est déclenchée à chaque push sur `main`
  - Le frontend et le backend doivent être dans des jobs séparés et en parallèle
    - Chacun est exécuté uniquement lorsqu'il y a des changements dans son dossier
