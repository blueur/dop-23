# GitOps

DevOps

---

DevOps + IaC + CD = GitOps

---

### Historique GitOps

![](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/bltdf27b275df1178ed/638885dce69df25504227389/Short-Line-Time-backWhite-2022v2.png)

https://www.weave.works/technologies/gitops/ <!-- .element: class="reference" target="_blank" -->

---

### 4 Principes du GitOps

1. &shy;<!-- .element: class="fragment" --> **Déclaratif**
   - &shy;<!-- .element: class="fragment" --> Infrastructure as Code
2. &shy;<!-- .element: class="fragment" --> **Versionné** et **immutable**
   - &shy;<!-- .element: class="fragment" --> Git comme source de vérité
   - &shy;<!-- .element: class="fragment" --> Historique et collaboration
3. &shy;<!-- .element: class="fragment" --> **Automatique** (Pulled automatically)
   - &shy;<!-- .element: class="fragment" --> Continuous Deployment
4. &shy;<!-- .element: class="fragment" --> **Vérification** (Continuously reconciled)
   - &shy;<!-- .element: class="fragment" --> Monitoring et alertes

---

### Outils du GitOps

![](https://images.contentstack.io/v3/assets/blt300387d93dabf50e/blte49dfe8068ea3667/6388864ba606ea3c93a4f53d/Guide-To-GitOps-Diagrams1.png) <!-- .element: style="height: var(--slides-height)" -->

https://www.weave.works/technologies/gitops/ <!-- .element: class="reference" target="_blank" -->

---

## ArgoCD

![](https://argo-cd.readthedocs.io/en/stable/assets/logo.png)

- &shy;<!-- .element: class="fragment" --> **Outils** GitOps déployé sur **Kubernetes**
- &shy;<!-- .element: class="fragment" --> **Synchronisation** d'un [Helm Chart](https://helm.sh/) ou d'un [Kustomize](https://kustomize.io/) sur Git avec un cluster Kubernetes

---

### ArgoCD

![](https://redhat-scholars.github.io/argocd-tutorial/argocd-tutorial/_images/argocd-sync-flow.png)

https://redhat-scholars.github.io/argocd-tutorial/argocd-tutorial/index.html <!-- .element: class="reference" target="_blank" -->

---

### ArgoCD

![](https://picluster.ricsanfre.com/assets/img/cicd-gitops-architecture.png)

https://picluster.ricsanfre.com/docs/argocd/ <!-- .element: class="reference" target="_blank" -->

---

### ArgoCD

![](https://argoproj.github.io/static/argo-cd-ui-87dce328a7ab3be2d13f7926831068eb.gif)

https://argoproj.github.io/cd/ <!-- .element: class="reference" target="_blank" -->
