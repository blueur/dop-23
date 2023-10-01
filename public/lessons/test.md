# Test automatisé

DevOps

---

## Pourquoi tester ?

- &shy;<!-- .element: class="fragment" --> Éviter les **bugs** et les **régressions**
- &shy;<!-- .element: class="fragment" --> Vérifier la **sécurité** et la **performance**
- &shy;<!-- .element: class="fragment" --> Valider les **spécifications**

---

## Pourquoi tester tôt ?

![](https://www.researchgate.net/profile/Maurice-Dawson/publication/255965523/figure/fig1/AS:297976107945984@1448054448271/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects.png)
https://www.researchgate.net/figure/IBM-System-Science-Institute-Relative-Cost-of-Fixing-Defects_fig1_255965523 <!-- .element: class="reference" target="_blank" -->

---

<!-- .slide: data-background-size="contain" data-background-image="https://www.softwaretestinghelp.com/wp-content/qa/uploads/2007/08/Classification-of-Software-testing-types.png" -->

https://www.softwaretestinghelp.com/types-of-software-testing/ <!-- .element: class="reference" target="_blank" style="top: 49em" -->

---

## (Non-)Fonctionnel

- Test **fonctionnel**
  - &shy;<!-- .element: class="fragment" --> Vérifie que le logiciel fait ce qu'il est censé faire selon les **spécifications fonctionnelles**
  - &shy;<!-- .element: class="fragment" --> Exemples: unitaires, intégration, bout en bout
- Test **non-fonctionnel**
  - &shy;<!-- .element: class="fragment" --> Ne dépends pas des fonctionnalités du logiciel
  - &shy;<!-- .element: class="fragment" --> Exemples: sécurité, performance

---

## Types de tests

- &shy;<!-- .element: class="fragment" --> Tests **unitaires**
- &shy;<!-- .element: class="fragment" --> Tests d'**intégration**
- &shy;<!-- .element: class="fragment" --> Tests de **bout en bout** (E2E)
- &shy;<!-- .element: class="fragment" --> Tests d'**acceptation**
- &shy;<!-- .element: class="fragment" --> Tests de **sécurité**
- &shy;<!-- .element: class="fragment" --> Tests de **performance**

---

### Tests unitaires

- &shy;<!-- .element: class="fragment" --> Vérifie un **composant** isolé (fonction, classe, etc.)
- &shy;<!-- .element: class="fragment" --> Besoin de **mocks** pour simuler les dépendances
  - Mock au niveau de la **classe** ou de la **méthode**
  - Frameworks : Mockito (Java), unittest.mock (Python), etc.
- &shy;<!-- .element: class="fragment" --> Frameworks : JUnit (Java), Jest (JS), unittest (Python), etc.

---

### Tests d'intégration

- &shy;<!-- .element: class="fragment" --> Vérifie l'**interaction** entre plusieurs composants
- &shy;<!-- .element: class="fragment" --> Appel à un **service** externe de test (mock)
  - Mock au niveau du **service** et de sa **réponse**
  - Connection à une **base de données** de test
- &shy;<!-- .element: class="fragment" --> Pour Spring (Java), démarrage d'un **contexte** de test

---

### Tests de bout en bout (end-to-end)

- &shy;<!-- .element: class="fragment" --> Vérifie le **fonctionnement** de l'application en entier du point de vue de l'**utilisateur**
- &shy;<!-- .element: class="fragment" --> Simulation depuis le **navigateur**: Selenium
- &shy;<!-- .element: class="fragment" --> **Déploiement** de l'application sur un environnement de test

---

Pyramide de tests
![](https://user.oc-static.com/upload/2019/08/17/15660719394662_P1CH1_pyramid.png)
https://openclassrooms.com/fr/courses/6100311-testez-votre-code-java-pour-realiser-des-applications-de-qualite/6440061-choisissez-les-bons-tests-automatises-avec-la-pyramide-de-tests <!-- .element: class="reference" target="_blank" -->

---

Pas de glace !
![](https://user.oc-static.com/upload/2019/08/18/15661075632134_P1CH1_cone_tests.png)
https://openclassrooms.com/fr/courses/6100311-testez-votre-code-java-pour-realiser-des-applications-de-qualite/6440061-choisissez-les-bons-tests-automatises-avec-la-pyramide-de-tests <!-- .element: class="reference" target="_blank" -->

---

### Tests d'acceptation

- &shy;<!-- .element: class="fragment" --> Vérifie que le logiciel **répond aux besoins** du client
- &shy;<!-- .element: class="fragment" --> **Scénarios** de test
- &shy;<!-- .element: class="fragment" --> **Déploiement** de l'application sur un environnement accessible au client
- &shy;<!-- .element: class="fragment" --> **Rapport** de test
- &shy;<!-- .element: class="fragment" --> Proche du E2E mais orienté **métier**

---

### Tests de sécurité

- &shy;<!-- .element: class="fragment" --> Vérifie que le logiciel n'est pas **vulnérable** aux attaques
- &shy;<!-- .element: class="fragment" --> Vérification des **dépendances** vulnérables : [OWASP Dependency Check](https://owasp.org/www-project-dependency-check/) <!-- .element: target="_blank" -->, [GitHub Dependabot](https://github.com/dependabot) <!-- .element: target="_blank" -->
- &shy;<!-- .element: class="fragment" --> Analyse du **code source** : [SonarQube](https://www.sonarqube.org/) <!-- .element: target="_blank" -->, [GitLab SAST](https://docs.gitlab.com/ee/user/application_security/sast/) <!-- .element: target="_blank" -->
- &shy;<!-- .element: class="fragment" --> Vérification des vulnérabilités connues sur un **déploiement** : [OWASP ZAP](https://owasp.org/www-project-zap/) <!-- .element: target="_blank" -->

---

### Tests de performance

- &shy;<!-- .element: class="fragment" --> Vérifie que le logiciel **répond aux exigences** de performance
  - &shy;<!-- .element: class="fragment" --> **Load** (charge) : temps de réponse en fonction du nombre d'utilisateurs
  - &shy;<!-- .element: class="fragment" --> **Endurance** : stabilité sur le long terme
  - &shy;<!-- .element: class="fragment" --> **Stress** (surcharge) : stabilité en cas de surcharge
  - &shy;<!-- .element: class="fragment" --> **Scale** : adaptation à une montée en charge
- &shy;<!-- .element: class="fragment" --> Déploiement sur un environnement dédié avec les même **ressources** que la production

---

## Couverture de code

- &shy;<!-- .element: class="fragment" --> Mesure le **pourcentage** de code couvert par les tests
  - &shy;<!-- .element: class="fragment" --> [JaCoCo](https://www.eclemma.org/jacoco/) <!-- .element: target="_blank" --> (Java), [Coverage.py](https://coverage.readthedocs.io/en/) <!-- .element: target="_blank" --> (Python), etc.
- &shy;<!-- .element: class="fragment" --> Couverture des lignes, conditions, fonctions, etc.
- &shy;<!-- .element: class="fragment" --> Fixer un **objectif** de couverture : p. ex. 80%
  - Ne passe pas si <70 %
- &shy;<!-- .element: class="fragment" --> Bonne couverture **≠** bons tests

---

## Random testing

- &shy;<!-- .element: class="fragment" --> Génération **aléatoire** de données de test
- &shy;<!-- .element: class="fragment" --> Vérification du résultat selon les **spécifications**
- &shy;<!-- .element: class="fragment" --> **Seed** pour pouvoir reproduire les tests en cas d'erreur

---

## Test-driven development (TDD)

- &shy;<!-- .element: class="fragment" --> Écriture des tests **avant** le code
  1. &shy;<!-- .element: class="fragment" --> Ajouter un test
  2. &shy;<!-- .element: class="fragment" --> Lancer tous les tests et vérifier l'échec
  3. &shy;<!-- .element: class="fragment" --> Écrire le code
  4. &shy;<!-- .element: class="fragment" --> Lancer tous les tests et vérifier le succès
  5. &shy;<!-- .element: class="fragment" --> Refactor le code

---

![](https://upload.wikimedia.org/wikipedia/commons/0/0b/TDD_Global_Lifecycle.png)

<p class="reference">
  <a href="https://commons.wikimedia.org/wiki/File:TDD_Global_Lifecycle.png">Xarawn</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
</p>
