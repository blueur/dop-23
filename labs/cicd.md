# CI/CD

## Objectifs

- Estimer son travail

## Rendu

- Rapport individuel en Markdown sur Cyberlearn avant le prochain cours
  - Nom du fichier: `lab04-cicd-{nom}.md`
  - Délai: 1 semaine
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
  - Le frontend et le backend doivent être dans des jobs séparés et en parallèle
  - est déclenchée à chaque push sur `main`
