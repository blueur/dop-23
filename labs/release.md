# Release

## Objectifs

- Estimer son travail
- Configurer GitLab CI/CD pour créer des releases

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab08-release-{nom}.pdf`
  - Délai: 1 semaine
- Mettez tout votre travail sur une branche `feature/lab08-release` et faites une merge request (MR) sur `main` en m'ajoutant comme reviewer
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

### Maven Release Plugin

Reprenez **votre** projet [HEIG-VD DevOps Java](https://gitlab.com/blueur/heig-vd-devops-java) pour ce laboratoire.

- Créez une branche `feature/lab08-release`
- Ajoutez le plugin [Maven Release Plugin](https://maven.apache.org/maven-release/maven-release-plugin/) à votre projet
- Essayez de faire une release avec le plugin

::: tip Question
Que fait `mvn release:prepare` ?
:::

::: tip Question
Que fait `mvn release:perform` ?
:::

- Intégrez le plugin dans votre pipeline GitLab CI/CD
  - Proposez une solution pour facilement créer une nouvelle release (n'hésitez pas à discuter avec vos camarades)

### Python et npm

Reprenez **votre** projet [HEIG-VD DevOps](https://gitlab.com/blueur/heig-vd-devops) pour ce laboratoire.

::: warning Collaboration
Discussion en classe des solutions possibles pour créer des releases
:::

- Créez une branche `feature/lab08-release`
- Créez un script `release.sh` qui permet de créer une nouvelle release
  - les versions du backend et frontend sont synchronisées
  - les versions sont mise à jour dans les fichiers `pyproject.toml` et `package.json`
  - le script crée un tag Git ?
- Intégrez le script dans votre pipeline GitLab CI/CD
  - Création des images Docker avec les tags `latest` et `v1.0.0` (version de la release)
  - Création d'une [release Gitlab](https://docs.gitlab.com/ee/user/project/releases/)

### Changelog

Étant donné qu'on utilise [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), on peut générer un changelog automatiquement.

Utilisez [Release Please](https://github.com/googleapis/release-please), le successeur de [Standard Version](https://github.com/conventional-changelog/standard-version), ou [semantic-release](https://semantic-release.gitbook.io/semantic-release/) pour générer le changelog.

## Références

- https://gitlab.com/blueur/heig-vd-devops-java
- https://gitlab.com/blueur/heig-vd-devops
