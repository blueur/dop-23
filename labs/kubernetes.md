# Kubernetes

## Objectifs

- Estimer son travail

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
  - On devra pouvoir déployer l'application avec `kubectl apply -f deployment.yaml`
