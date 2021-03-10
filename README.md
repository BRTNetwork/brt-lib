# brt-lib (RippleAPI)

A JavaScript/TypeScript API for interacting with the BRT Ledger

[![NPM](https://nodei.co/npm/brt-lib.png)](https://www.npmjs.org/package/brt-lib)

This is the recommended library for integrating a JavaScript/TypeScript app with the BRT Ledger, especially if you intend to use advanced functionality such as IOUs, payment paths, the decentralized exchange, account settings, payment channels, escrows, multi-signing, and more.

## [➡️ Reference Documentation](https://xrpl.org/rippleapi-reference.html)

See the full reference documentation on the BRT Ledger Dev Portal.

## [➡️ Applications and Projects](APPLICATIONS.md)

What is brt-lib used for? The applications on the list linked above use `brt-lib`. Open a PR to add your app or project to the list!

### Features

+ Connect to a `brtd` server from Node.js or a web browser
+ Helpers for creating requests and parsing responses for the [brtd API](https://developers.ripple.com/brtd-api.html)
+ Listen to events on the BRT Ledger (transactions, ledger, validations, etc.)
+ Sign and submit transactions to the BRT Ledger
+ Type definitions for TypeScript

### Requirements

+ **[Node.js v14](https://nodejs.org/)** is recommended. Other versions may work but are not frequently tested.
+ **[Yarn](https://yarnpkg.com/)** is recommended. `npm` may work but we use `yarn.lock`.

## Getting Started

See also: [RippleAPI Beginners Guide](https://xrpl.org/get-started-with-rippleapi-for-javascript.html)

In an existing project (with `package.json`), install `brt-lib`:
```
$ yarn add brt-lib
```

Then see the documentation:

## Documentation

+ [RippleAPI Beginners Guide](https://xrpl.org/get-started-with-rippleapi-for-javascript.html)
+ [RippleAPI Full Reference Documentation](https://xrpl.org/rippleapi-reference.html) ([in this repo](https://github.com/BRTNetwork/js-brt-lib/blob/develop/docs/index.md))
+ [Code Samples](https://github.com/BRTNetwork/js-brt-lib/tree/develop/docs/samples)

### Mailing Lists

We have a low-traffic mailing list for announcements of new brt-lib releases. (About 1 email per week)

+ [Subscribe to brt-lib-announce](https://groups.google.com/forum/#!forum/brt-lib-announce)

If you're using the BRT Ledger in production, you should run a [brtd server](https://github.com/ripple/brtd) and subscribe to the brt-server mailing list as well.

+ [Subscribe to brt-server](https://groups.google.com/forum/#!forum/brt-server)

## Development

To build the library for Node.js and the browser:
```
$ yarn build
```

The TypeScript compiler will [output](./tsconfig.json#L7) the resulting JS files in `./dist/npm/`.

webpack will output the resulting JS files in `./build/`.

For details, see the `scripts` in `package.json`.

## Running Tests

### Unit Tests

1. Clone the repository
2. `cd` into the repository and install dependencies with `yarn install`
3. `yarn test`

### Linting

Run `yarn lint` to lint the code with `eslint`.

## Generating Documentation

Do not edit `./docs/index.md` directly because it is a generated file.

Instead, edit the appropriate `.md.ejs` files in `./docs/src/`.

If you make changes to the JSON schemas, fixtures, or documentation sources, update the documentation by running `yarn run docgen`.

## More Information

+ [brt-lib-announce mailing list](https://groups.google.com/forum/#!forum/brt-lib-announce) - subscribe for release announcements
+ [RippleAPI Reference](https://xrpl.org/rippleapi-reference.html) - BRT Ledger Dev Portal
+ [BRT Ledger Dev Portal](https://xrpl.org/)

 [![Build Status](https://travis-ci.org/ripple/brt-lib.svg?branch=master)](https://travis-ci.org/ripple/brt-lib)
