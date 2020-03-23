# vc-tools

offline tools for react component

[![NPM version][npm-image]][npm-url]
[![gemnasium deps][gemnasium-image]][gemnasium-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/vc-tools.svg?style=flat-square
[npm-url]: http://npmjs.org/package/vc-tools
[travis-image]: https://img.shields.io/travis/react-component/vc-tools.svg?style=flat-square
[travis-url]: https://travis-ci.org/react-component/vc-tools
[coveralls-image]: https://img.shields.io/coveralls/react-component/vc-tools.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/react-component/vc-tools?branch=master
[gemnasium-image]: http://img.shields.io/gemnasium/react-component/vc-tools.svg?style=flat-square
[gemnasium-url]: https://gemnasium.com/react-component/vc-tools
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.11-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/vc-tools.svg?style=flat-square
[download-url]: https://npmjs.org/package/vc-tools

## Usage

```
$ vc-tools run lint: run lint by https://github.com/vuejs/eslint-plugin-vue-libs
$ vc-tools run pub: compile and npm publish
$ vc-tools run watch --out-dir=/xx: watch and compile to /xx, default to lib
$ vc-tools run build: build examples
$ vc-tools run gh-pages: push example to gh-pages
$ vc-tools run start: start dev server
```


package.json demo

```js
({
  config: {
    entry:{}, // webpack entry for build dist umd
    port: 8000, // dev server port
    output:{}, // webpack output for build dist umd
  }
})
```

## History

### 8.0.0

- upgrade eslint to the latest version
- introduce prettier

### 7.0.0

- upgrade to webpack3

### 6.0.0

- move test to vc-test
