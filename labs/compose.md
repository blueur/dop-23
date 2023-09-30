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
    from os import environ // [!code focus]

    from fastapi import FastAPI

    app = FastAPI(root_path=environ["ROOT_PATH"]) // [!code focus]

    @app.get("/")
    def read_root():
        return {"Hello": "World"}

    @app.get("/items/{item_id}")
    def read_item(item_id: int, q: Union[str, None] = None):
        return {"item_id": item_id, "q": q}
    ```
