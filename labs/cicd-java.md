# CI/CD Java

## Objectifs

- Estimer son travail
- Dockeriser une application Java
- Configurer une pipeline CI/CD pour une application Java
- Configurer un déploiement sur Kubernetes pour une application Java

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab06-cicd-java-{nom}.pdf`
  - Délai: 1 semaine
  - **Laboratoire noté**
- Mettez tout votre travail sur une branche `feature/06-cicd-java` et faites une merge request (MR) sur `main` en m'ajoutant comme reviewer
- Ajoutez un lien vers votre repository dans votre rapport

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

### Prérequis

- [Maven](https://maven.apache.org/)
- [Java 17](https://adoptium.net/fr/temurin/releases/?version=17)

### Préparation

- Forker le repository suivant : https://gitlab.com/blueur/heig-vd-devops-java
- Créez une nouvelle branche `feature/06-cicd-java` et travaillez sur cette branche
- Cloner votre repository sur votre machine
- Empaquetez l'application avec Maven : `mvn package`
- Lancez l'application : `mvn spring-boot:run`
  - Vous pourrez accéder à l'application sur http://127.0.0.1:8080/

### Application des principes DevOps

- Conteneurisez l'application avec Docker
- Configurez Docker Compose de sorte que `docker compose up` lance l'application
- Configurez la CI/CD sur GitLab
  - Pour chaque commit sur n'importe quelle branche :
    - Vérifiez que le projet compile
    - Vérifiez que les tests passent
      - Avec les [Unit Test Reports](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html)
  - Pour chaque merge request :
    - Vérifiez que l'image Docker se construit
    - Avec le [Code Coverage](https://docs.gitlab.com/ee/ci/testing/code_coverage.html)
    - Avec le [SAST](https://docs.gitlab.com/ee/user/application_security/sast/)
    - Avec le [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)
  - Pour chaque commit sur `main` :
    - Mettez à jour l'image Docker sur le registry GitLab avec le tag `latest`
- Configurer un déploiement sur Kubernetes : `kubectl apply -f deployment.yaml` doit lancer l'application

### Rapport

Indiquez dans votre rapport votre démarche ainsi que les difficultés rencontrées.

## Evaluation

### Critères de réussite

Pour atteindre le 4 :

- Le rapport est complet et bien structuré
- Le rendu sur GitLab est correct et dans les temps
- Docker Compose est fonctionnel
- Le pipeline CI/CD est fonctionnel
- Le déploiement sur Kubernetes est fonctionnel

### Critères d'amélioration

Pour atteindre le 6 :

- Application des bonnes pratiques
