# QR Code Renderer

> is a dependency-free library to render QR Codes. The library makes it simple to integrate with any UI framework and comes with a prebuilt SVG renderer for the web.



The library consists of a core package (`@qrcode-renderer/core`) responsible for the encoding of the QR Code. It also provides utilities to integrate the renderer with any UI library.
This monorepo will also host "bridge" packages (`@qrcode-renderer/<ui-framework>`) for any UI libraries that we choose to natively support.

## Roadmap

- [x] Encode input following the QR Code specs
- [x] Apply error correction (Reed-Solomon) algorithm
- [x] Create final binary payload
- [x] Generate rendering matrix
- [x] Mask data inside matrix
- [x] Create rendering function

Renderers:

- [ ] SVG rendering
- [ ] React
- [ ] React Native

Future:

- [ ] Support Kanji encoding

## Getting started

TODO

## Example

TODO

## Development setup

```bash
yarn
```

## How to contribute

See our guide on [contributing](.github/CONTRIBUTING.md).

## Release History

See our [changelog](CHANGELOG.md).

## Acknowledgements

- Thanks to [Tracy (Tan Yun)](https://medium.com/@tanyuntracy) logo ❤️

