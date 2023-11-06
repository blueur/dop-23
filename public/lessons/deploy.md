# Déploiement

DevOps

---

Comment automatiser les déploiements ?

→ Reproductibilité <!-- .element: class="fragment" -->

→ Configuration-as-Code <!-- .element: class="fragment" -->

→ Infrastructure-as-Code <!-- .element: class="fragment" -->

---

## Infrastructure-as-Code

- &shy;<!-- .element: class="fragment" --> IaC
- &shy;<!-- .element: class="fragment" --> **Définition** de l'infrastructure dans des **fichiers**
- &shy;<!-- .element: class="fragment" --> Gestion de **version** des fichiers
- &shy;<!-- .element: class="fragment" --> **Automatisation** de la **création** de l'infrastructure
- &shy;<!-- .element: class="fragment" --> **Reproductibilité** et **documentation**
  - &shy;<!-- .element: class="fragment" --> Redéploiement en cas de **panne** et **rollback** facilité
- &shy;<!-- .element: class="fragment" --> **Idempotence** : toujours le même résultat

---

![](https://content.altexsoft.com/media/2022/11/word-image-21.png.webp)

https://www.altexsoft.com/blog/infrastructure-as-code/ <!-- .element: class="reference" target="_blank" -->

---

### Déclaratif vs Impératif

- **Déclarative**
  - &shy;<!-- .element: class="fragment" --> décrire l'état final souhaité
  - &shy;<!-- .element: class="fragment" --> Exemple : Kubernetes
- **Impérative**
  - &shy;<!-- .element: class="fragment" --> décrire toutes les étapes
  - &shy;<!-- .element: class="fragment" --> Exemple : Script, (Journal de bord)

---

![](https://content.altexsoft.com/media/2022/11/word-image-22.png.webp) <!-- .element: style="height: 700px" -->

---

## Mise à jour

---

### Big Bang

![](https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-big-bang.svg)

https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/ <!-- .element: class="reference" target="_blank" -->

---

### Blue-Green

![](https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-blue-green.svg)

https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/ <!-- .element: class="reference" target="_blank" -->

---

### Rolling / Phased

![](https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-rolling-release.svg)

https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/ <!-- .element: class="reference" target="_blank" -->

---

### Canary

![](https://www.cncf.io/wp-content/uploads/2022/07/deployment-strategies-canary.svg)

https://www.cncf.io/blog/2022/05/09/load-balancing-for-blue-green-rolling-and-canary-deployment/ <!-- .element: class="reference" target="_blank" -->

---

## Niveau de service

- **SLA**
  - &shy;<!-- .element: class="fragment" --> Service Level **Agreement**
  - &shy;<!-- .element: class="fragment" --> Accord avec le **client**
- **SLO**
  - &shy;<!-- .element: class="fragment" --> Service Level **Objective**
  - &shy;<!-- .element: class="fragment" --> Objectif de **qualité** du service
- **SLI**
  - &shy;<!-- .element: class="fragment" --> Service Level **Indicator**
  - &shy;<!-- .element: class="fragment" --> Indicateur des **performance** réelles

---

## Relation

- **SLA** = **SLO**s + conséquences
- &shy;<!-- .element: class="fragment" --> **SLO** = seuil d'un **SLI**

---

## Exemple

- **SLO** de 99.9% de disponibilité hebdomadaire
  - ```katex
    \frac{1}{1000} \times 7 \times 24 \times 60 = 10.08
    ```
  - &shy;<!-- .element: class="fragment" --> au maximum 10 minutes de panne par semaine
- &shy;<!-- .element: class="fragment" --> **SLA** : **pénalités** de 100 CHF par minute de panne supplémentaire
- &shy;<!-- .element: class="fragment" --> **SLI** : Le temps de panne réellement mesuré
