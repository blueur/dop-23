# Métriques

## Objectifs

- Estimer son travail

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab10-metrics-{nom}.pdf`
  - Délai: 1 semaine
- Mettez tout votre travail sur une branche `feature/lab10-metrics` et faites une merge request (MR) sur `main` en m'ajoutant comme reviewer
- Ajoutez un lien vers la merge request dans votre rapport

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

### Bonus : Prometheus sur Docker

Pour collecter les métriques de Docker avec Prometheus : https://docs.docker.com/config/daemon/prometheus/
