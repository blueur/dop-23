# Kubernetes

## Objectifs

- Estimer son travail
- Utiliser minikube
- Déployer une application sur Kubernetes
- Créer un fichier `deployment.yaml` pour déployer l'application

## Rendu

- Rapport individuel en **PDF** sur Cyberlearn
  - Nom du fichier: `lab05-kubernetes-{nom}.pdf`
  - Délai: 1 semaine
- Mettez tout votre travail sur une branche `feature/05-kubernetes` et faites une merge request (MR) sur `main` en m'ajoutant comme reviewer
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

### Utiliser minikube

- Suivez les instructions sur [minikube](https://minikube.sigs.k8s.io/docs/start/) pour déployer des applications sur votre machine
  - Suivez les points suivants:
    - 2. Start your cluster
    - 3. Interact with your cluster
    - 4. Deploy applications
      - Service
      - LoadBalancer
        - Scale votre Deployment à 2 replicas et vérifiez que les requêtes sont bien réparties entre les deux pods (en y accédant en navigation privée)
      - Ingress
- Regardez les logs (au niveau du pod)
  - Sur le dashboard, sélectionnez un pod
    - En haut à droite, il y a plusieurs icônes, dont `View logs` et `Exec into pod`
  - En ligne de commande, utilisez `kubectl logs` et `kubectl exec` (`kubectl get pods` pour lister les pods)

### Déployer une application

On va déployer notre application sur Kubernetes. Les instructions suivantes utilise https://gitlab.com/blueur/heig-vd-devops mais vous être libre d'utiliser votre propre application.

#### GUI

Déployez l'application sur Kubernetes en utilisant le dashboard.

- Déployez le frontend
  - Cliquez sur le `+` en haut à droite
    - `Create from form`
      - App name : `frontend`
      - Container image : `registry.gitlab.com/blueur/heig-vd-devops/frontend:latest`
      - Service : `Internal`
      - Port : `80`
      - Target port : `80`
    - Cliquez sur `Deploy`
  - Vous pourrez accéder à l'application avec `minikube service frontend`
- Déployez une base de donnée
  - App name : `database`
  - Container image : `postgres:16-alpine`
  - Service : `Internal`
  - Port : `5432`
  - Target port : `5432`
  - Cliquez sur `Show advanced options`
    - Environment variables
      - `POSTGRES_PASSWORD` : `postgres`
  - Cliquez sur `Deploy`
- Déployez le backend
  - App name : `backend`
  - Container image : `registry.gitlab.com/blueur/heig-vd-devops/backend:latest`
  - Service : `Internal`
  - Port : `80`
  - Target port : `80`
  - Cliquez sur `Show advanced options`
    - Environment variables
      - `POSTGRES_HOST` : `database`
      - `POSTGRES_PASSWORD` : `postgres`
      - `ROOT_PATH`: `/api`
- Créez un ingress

  - `Create from input`

    ```yaml
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: heig-vd-devops-ingress
      annotations:
        nginx.ingress.kubernetes.io/use-regex: "true"
        nginx.ingress.kubernetes.io/rewrite-target: /$2
    spec:
      rules:
        - http:
            paths:
              - path: /
                pathType: Prefix
                backend:
                  service:
                    name: frontend
                    port:
                      number: 80
              - path: /api(/|$)(.*) # https://kubernetes.github.io/ingress-nginx/examples/rewrite/
                pathType: ImplementationSpecific
                backend:
                  service:
                    name: backend
                    port:
                      number: 80
    ```

- Vous pourrez accéder à l'application sur http://127.0.0.1/

#### CLI

- Suivez les instructions pour créer une application stateless : https://kubernetes.io/docs/tasks/run-application/run-stateless-application-deployment/
- Suivez les instructions pour créer une application stateful : https://kubernetes.io/docs/tasks/run-application/run-single-instance-stateful-application/
- Créez un fichier `deployment.yaml` à la racine de votre repository qui permet de déployer votre application sur Kubernetes.
  - On devra pouvoir déployer ou mettre à jour toute l'application avec `kubectl apply -f deployment.yaml`

### Google Cloud

::: danger Attention

La consommation des ressources sur Google Cloud est payante à la minute. Vérifiez que vous avez bien supprimé toutes vos ressources après avoir terminé ce laboratoire ou lors d'une pause prolongée.

:::

- Créez un compte Google Cloud avec votre adresse email HEIG-VD
- Installez [gcloud CLI](https://cloud.google.com/sdk/docs/install?hl=fr) sur votre machine
  - `gcloud init`
    - Cloud project : `heig-vd-devops`
    - Google Compute Engine zone : `europe-west6-b`
  - `gcloud -v`
- [Accéder au cluster](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-access-for-kubectl?hl=fr)
  - Installez le plugin GKE `gcloud components install gke-gcloud-auth-plugin`
    - `gke-gcloud-auth-plugin --version`
- Configurez votre cluster `gcloud container clusters get-credentials heig-vd-dop-cluster --region=europe-west6`
- Déployez une application d'exemple `kubectl apply -f https://storage.googleapis.com/minikube-site-examples/ingress-example.yaml`
  - Accédez au [dashboard](https://console.cloud.google.com/kubernetes/list/overview?project=heig-vd-devops)
    - Dans le menu de gauche, sous `Kubernetes Engine`, cliquez sur `Services & Ingress`
    - Vous devriez voir (dans le menu tabulaire `Ingress`) un ingress `example-ingress` avec une IP externe
    - Vous pourrez accéder à l'application sur cette IP (le déploiement prend plusieurs minutes)
- Pour supprimer votre déploiement, utilisez `kubectl delete -f https://storage.googleapis.com/minikube-site-examples/ingress-example.yaml`

Essayez aussi de déployer votre application sur Google Cloud.

### Contextes

Pour pouvoir utiliser plusieurs clusters Kubernetes, on peut utiliser des [contextes](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/).

- Lister les contextes: `kubectl config get-contexts`
- Changer de contexte: `kubectl config use-context <context-name>`
