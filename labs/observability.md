# Observabilité

## Objectifs

- Estimer son travail
- Dockeriser une application Spring Boot
- Instrumenter une application Spring Boot pour la visualisation des logs, métriques et traces
- Configurer un dashboard dans Kibana
- Configurer un dashboard dans Grafana

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab12-observability-{nom}.pdf`
  - Délai: 2 semaines
- Code sur GitHub Classroom : https://classroom.github.com/a/OZNR4D0W
  - Rendu intermédiaire après 1 semaine pour avoir un retour sur le travail effectué

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

### Mise en place

Ce projet reprend [demotory](https://github.com/blueur/demotory) qui est le point de départ sur GitHub Classroom.

```bash
mvn spring-boot:run
```

http://localhost:8080

### Docker Compose

- Dockeriser l'application
- Créer un Docker Compose pour lancer l'application
  - `docker compose up`

### Instrumentation

Instrumenter l'application en justifiant vos choix d'outils

- Le Docker Compose doit exposer les services suivants:
  - **Kibana** pour visualiser les logs sur http://localhost:5601
  - **Grafana** pour visualiser les métriques sur http://localhost:3000
    - **Prometheus** pour récupérer les métriques sur http://localhost:9090
  - **Jaeger** pour visualiser les traces sur http://localhost:16686
- Documenter les configurations manuelles à faire après avoir lancé `docker compose up` dans le `README.md`
  - Exemple: ajouter des dashboards dans Kibana et Grafana
  - Vous pouvez ajouter des screenshots dans la documentation

#### Logs avec Kibana

Visualiser les logs de tous les containers (application + outils APM) dans Kibana.

Bonus:

- Gérer les stacktraces qui sont sur plusieurs lignes (regrouper la stacktrace en un seul record)

#### Métriques avec Grafana

Visualiser les métriques de tous les containers (application + outils APM) dans Grafana.

Bonus :

- Ajouter des métriques personnalisées de l'application
  - Nombre d'entrées dans la map sous forme de [Gauge](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#gauge)
  - Nombre de changements de la map sous forme de [Sums](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#sums)

#### Traces avec Jaeger

Visualiser les traces de l'application dans Jaeger.

Bonus :

- Déployer aussi Zipkin et visualiser les traces dans Zipkin
- Comparer les deux outils

### Rapport

- Indiquez dans votre rapport votre démarche ainsi que les difficultés rencontrées
- Expliquez tous les choix techniques que vous avez fait (sauf ceux indiqués)

## Evaluation

### Critères de réussite

Pour atteindre le 4 :

- Le rapport est complet et bien structuré
- Le rendu sur GitHub Classroom est correct et dans les temps
- Docker Compose est fonctionnel

### Critères d'amélioration

Pour atteindre le 6 :

- Application des bonnes pratiques
- Les points bonus mentionnés ci-dessus sont implémentés
- Création de dashboards intéressants dans Kibana et Grafana
- Ajout de métriques personnalisées
- Bonne documentation sur l'utilisation des outils APM
- Utiliser les [profiles](https://docs.docker.com/compose/profiles/) pour activer/désactiver les outils APM
- Toute amélioration est la bienvenue
