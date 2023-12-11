# DevSecOps

DevOps

---

## DevOps + Sécurité

![](https://dt-cdn.net/images/devsecops-image-2000-6557ba1b00.png)
https://www.dynatrace.com/news/blog/what-is-devsecops/ <!-- .element: class="reference" target="_blank" -->

---

## DevSecOps

- &shy;<!-- .element: class="fragment" --> **À l'époque** : Équipe sécurité **à part** et en **fin** de cycle
- &shy;<!-- .element: class="fragment" --> Sécurité **intégrée** au processus DevOps
- &shy;<!-- .element: class="fragment" --> **Tout le monde** responsable de la sécurité
- &shy;<!-- .element: class="fragment" --> **Automatisation** des tests de sécurité

---

### DevSecOps Manifesto

https://www.devsecops.org/

- &shy;<!-- .element: class="fragment" --> Amélioration **continue**
- &shy;<!-- .element: class="fragment" --> **Collaboration** et **partage** (contribution publique)
- &shy;<!-- .element: class="fragment" --> **Monitoring** et **tests** de sécurité **proactif** (Red Team vs Blue Team)

---

### Pen Testing

- &shy;<!-- .element: class="fragment" --> Penetration testing (Test d'intrusion)
- &shy;<!-- .element: class="fragment" --> Tester la **sécurité** d'un système en **simulant** une attaque malveillante
- &shy;<!-- .element: class="fragment" --> **Red Team vs Blue Team** est un "jeu" de Pen Testing
  - &shy;<!-- .element: class="fragment" --> Red Team : attaquant
  - &shy;<!-- .element: class="fragment" --> Blue Team : défenseur
  - &shy;<!-- .element: class="fragment" --> **Entraînement** des deux équipes

---

#### Purple Team

![](https://sf-cdn.iansresearch.com/sitefinity/images/default-source/blogs/blog-features/red-blue-purple-teams-who-does-what.png) <!-- .element: style="height: var(--slides-height)" -->
https://www.iansresearch.com/resources/all-blogs/post/security-blog/2022/04/19/understand-the-roles-of-red-blue-and-purple-teams <!-- .element: class="reference" target="_blank" -->

---

## Shift Left

---

### Shift

![](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*dtBnysYjyhnFdD4I-f0IRw.png)
https://medium.com/@dees3g/shift-left-testing-catching-defects-early-11396960d96e <!-- .element: class="reference" target="_blank" -->

---

### Shift Left

- &shy;<!-- .element: class="fragment" --> Se préoccuper (de la sécurité) **tôt** dans le cycle de vie du développement
- &shy;<!-- .element: class="fragment" --> **Détecter** les problèmes depuis la **planification**

---

## Bonnes pratiques

- &shy;<!-- .element: class="fragment" --> **Automatisation** des tests de sécurité (SAST, DAST, etc.)
- &shy;<!-- .element: class="fragment" --> **Monitoring** de la sécurité avec un système SIEM (Security Information and Event Management), comme un outils APM mais orienté sécurité
- &shy;<!-- .element: class="fragment" --> **IaC** pour éviter les erreurs de configuration
- &shy;<!-- .element: class="fragment" --> **Formation** des collaborateurs à la sécurité et **collaboration** (peer review, etc.)
- &shy;<!-- .element: class="fragment" --> Infrastructure **immutable** pour minimiser les failles de sécurité

---

## OWASP

- &shy;<!-- .element: class="fragment" --> Open Web Application Security Project
- &shy;<!-- .element: class="fragment" --> **Organisation** à but non lucratif
- &shy;<!-- .element: class="fragment" --> **Recommandations** pour sécuriser les applications web

---

### OWASP Top 10

![](https://owasp.org/www-project-top-ten/assets/images/mapping.png)
https://owasp.org/www-project-top-ten/ <!-- .element: class="reference" target="_blank" -->

- &shy;<!-- .element: class="fragment" --> Les 10 **risques** de sécurité les plus **critiques**
- &shy;<!-- .element: class="fragment" --> A04:2021 : **Shift Left**
- &shy;<!-- .element: class="fragment" --> A05,A06,A08:2021 : **Automatisation**
- &shy;<!-- .element: class="fragment" --> A09:2021 : **SIEM**

---

## Selon Microsoft

![](https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/secure/media/devsecops-controls.png)
https://learn.microsoft.com/fr-fr/azure/cloud-adoption-framework/secure/devsecops-controls <!-- .element: class="reference" target="_blank" -->

---

## Selon Atlassian

![](https://wac-cdn.atlassian.com/dam/jcr:5f26d67b-bed6-4be1-912b-4032de4d06b0/devsecops-diagram.png) <!-- .element: style="height: var(--slides-height)" -->
https://www.atlassian.com/fr/devops/devops-tools/devsecops-tools <!-- .element: class="reference" target="_blank" -->
