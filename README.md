# promise-for

> Size < 1kb

## Install

```sh
$ npm install --save promise-for
```

## Use

```js
import promiseFor from "promise-for";
// In node-js
// const promiseFor = require("promise-for/node");

promiseFor(["10", "20", "30"], async (v, i) => {
  await doSometing(v, i);
});
```

每个 Promise 中间再间隔 300ms：

```js
import promiseFor from "promise-for";
// In node-js
// const promiseFor = require("promise-for/node");

promiseFor(["10", "20", "30"], async (v, i) => {
  await doSometing(v, i);
}， 300);
```
