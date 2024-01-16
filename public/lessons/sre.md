# Ingénierie de la fiabilité des sites

DevOps

---

Site Reliability Engineering (SRE)

&shy;<!-- .element: class="fragment" --> SRE is what you get when you treat **operations** as if it’s a **software** problem.

https://sre.google/ <!-- .element: class="fragment" target="_blank" -->

---

## SRE

- &shy;<!-- .element: class="fragment" --> Créé en 2004 chez Google par Ben Treynor Sloss
- &shy;<!-- .element: class="fragment" --> Le principe : Un·e ingénieur·e **logiciel** qui s'occupe de l'**opérationnel**
- &shy;<!-- .element: class="fragment" --> **Développe** des outils pour **automatiser** les tâches opérationnelles

---

## SRE vs DevOps

- &shy;<!-- .element: class="fragment" --> Similarités :
  - &shy;<!-- .element: class="fragment" --> **Collaboration** entre les équipes
  - &shy;<!-- .element: class="fragment" --> **Automatisation** des tâches (tâches manuelles répétitives à bannir)
- &shy;<!-- .element: class="fragment" --> Différences :
  - &shy;<!-- .element: class="fragment" --> SRE **précède** d'environ 3 ans DevOps (2007)
  - &shy;<!-- .element: class="fragment" --> SRE est une **pratique**, DevOps est une **culture**
  - &shy;<!-- .element: class="fragment" --> DevOps se concentre sur la **livraison** de logiciels, SRE sur la **fiabilité** des systèmes

---

## Élimination des labeurs (toil)

Une tâche est probablement un labeur lorsque c'est :

- &shy;<!-- .element: class="fragment" --> **Manuel** : intervention humaine
- &shy;<!-- .element: class="fragment" --> **Répétitif** : refaire la même chose
- &shy;<!-- .element: class="fragment" --> **Automatisable** : une machine peut le faire
- &shy;<!-- .element: class="fragment" --> **réactif** (pas proactif) : répondre à des événements au lieu de prévenir leur apparition
- &shy;<!-- .element: class="fragment" --> **Sans valeur ajoutée durable** : réparer sans améliorer
- &shy;<!-- .element: class="fragment" --> **Pas scalable** : O(n) au lieu de O(1)

---

## Conséquences des labeurs (toil)

Si on perd trop de temps à faire des labeurs :

- &shy;<!-- .element: class="fragment" --> **Carrière stagnante** : pas de temps pour apprendre/évoluer
- &shy;<!-- .element: class="fragment" --> **Moral bas** : chacun·e a une limite de labeurs supportables

---

## Lessons Learned from Two Decades of Site Reliability Engineering

https://sre.google/resources/practices-and-processes/twenty-years-of-sre-lessons-learned/
