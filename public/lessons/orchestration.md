# Orchestration

DevOps

---

**Orchestration** des **conteneurs**

---

## Orchestration

- &shy;<!-- .element: class="fragment" --> **Automatiser** ...
- &shy;<!-- .element: class="fragment" --> l'**organisation**, la **coordination** et la **gestion**
- &shy;<!-- .element: class="fragment" --> ... des **conteneurs**

---

## Déploiements

![](https://kubernetes.io/images/docs/Container_Evolution.svg)

https://kubernetes.io/docs/concepts/overview/ <!-- .element: class="reference" target="_blank" -->

---

## Orchestrateurs

---

### Docker Compose

- &shy;<!-- .element: class="fragment" --> Limité à une **machine** (host)
- &shy;<!-- .element: class="fragment" --> Définition en **YAML**
  - Healthcheck
  - Scaling
  - Restart policy
  - ...
- &shy;<!-- .element: class="fragment" --> **Simple** et idéal pour un PoC, un test ou un développement

---

### Docker Swarm

- &shy;<!-- .element: class="fragment" --> **Cluster** de machines (hosts)
- &shy;<!-- .element: class="fragment" --> Chaque machine est un **node** qui peut être soit
  - &shy;<!-- .element: class="fragment" --> **Manager** : gère le cluster
  - &shy;<!-- .element: class="fragment" --> **Worker** : exécute les conteneurs
- &shy;<!-- .element: class="fragment" --> **CLI**, pas de GUI intégrée

---

### Docker Swarm

![](https://docs.docker.com/engine/swarm/images/swarm-diagram.png)

https://docs.docker.com/engine/swarm/how-swarm-mode-works/nodes/ <!-- .element: class="reference" target="_blank" -->

---

### Kubernetes

- &shy;<!-- .element: class="fragment" --> **K8s**
- &shy;<!-- .element: class="fragment" --> Créé chez **Google** et offert à la **CNCF** (Cloud Native Computing Foundation)
- &shy;<!-- .element: class="fragment" --> **Master** et **Nodes**
- &shy;<!-- .element: class="fragment" --> **CLI** et **GUI** (Dashboard)

---

### Kubernetes

![](https://upload.wikimedia.org/wikipedia/commons/b/be/Kubernetes.png) <!-- .element: style="height: var(--slides-height)" -->

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:Kubernetes.png">Khtan66</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>

---

### OpenShift

- &shy;<!-- .element: class="fragment" --> Développé par **Red Hat** par dessus **Kubernetes**
- &shy;<!-- .element: class="fragment" --> Fonctionnalités de K8s +
  - Image registry
  - CI/CD intégré
  - Meilleur cloisonnement entre les projets
- &shy;<!-- .element: class="fragment" --> **Open Source** (OKD) et **Enterprise**

---

### OpenShift

![](https://access.redhat.com/webassets/avalon/d/OpenShift_Container_Platform-4.7-About-en-US/images/85e2ccff4943c4c3e4378306c0732873/oke-about.png)

https://access.redhat.com/documentation/en-us/openshift_container_platform/4.7/html/about/oke-about <!-- .element: class="reference" target="_blank" -->

---

### Alternatives

- &shy;<!-- .element: class="fragment" --> **Nomad**
  - Par **HashiCorp** (Vagrant, Terraform, Vault, Consul, ...)
- &shy;<!-- .element: class="fragment" --> **Mesos**
  - Par **Apache**

---

### Rancher

- &shy;<!-- .element: class="fragment" --> **Rancher** est un **orchestrateur de K8s**
- &shy;<!-- .element: class="fragment" --> Evite le **vendor lock-in**

---

### Rancher

![](https://ranchermanager.docs.rancher.com/assets/images/rancher-architecture-separation-of-rancher-server-b32508a12beee49d72836caa5469e585.svg) <!-- .element: style="height: var(--slides-height)" -->

https://ranchermanager.docs.rancher.com/reference-guides/rancher-manager-architecture/architecture-recommendations <!-- .element: class="reference" target="_blank" -->

---

### Rancher

![](https://www.rancher.com/assets/img/logos/screen2-thumbnail-suse.svg) <!-- .element: style="height: var(--slides-height)" -->

https://www.rancher.com/why-rancher <!-- .element: class="reference" target="_blank" -->

---

## Kubernetes

---

## Kubernetes

![](https://www.cncf.io/wp-content/uploads/2020/09/Kubernetes-architecture-diagram-1-1.png) <!-- .element: style="height: var(--slides-height)" -->

https://www.cncf.io/blog/2019/08/19/how-kubernetes-works/ <!-- .element: class="reference" target="_blank" -->

---

### Pod

- &shy;<!-- .element: class="fragment" --> Plus petite **unité** déployable de K8s
- &shy;<!-- .element: class="fragment" --> 1 ou plusieurs **conteneurs** qui partagent
  - le **réseau** (localhost)
  - le **stockage** (volumes)
- &shy;<!-- .element: class="fragment" --> **Phases** : Pending, Running, Succeeded, Failed, Unknown
- &shy;<!-- .element: class="fragment" --> **Restart policy** : Always, OnFailure, Never
- &shy;<!-- .element: class="fragment" --> **Probes** (health check) : Startup (démarré), Readiness (prêt), Liveness (toujours en vie)

---

### Pod

```yaml [1-10|2|6|8|10]
apiVersion: v1
kind: Pod
metadata:
  name: nginx
spec:
  containers:
    - name: nginx
      image: nginx:stable
      ports:
        - containerPort: 80
```

---

### Deployment

- &shy;<!-- .element: class="fragment" --> Défini un **état souhaité** des Pods
  - &shy;<!-- .element: class="fragment" --> Crée un **ReplicaSet** pour chaque nouvel **état**
- &shy;<!-- .element: class="fragment" --> **Rolling update** : déploiement progressif
- &shy;<!-- .element: class="fragment" --> **Rollback** : retour à la version précédente
- &shy;<!-- .element: class="fragment" --> **Scaling** : augmentation ou diminution du nombre de Pods

---

### Deployment

````yaml [1-6|2|7-8,12|12-21]
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:stable
          ports:
            - containerPort: 80
```

---

### Service

- &shy;<!-- .element: class="fragment" --> **Reverse Proxy** sur les **Pods** (Reverse Proxy)
  - &shy;<!-- .element: class="fragment" --> **Selector** sur les Pods
- &shy;<!-- .element: class="fragment" --> **Load Balancing** entre les Pods

---

### Service

![](https://kubernetes.io/docs/tutorials/kubernetes-basics/public/images/module_04_labels.svg) <!-- .element: style="height: var(--slides-height)" -->

https://kubernetes.io/docs/tutorials/kubernetes-basics/expose/expose-intro/ <!-- .element: class="reference" target="_blank" -->

---

### Service

```yaml [1-13|15-26|5-6|20-21|11-13|22-26|13,26]
apiVersion: v1
kind: Pod
metadata:
  name: nginx
  labels:
    app.kubernetes.io/name: proxy
spec:
  containers:
    - name: nginx
      image: nginx:stable
      ports:
        - containerPort: 80
          name: http-web-svc

apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app.kubernetes.io/name: proxy
  ports:
    - name: name-of-service-port
      protocol: TCP
      port: 80
      targetPort: http-web-svc
````

---

### Ingress

- &shy;<!-- .element: class="fragment" --> **Abstraction** qui définit un ensemble de **Services**
- &shy;<!-- .element: class="fragment" --> Connexion **externe** au cluster

---

### Ingress

![](https://kubernetes.io/docs/images/ingress.svg)

https://kubernetes.io/docs/concepts/services-networking/ingress/ <!-- .element: class="reference" target="_blank" -->

---

### Volume

![](https://vocon-it.com/wp-content/uploads/2018/12/2018-12-02-23_05_06-Minikube-and-Kubeadm-Google-Pr%C3%A4sentationen.png)

https://vocon-it.com/2018/12/10/kubernetes-4-persistent-volumes-hello-world/ <!-- .element: class="reference" target="_blank" -->

---

### Configuration

- &shy;<!-- .element: class="fragment" --> Définition des **ConfigMap** et **Secret** globalement
- &shy;<!-- .element: class="fragment" --> **Injection** dans les Pods

---

### Configuration des ressources

- &shy;<!-- .element: class="fragment" --> Fichier YAML pour définir les ressources
- &shy;<!-- .element: class="fragment" --> `kubectl apply -f deployment.yaml` pour les déployer
  - Deployment
  - Service
  - Ingress
  - ConfigMap
  - Secret
