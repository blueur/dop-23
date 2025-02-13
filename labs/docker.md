# Docker

## Objectifs

- Estimer son travail
- Dockeriser une application
- Créer un Docker Compose
- Appliquer les bonnes pratiques

## Rendu

- Rapport individuel en Markdown sur Cyberlearn avant le prochain cours
  - Nom du fichier: `lab02-docker-{noms}.md`
  - Délai: 1 semaine
  - **Laboratoire noté**

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

### Git

- Mettez tout votre travail sur une branche `feature/02-docker` et faites une merge request (MR) sur `main`
- Séparez votre travail en commits cohérents
- Utilisez des messages de commit clairs et concis

### Docker

- Dockeriser les deux applications `frontend` et `backend` du précédent laboratoire
  - On doit pouvoir construire et démarrer les deux applications depuis leur dossier respectif
  - Regardez dans les documentations officielles des frameworks pour trouver des exemples de Dockerfile
  - Suivez les bonnes pratiques pour les Dockerfiles
    - Frontend
      - Utilisez [nginx](https://nginx.org/) comme serveur web
      - `docker build -t frontend . && docker run -p 80:80 frontend`
    - Backend
      - `docker build -t backend . && docker run -p 8080:80 backend`
  - N'oubliez pas le [`.dockerignore`](https://docs.docker.com/engine/reference/builder/#dockerignore-file)
- Dans votre rapport, justifier vos choix dans vos Dockerfiles

### Docker Compose

- Créez un `docker-compose.yml` pour démarrer les deux applications
  - Depuis la racine du projet, on doit pouvoir
    - construire les deux applications avec `docker-compose build`
    - démarrer les deux applications avec `docker-compose up`
    - accéder à l'application frontend sur le port 80
    - accéder à l'application backend sur le port 8080
    - arrêter les deux applications avec `docker-compose down`
- Ajoutez un service `database`
  - Utilisez une base de données PostgreSQL
  - Utilisez les crédentials suivants:
    - user: postgres
    - password: postgres
    - database: postgres
  - Exposez le port 5432
  - Ajoutez un volume pour persister les données (on doit pouvoir supprimer le conteneur `docker-compose rm` et le recréer sans perdre les données)
  - Vous pouvez utiliser [DBeaver](https://dbeaver.io/) pour visualiser les données
- Indiquez les dépendances entre les services
- Dans votre rapport, justifier vos choix pour le docker compose et la database

## Evaluation

### Critères de réussite

Pour atteindre le 4 :

- Le rapport est complet et bien structuré
- Le rendu sur GitLab est correct et dans les temps
- Le docker-compose fonctionne (on peut démarrer les deux applications et la base de données)

### Critères d'amélioration

Pour atteindre le 6 :

- Le rapport est bien écrit et agréable à lire
- Bonne justification des choix techniques (utilisation des bonnes pratiques)
- Lisibilité du code
- Les commits sont cohérents et bien structurés
- Persistance des données, dockerignore, dépendances des services, ...
