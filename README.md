Parame15L
=========


Presentation
------------

*Parame15L* is the top-monorepo for the design-library *desi15L*, which contains a collection of 3D shapes.

This monorepo contains the following *javascript* package:

1. desi15L: a *parametrix* design library
2. desi15L-cli: the cli of desi15L
3. desi15L-ui: the web-ui of desi15L
4. desi15L-uis: the web-server of desi15L-ui

This repo is a typical designer-repository using [parametrix](https://charlyoleg2.github.io/parametrix/).
The design-library and its associated UI and CLI are published as *npm-packages*.
The UI is also available on the github-page.


Links
-----

- [desi15L-ui](https://charlyoleg2.github.io/parame15L/) : public instance of the UI
- [sources](https://github.com/charlyoleg2/parame15L) : git-repository
- [pkg](https://www.npmjs.com/package/desi15L) : desi15L as npm-package
- [pkg-cli](https://www.npmjs.com/package/desi15L-cli) : desi15L-cli as npm-package
- [pkg-uis](https://www.npmjs.com/package/desi15L-uis) : desi15L-uis as npm-package


Usage for Makers
----------------

Parametrize and generate your 3D-files with the online-app:

[https://charlyoleg2.github.io/parame15L/](https://charlyoleg2.github.io/parame15L/)

Or use the UI locally:

```bash
npx desi15L-uis
```

Or use the command-line-interface (CLI):

```bash
npx desi15L-cli
```

Getting started for Dev
-----------------------

```bash
git clone https://github.com/charlyoleg2/parame15L
cd parame15L
npm i
npm run ci
npm run preview
```

Other useful commands:
```bash
npm run clean
npm run ls-workspaces
npm -w desi15L run check
npm -w desi15L run build
npm -w desi15L-ui run dev
```

Prerequisite
------------

- [node](https://nodejs.org) version 20.10.0 or higher
- [npm](https://docs.npmjs.com/cli/v7/commands/npm) version 10.5.0 or higher


Publish a new release
---------------------

```bash
npm run versions
git commit -am 'increment sub versions'
npm version patch
git push
git push origin v0.5.6
```
