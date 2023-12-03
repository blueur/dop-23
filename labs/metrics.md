# Métriques

## Objectifs

- Estimer son travail
- Déployer Prometheus et Grafana sur Docker Compose
- Instrumenter une application Python (FastAPI)

## Rendu

- Rapport individuel sur Cyberlearn
  - Nom du fichier: `lab10-metrics-{nom}.pdf`
  - Délai: 1 semaine
- Code sur GitHub Classroom : https://classroom.github.com/a/lOwfxM_8
- Créez une MR `feature/lab10-metrics` sur `main` en m'ajoutant comme reviewer et mettez le lien dans le rapport

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

### Prometheus et Grafana sur Docker Compose

Créer un Docker Compose avec Prometheus et Grafana qui collecte les métriques de notre machine :

- Utiliser [Node exporter](https://github.com/prometheus/node_exporter) pour collecter les métriques de la machine
- Suivre le tutoriel sur https://mxulises.medium.com/simple-prometheus-setup-on-docker-compose-f702d5f98579
- Ajouter Grafana : https://github.com/docker/awesome-compose/blob/master/prometheus-grafana/README.md

Les endpoints devraient être accessibles sur les ports suivants :

- Prometheus : http://localhost:9090
- Grafana : http://localhost:3000

Observez les endpoints `/metrics` de :

- Prometheus : http://localhost:9090/metrics
- Node exporter : http://localhost:9100/metrics

(Changez de navigateur ou essayez en ligne de commande avec `curl`/`wget` en cas d'erreur )

Rafraîchissez la page des métriques. Expliquez le fonctionnement de Prometheus :

- Comment Prometheus collecte les métriques ?
- Où sont stockées les métriques ?
- Comment sont définies les métriques ?
- Qui définit la fréquence de collecte des métriques ?
- Qu'est-ce qui diffère par rapport à un système de logs ?

### Instrumenter une application Python

- Reprenez votre application [HEIG-VD DevOps](https://gitlab.com/blueur/heig-vd-devops) et ajoutez des métriques au backend
- Utilisez https://github.com/trallnag/prometheus-fastapi-instrumentator
- Vérifiez vos métriques avec http://localhost/api/metrics
- Ajoutez Prometheus à votre Docker Compose
- Vérifiez que les métriques sont bien collectées par Prometheus

### Instrumenter Nginx

Cherchez comment collecter les métriques du frontend (Nginx) avec Prometheus. Qu'est-ce qui est nécessaire pour que cela fonctionne ?

En bonus, ajoutez les métriques de Nginx à votre Docker Compose.

### Bonus : Prometheus sur Docker

Pour collecter les métriques de Docker avec Prometheus : https://docs.docker.com/config/daemon/prometheus/

## Références

- https://github.com/blueur/prometheus
