# Kubernetes & Helm

## Objectifs

- Estimer son travail
- Utiliser les ConfigMaps et Secrets de Kubernetes
- Utiliser les volumes de Kubernetes
- Créer un Helm chart

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab07-kubernetes-helm-{nom}.pdf`
  - Délai: 1 semaine
- Mettez tout votre travail sur une branche `feature/lab07-kubernetes-helm` et faites une merge request (MR) sur `main` en m'ajoutant comme reviewer
- Ajoutez un lien vers le commit dans votre rapport

## Tâches

Reprenez le projet [HEIG-VD DevOps](https://gitlab.com/blueur/heig-vd-devops) pour ce laboratoire.

### Estimer son travail

- Estimez le temps total nécessaire pour réaliser ce laboratoire
  - Découpez le travail en tâches pour faciliter l'estimation
- A la fin du rapport, comparez le temps estimé avec le temps réellement passé:
  | Tâche | Temps estimé | Temps réel | Commentaire |
  |-------|--------------|------------|-------------|
  | ... | 30m | 45m | ... |
  | ... | ... | ... | ... |
  | Total | 2h | 1h30 | ... |

### Limiter les ressources

Définissez les [limites de ressources](https://kubernetes.io/docs/concepts/policy/resource-quotas/#compute-resource-quota) pour vos pods, par exemple:

- 0.25 core de CPU
- 512MiB de RAM

::: tip Question
Quelle est la différence entre les limites et les requêtes de ressources ?
:::

### Utiliser les ConfigMaps et Secrets

Utilisez une ConfigMap pour définir les variables d'environnement suivantes:

- POSTGRES_USER : `postgres`
- POSTGRES_DB : `postgres`

Utilisez un Secret pour définir les variables d'environnement suivantes:

- POSTGRES_PASSWORD : `postgres`

### Utiliser les volumes

Créez un volume pour le pod `postgres` et montez-le dans le dossier `/var/lib/postgresql/data`.

- Utilisez un [PersistentVolumeClaim](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#persistentvolumeclaims) de 128MiB

::: tip Question
Pensez-vous que c'est une bonne idée de déployer une base de données avec Kubernetes ?
:::

### Configurer les stratégies de déploiement

Quelles stratégies de déploiement sont disponibles dans Kubernetes ?

Quelle stratégie de déploiement devriez-vous utiliser pour chacun de vos déploiements ?

::: detail Réponse

Préférez le RollingUpdate pour les applications web et le Recreate pour les bases de données.

:::

### Créer un Helm chart

[Helm](https://helm.sh/) est un package manager pour Kubernetes, une façon de définir et gérer les applications Kubernetes.

- Créez un Helm chart pour votre application : `helm create helm-chart`
- Suivez les instructions de la [documentation](https://helm.sh/docs/chart_template_guide/getting_started/)
- Modifiez le Helm chart pour déployer votre application

## Références

- https://gitlab.com/blueur/heig-vd-devops
