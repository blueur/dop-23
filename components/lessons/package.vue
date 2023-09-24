<template>
  <Reveate>
    <section data-auto-animate data-markdown>
      <textarea data-template>
        # Package
        DevOps
---
        ## Cycle de vie d'un programme
        ```mermaid
        flowchart LR
        subgraph "Développement"
          code[fas:fa-code Code]-->build[fas:fa-cogs Build]
        end
          build-->package[fas:fa-archive Package]-->run
        subgraph "Production"
          run[fas:fa-play Run]-->deploy[fas:fa-cloud Operate]
        end
        ```
---
        ## Package
        - &shy;<!-- .element: class="fragment" --> **Contrat** entre le développeur et l'opérateur
        - &shy;<!-- .element: class="fragment" --> **Format** de livraison
        - &shy;<!-- .element: class="fragment" --> Exemples :
            - &shy;<!-- .element: class="fragment" --> .jar, .war, .ear (Java)
            - &shy;<!-- .element: class="fragment" --> .apk (Android)
            - &shy;<!-- .element: class="fragment" --> .exe, .dll (Windows)
            - &shy;<!-- .element: class="fragment" --> .html, .css, .js (Web)
---
        ### Dépendances
        - &shy;<!-- .element: class="fragment" --> Besoin de libraries **externes** ?
        - &shy;<!-- .element: class="fragment" --> Comment les **gérer** et les **distribuer** ?
        - &shy;<!-- .element: class="fragment" --> **Gestionnaire de paquets**
        - &shy;<!-- .element: class="fragment" --> Fichier de configuration (liste des dépendances)
            - &shy;<!-- .element: class="fragment" --> pom.xml (Maven)
            - &shy;<!-- .element: class="fragment" --> package.json (npm)
            - &shy;<!-- .element: class="fragment" --> requirements.txt (pip)
---
        #### Gestionnaire de paquets
        - &shy;<!-- .element: class="fragment" --> Maven, Gradle (Java)
        - &shy;<!-- .element: class="fragment" --> npm, yarn (Node.js)
        - &shy;<!-- .element: class="fragment" --> APT (Advanced Packaging Tool) (Linux)
        - &shy;<!-- .element: class="fragment" --> pip, Poetry (Python)
---
        ### Configuration
        - &shy;<!-- .element: class="fragment" --> Comment **run** le programme ?
        - &shy;<!-- .element: class="fragment" --> Quel **OS** ?
        - &shy;<!-- .element: class="fragment" --> Quelle **version** ?
        - &shy;<!-- .element: class="fragment" --> Quelle **commande** ?
            - &shy;<!-- .element: class="fragment" --> Quels **arguments** ?
---
        ## Mieux qu'un paquet ?
        - &shy;<!-- .element: class="fragment" --> Souhait : Code + Dépendances + Configuration
        - &shy;<!-- .element: class="fragment" --> Solution 1 : Machine virtuelle ?
            - &shy;<!-- .element: class="fragment" --> Problème : **lourd** et **lent** 
        - &shy;<!-- .element: class="fragment" --> Solution 2 : **OS-level** virtualization (Conteneur)
---
        ## Conteneur vs machine virtuelle
        ![](https://www.docker.com/wp-content/uploads/2021/11/docker-containerized-and-vm-transparent-bg.png)
        https://www.docker.com/resources/what-container/ <!-- .element: class="reference" target="_blank" -->
---
        ## Conteneur
        - &shy;<!-- .element: class="fragment" --> Partage le **noyau** de l'OS
        - &shy;<!-- .element: class="fragment" --> **Isolation** des ressources (fichiers, processus, ...)
        - &shy;<!-- .element: class="fragment" --> **Léger** (distribution) et **rapide** (démarrage)
        - &shy;<!-- .element: class="fragment" --> **Docker** (leader)
            - &shy;<!-- .element: class="fragment" --> Entreprise **privée**
            - &shy;<!-- .element: class="fragment" --> Construit sur des technologies **pré-existante** (namespaces, cgroups, ...)
        - &shy;<!-- .element: class="fragment" --> **Podman** (alternative)
            - &shy;<!-- .element: class="fragment" --> Projet **open-source**
---
        ![](https://upload.wikimedia.org/wikipedia/commons/0/09/Docker-linux-interfaces.svg)
        <p class="reference">
          <a href="https://commons.wikimedia.org/wiki/File:Docker-linux-interfaces.svg">User:Maklaan</a>, Public domain, via Wikimedia Commons
        </p>
---
        ![](https://jfrog--c.documentforce.com/servlet/servlet.ImageServer?id=01569000008kqFT&oid=00D20000000M3v0)
        https://jfrog.com/devops-tools/article/understanding-and-building-docker-images/ <!-- .element: class="reference" target="_blank" -->
---
        ## Artefact
        - &shy;<!-- .element: class="fragment" --> **Résultat** d'un **build**
        - &shy;<!-- .element: class="fragment" --> Terme **générique** (pas de format spécifique) du paquet
---
        ### Artefact vs Package
        ```mermaid
        flowchart
        subgraph "Artefact"
          docker[Docker image]
          subgraph "Package"
            jar[JAR]
            npm[npm package]
            python[Python wheel]
          end
        end
        ```
---
        ## Gestionnaire d'artefacts
        - &shy;<!-- .element: class="fragment" --> [Sonatype Nexus Repository](https://www.sonatype.com/nexus-repository-sonatype) <!-- .element: target="_blank" -->
            - &shy;<!-- .element: class="fragment" --> [Version OSS](https://www.sonatype.com/nexus-repository-oss) (open-source software) <!-- .element: target="_blank" -->
        - &shy;<!-- .element: class="fragment" --> [JFrog Artifactory](https://jfrog.com/artifactory/) <!-- .element: target="_blank" -->
            - &shy;<!-- .element: class="fragment" --> Version payante plus complète que Nexus
      </textarea>
    </section>
  </Reveate>
</template>
