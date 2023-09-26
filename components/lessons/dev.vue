<template>
  <Reveate>
    <section data-auto-animate data-markdown>
      <textarea data-template>
        # Développement
        DevOps
---
        ## The twelve-factor app
        https://12factor.net/fr/ <!-- .element: target="_blank" -->
        - &shy;<!-- .element: class="fragment" --> Pour **concevoir** des applications :
            - &shy;<!-- .element: class="fragment" --> Facile à **déployer** sur le cloud
            - &shy;<!-- .element: class="fragment" --> **Portables** entre les environnements
            - &shy;<!-- .element: class="fragment" --> **Scalables** sans changement d'architecture
        - &shy;<!-- .element: class="fragment" --> Pour le **cloud**, mais compatible DevOps
---
        ### I. Base de code
        ![](https://12factor.net/images/codebase-deploys.png)
        - &shy;<!-- .element: class="fragment" --> Plusieurs déploiements, un même code **versionné**
        - &shy;<!-- .element: class="fragment" --> Factorisation du code en **dépendance** externe
---
        ### II. Dépendances
        - &shy;<!-- .element: class="fragment" --> Déclaration explicite des **dépendances** externes avec leur **version**
        - &shy;<!-- .element: class="fragment" --> Utilisation d'un **gestionnaire** de dépendances
---
        ### III. Configuration
        - &shy;<!-- .element: class="fragment" --> **Séparation** de la configuration de l'application
        - &shy;<!-- .element: class="fragment" --> Paramétrage par des **variables d'environnement**
        - &shy;<!-- .element: class="fragment" --> **Même code** en production et en développement, mais **configuration différente**
---
        ### IV. Services
        - &shy;<!-- .element: class="fragment" --> Les **ressources** externes sont des services **remplaçables**
            - &shy;<!-- .element: class="fragment" --> Base de données, serveur mail, cache, etc.
        - &shy;<!-- .element: class="fragment" --> **Connexion** aux services par des variables d'environnement
---
        ### V. Assemblez, publiez, exécutez (Build, release, run)
        ![](https://12factor.net/images/release.png)
        - &shy;<!-- .element: class="fragment" --> **Séparation** des trois étapes
---
        ### VI. Processus
        - &shy;<!-- .element: class="fragment" --> L'application est **sans état** (stateless)
        - &shy;<!-- .element: class="fragment" --> Les états sont stockées dans des **services** externes (base de données, cache, etc.)
---
        ### VII. Associations de ports
        - &shy;<!-- .element: class="fragment" --> L'application est **accessible** uniquement par des **ports**
        - &shy;<!-- .element: class="fragment" --> Peut devenir un **service** externe d'une autre application
---
        ### VIII. Concurrence
        ![](https://12factor.net/images/process-types.png)
        - &shy;<!-- .element: class="fragment" --> **Scalabilité** par duplication des processus indépendants
---
        ### IX. Jetable
        - &shy;<!-- .element: class="fragment" --> **Démarrage** et **arrêt** rapide
        - &shy;<!-- .element: class="fragment" --> **Redémarrage** sans perte de données
---
        ### X. Parité dev/prod
        - &shy;<!-- .element: class="fragment" --> Proximité des **environnements** de développement et de production
            - &shy;<!-- .element: class="fragment" --> **Temporelle** : dernière version rapidement déployée
            - &shy;<!-- .element: class="fragment" --> **Humaine** : même équipe pour les deux environnements
            - &shy;<!-- .element: class="fragment" --> **Technique** : mêmes outils/technologies (OS, DB, etc.)
---
        ### XI. Logs
        - &shy;<!-- .element: class="fragment" --> Logs traités comme des **flux** d'événements (pas de fichiers)
        - &shy;<!-- .element: class="fragment" --> Logs envoyés à la **sortie standard** (stdout)
        - &shy;<!-- .element: class="fragment" --> Logs **agrégés** et **indexés** par un service externe
---
        ### XII. Processus d’administration
        - &shy;<!-- .element: class="fragment" --> Exécution des commandes d'**administration/maintenance** dans un processus **ponctuel**
        - &shy;<!-- .element: class="fragment" --> Par exemple : migration de la base de données
        - &shy;<!-- .element: class="fragment" --> Livrées avec le code de l'application
---
        ## Environnement local
        - &shy;<!-- .element: class="fragment" --> **Déployer** l'application sur sa **machine** 
            - &shy;<!-- .element: class="fragment" --> **similaire** à la production
        - &shy;<!-- .element: class="fragment" --> **Docker** : virtualise une machine
        - &shy;<!-- .element: class="fragment" --> **Docker Compose** : virtualise un réseau de machines (avec des sous-réseaux)
---
        ## Docker Compose
        - &shy;<!-- .element: class="fragment" --> **Définition** des services dans un fichier YAML `docker-compose.yml`
        - &shy;<!-- .element: class="fragment" --> **Actions groupées** : 
            - &shy;<!-- .element: class="fragment" --> `docker-compose up`, `docker-compose down`, etc.
        - &shy;<!-- .element: class="fragment" --> **Préconfiguration** des containers : 
            - &shy;<!-- .element: class="fragment" --> variables d'environnement, ports, volumes, réseaux, etc.
---
        ### Docker Compose : Exemple
        ```yaml
        version: '3'
        services:
          db:
            image: postgres
            environment:
              POSTGRES_PASSWORD: password
          web:
            build: .
            command: python serve.py
            environment:
              DATABASE_URL: 'postgres://postgres:password@db/postgres'
            ports:
              - "8000:8000"
        ```
---
        ### Docker Compose : Utilisation
        - &shy;<!-- .element: class="fragment" --> **environment** de développement (local)
        - &shy;<!-- .element: class="fragment" --> **tests** d'intégration
        - &shy;<!-- .element: class="fragment" --> **poc** (proof of concept) avec des réseaux
      </textarea>
    </section>
  </Reveate>
</template>
