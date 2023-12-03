# Kubernetes

## Cluster du cours

Il faut être sur le réseau de l'HEIG-VD pour accéder au cluster Kubernetes du cours.  
Au besoin, utilisez un VPN : https://vpn.heig-vd.ch

Rancher : https://rancher.k8s.heig-vd.blueur.com

ArgoCD : https://argocd.k8s.heig-vd.blueur.com

Dashboard : https://dashboard.k8s.heig-vd.blueur.com

## Kubectl

Pour configurer votre `kubectl` local afin de pouvoir accéder au cluster Kubernetes du cours : https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig

Mettez à jours votre fichier `~/.kube/config` avec les informations de votre cluster : https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#file-references

### Contexte

Pour changer de contexte, utilisez la commande `kubectl config use-context <context>` (et pour lister `kubectl config get-contexts`).

Vous pouvez aussi changer de contexte avec [Docker Desktop](https://docs.docker.com/desktop/kubernetes/#switch-between-clusters)

Une autre option est d'utiliser l'[extension VS Code Kubernetes](https://marketplace.visualstudio.com/items?itemName=ms-kubernetes-tools.vscode-kubernetes-tools)
