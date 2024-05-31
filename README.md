Parame15L
=========


Presentation
------------

*Parame15L* is the monorepo for the *geometrix design* library *desi15L*.

This is the monorepo that contains a single *javascript* packages:

1. desi15L: a sandbox of 3D-parts using *geometrix*

The *UI* and *Cli* apps associated to *desi15L* are generated automatically using [paxApps](https://github.com/charlyoleg2/parame_paxApps).

This repo is a simple designer-repository using [parametrix](https://charlyoleg2.github.io/parametrix/).


Links
-----

- [desi15L-ui](https://charlyoleg2.github.io/parame15L/) : public instance of the UI
- [sources](https://github.com/charlyoleg2/parame15L) : git-repository
- [pkg](https://www.npmjs.com/package/desi15L) : desi15L as npm-package


Prerequisite
------------

- [node](https://nodejs.org) version 20.10.0 or higher
- [npm](https://docs.npmjs.com/cli/v7/commands/npm) version 10.2.4 or higher


Getting started
---------------

```bash
git clone https://github.com/charlyoleg2/parame15L
cd parame15L
npm i
npm run clean_paxApps
npm run install_paxApps
rm -fr node_modules
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
npm -w desiXY-ui run dev
```

Publish a new release
---------------------

```bash
npm run versions
git diff
git commit -am 'increment sub versions'
npm version patch
git push
git push origin v0.5.6
```


