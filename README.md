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
  -s, --site <site>          
  -u, --user <user>          
  -p, --password <password>  
  -d, --dir [dir]            build output dir (default: "./dist")
  --help                     display help for command
```

## Usage

```
kooboo-spa -h 192.168.0.101 -s 6657ba57-6680-f472-f49a-14f80f7ffce2 -u admin -p xxx
```

## Working with vue cli
package.json
```
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "publish":"vue-cli-service build && kooboo-spa -h localhost -s 6657ba57-6680-f472-f49a-14f80f7ffce2 -u admin -p xxx"
  },
```
