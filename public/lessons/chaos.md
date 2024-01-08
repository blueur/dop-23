# Ingénierie du chaos

DevOps

---

## Chaos engineering

L’Ingénierie du Chaos est une **discipline** de l’**expérimentation** sur un **système distribué** afin de renforcer la confiance dans la capacité du système à **résister** à des conditions turbulentes en **production**.

https://principlesofchaos.org/fr/

---

## Pourquoi ?

- &shy;<!-- .element: class="fragment" --> Les systèmes sont de plus en plus **complexes** et **distribués**
- &shy;<!-- .element: class="fragment" --> Les composants fonctionnent-ils correctement **ensemble** ?
- &shy;<!-- .element: class="fragment" --> Trouver les **faiblesses** de manière **proactive**
- &shy;<!-- .element: class="fragment" --> **Confiance** dans la **résilience** du système

---

### Préjugés (fallacies) des systèmes distribués

- &shy;<!-- .element: class="fragment" --> Le réseau est **fiable**
- &shy;<!-- .element: class="fragment" --> Le temps de **latence** est nul
- &shy;<!-- .element: class="fragment" --> La **bande passante** est infinie
- &shy;<!-- .element: class="fragment" --> Le réseau est **sécurisé**
- &shy;<!-- .element: class="fragment" --> La topologie ne **change** jamais
- &shy;<!-- .element: class="fragment" --> Il n'y a qu'**un** administrateur
- &shy;<!-- .element: class="fragment" --> Le coût de **transport** est nul
- &shy;<!-- .element: class="fragment" --> Le réseau est **homogène**

---

## Comment ?

Expérimenter en 4 étapes :

1. &shy;<!-- .element: class="fragment" --> **Définition** d'un **état normal** du système par une sortie **mesurable**
2. &shy;<!-- .element: class="fragment" --> **Hypothèse** que groupe témoin **=** expérimental
3. &shy;<!-- .element: class="fragment" --> **Expérience** en **production** en **variant** les dégradations (monde réel)
4. &shy;<!-- .element: class="fragment" --> **Analyse** des **différences** entre les deux groupes

&shy;<!-- .element: class="fragment" --> Commencer par des expériences **limitées**

&shy;<!-- .element: class="fragment" --> **Automatiser** pour lancer les expériences en **continu**

---

## Historique

- &shy;<!-- .element: class="fragment" --> 1983 - Apple : **Monkey** génère des inputs (clavier, souris) aléatoires et frénétiques
- &shy;<!-- .element: class="fragment" --> 2003 - Amazon : **GameDay** simule régulièrement des pannes en production
- &shy;<!-- .element: class="fragment" --> 2006 - Google : **DiRT** similaires à GameDay
- &shy;<!-- .element: class="fragment" --> 2011 - Netflix : **Chaos Monkey** tue aléatoirement des instances en production

---

## Simian Army (Netflix sur AWS)

- &shy;<!-- .element: class="fragment" --> **Chaos Monkey**
  - tue aléatoirement des **instances** en production
- &shy;<!-- .element: class="fragment" --> **Latency Monkey**
  - introduit des **délais** aléatoires sur le réseau
- &shy;<!-- .element: class="fragment" --> **Conformity Monkey**
  - détecte les instances non conformes aux **bonnes pratiques**
- &shy;<!-- .element: class="fragment" --> **Doctor Monkey**
  - détecte les problèmes de **santé** des instances

---

## Simian Army (Netflix sur AWS)

- &shy;<!-- .element: class="fragment" --> **Janitor Monkey**
  - supprime les ressources **inutilisées**
- &shy;<!-- .element: class="fragment" --> **Security Monkey**
  - Conformity Monkey pour des **vulnérabilités** de sécurité
- &shy;<!-- .element: class="fragment" --> **10-18 Monkey**
  - détecte les problèmes de **localisation**
- &shy;<!-- .element: class="fragment" --> **Chaos Gorilla**
  - Chaos Monkey pour des **zones de disponibilité**

---

### Résultats

- &shy;<!-- .element: class="fragment" --> **Panne** majeur d'**AWS** en 21 avril 2011 et 24 décembre 2012
- &shy;<!-- .element: class="fragment" --> Pas d'**interruption** de service pour **Netflix**

---

## Et maintenant ?

- &shy;<!-- .element: class="fragment" --> **Design for failure** est devenu une **bonne pratique**
- &shy;<!-- .element: class="fragment" --> **Simian Army** n'est plus maintenu depuis 2018
  - &shy;<!-- .element: class="fragment" --> **Chaos Monkey** subsiste
- &shy;<!-- .element: class="fragment" --> **Chaos Toolkit** est développé depuis 2017
  - https://chaostoolkit.org/ <!-- .element: target="_blank" -->
