# Mon projet Yeoman

## Pourquoi ?

Parce que c'est relou de toujours tout devoir reconfigurer

## Objectif

Realiser un package Yeoman qui permettra d'installer une config minimal **SCALABLE SI POSSIBLE** pour un projet front avec :

- un minium d'archi
  - src /assets /screens /...
  - eslint
  - prettier
  - babel
  - tailwind
  - _etc etc_

## Futur

:warning: Tester la meme chose mais via [`minipass`](https://www.npmjs.com/package/minipass)

## Documentation

[DOCS](./DOCS.md)

## Besoin

- Suivre la doc de Yeoman
- Rendre la lib yeoman dispo en local
- Rendre la lib yeoman dispo partout
- Personne ne doit avoir d'erreur sans savoir ou sa crash donc => **UN MAX DE LOGS**

---

---

---

### Deja mis en place

- [Setup](https://yeoman.io/authoring/)

### TODO

- [Ajout de packages](https://yeoman.io/authoring/dependencies)

- [Ajout d'une archi de fichier](https://yeoman.io/authoring/file-system)

- [Mettre le repo en ligne et dispo sur Yeoman](https://yeoman.io/generators/)

# OU J'EN SUIS ?

## Terminal

- suivre la partie `generator-anthoinesg-project` sur un terminal
  - `npm link`
- suivre la partie `_ping` sur un terminal
  - `yo anthoinesg-project:ping`
- suivre la partie `_test1` sur un terminal
  - `yo anthoinesg-project`

## Code

Continuer d'ajouter des truc dans `generator-anthoinesg-project/app/index.js` et suivre la [TODO](#todo)
