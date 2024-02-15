# Docs

## Comment ça marche ?

### En local

Apres avoir cloner le repo

```bash
# Pour permetre a npm de capter les commandes liée a ce package en local
npm link
```

Installer un generateur pour démarrer un projet

```bash
# A la racine du dossier ou vous voulez crée le projet
# Generer le generator par default app :
yo anthoinesg-project

# Generer le generator ping :
yo anthoinesg-project:ping
```

### En remote

TODO:

## Archi d'un generator

```txt
.
├── package.json
├── README.md
├── app
│   ├── index.js
│   └── templates
│       └── main.ts
└── other
    ├── index.js
    └── templates
        └── main.ts
```

Les generator sont defini a la racine du projet

- Le generator par default est celui du dossier `app`
- Les autres generator sont defini comme `other`

Chaque generator a toujours un fichier `index.js` ou est defini sa config

Le dossier `template` est l'endroit ou le code sera copier au moment de la instantiation du generator

## Config minimal du `package.json`

```json
{
  "name": "generator-[CUSTOM_NAME]",
  "version": "0.1.0",
  "description": "",
  "type": "module", // Si necessaire
  "files": [
    "app" // Liste de nom des generator
  ],
  "keywords": ["yeoman-generator"],
  "dependencies": {
    "yeoman-generator": "^7.1.1"
  }
}
```

## Config de l'`index.js` d'un generator

```js
import Generator from "yeoman-generator";

// Definition de default class obligatoire avec yeoman d'autre libs fonctionnent différemment
export default class extends Generator {
  // Le rangement des method n'est pas important mais leur nom oui
  // Certaines method on des nom reserver et seront trigger dans un ordre bien precis

  // Premiere method appeler
  initializing() {}

  // Appeler au debut (pas forcement en 2eme)
  async prompting() {}

  // Premiere method ou l'on ajoute ce que l'on veut
  start() {}

  // Method jamais appeler a utiliser dans le context de la call
  _neverCall() {}

  // Method custom
  random() {}

  // Toute derniere method appeler
  end() {}
}
```

## Config du dossier `template`

Ajout de tout ce qui est necessaire pour la creation du nouveau projet
