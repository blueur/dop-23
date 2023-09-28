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
  - `make dev-backend` pour démarrer le backend en mode développement
  - `make dev-frontend` pour démarrer le frontend en mode développement
  - `make dev-database` pour démarrer uniquement la database

### utiliser Traefik

Pour éviter des probèmes de [CORS](https://developer.mozilla.org/fr/docs/Web/HTTP/CORS) avec le frontend, nous allons utiliser [Traefik](https://doc.traefik.io/traefik/) comme reverse proxy.
