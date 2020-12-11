# Kooboo spa tools

A Kooboo spa npm cli

## Install

```
npm i kooboo_spa -D
```

## Doc

```
Options:
  -V, --version              output the version number
  -h, --host <host>
  -u, --user <user>
  -p, --password <password>
  -d, --dir [dir]            build output dir (default: "./dist")
  --help                     display help for command
```

## Usage

```
kooboo-spa -h mysite.kooboo.site -u admin -p xxx
```

## Working with vue cli

package.json

```
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "publish":"vue-cli-service build && kooboo-spa -h http://mysite.kooboo.site -u admin -p xxx"
  },
```
