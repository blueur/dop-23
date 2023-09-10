# Outils

## Objectifs

- Estimer son travail
- Avoir un environnement de travail fonctionnel
- Utiliser GitLab

## Rendu

- Rapport individuel en [Markdown](https://fr.wikipedia.org/wiki/Markdown) sur Cyberlearn avant le prochain cours
  - Nom du fichier: `lab01-tools-{noms}.md`
  - Délai: 1 semaine

## Tâches

### Estimer son travail

- Estimer le temps nécessaire pour réaliser ce laboratoire
  - Parcourir toute la consigne et estimer le temps nécessaire pour chaque tâche
  - Noter l'estimation totale en heures ainsi que le découpage en tâches dans votre rapport
- A la fin du rapport, comparer le temps estimé avec le temps réellement passé
  - Noter le temps réellement passé dans votre rapport
  - Comparer avec l'estimation initiale
  - Expliquer les différences
- Vous pouvez noter sous forme de tableau, par exemple:
  | Tâche | Estimation | Temps réel | Commentaire |
  |-------|------------|------------|-------------|
  | ... | 2h | 1h30 | ... |
- Le but n'étant pas d'estimer correctement, mais de s'améliorer au fil des laboratoires

### Environnement de travail

Installer et vérifier les outils suivants (mettre à jour si nécessaire):

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)
  - Vérifier avec `git --version`
- [Docker](https://www.docker.com/)
  - Vérifier avec `docker --version`
- [Node.js](https://nodejs.org/)
  - Au moins la version LTS
  - Vérifier avec `node --version`
  - Vous pouvez utiliser [nvm](https://github.com/nvm-sh/nvm) pour gérer les versions de Node.js
- [Python](https://www.python.org/)
  - Vérifier avec `python --version`
  - Vous pouvez utiliser [pyenv](https://github.com/pyenv/pyenv) pour gérer les versions de Python
- [Poetry](https://python-poetry.org/)
  - Vérifier avec `poetry --version`
- [MiniKube](https://minikube.sigs.k8s.io/docs/)
  - Vérifier avec `minikube version`

::: tip Conseils

- Préférer les versions stables (LTS) aux versions de développement
  - Moins de bugs
- Préférer les versions officielles aux versions modifiées (p. ex. [Anaconda](https://www.anaconda.com/))
  - On n'installe que les outils nécessaires
- Préférer les gestionnaires de versions (nvm et pyenv) aux installations manuelles
  - Permet de gérer plusieurs versions en parallèle

:::

::: tip Conseils pour Windows

- Utiliser [Chocolatey](https://chocolatey.org/) pour installer les outils
- Utiliser [cmder](https://cmder.app/) comme terminal
  - Intégration avec [Windows Terminal](https://medium.com/talpor/windows-terminal-cmder-%EF%B8%8F-573e6890d143)

:::

### GitLab

- Créer un compte sur [GitLab](https://gitlab.com/)
  - Préférer un compte privé que vous utiliserez par la suite
  - Donner l'URL de votre profil dans votre rapport (p. ex. https://gitlab.com/blueur)
