# Williamsport Originals

A standalone homepage based on the approved Williamsport Originals vintage mockup. It preserves the parchment background, illustrated Falls header, three merchandise collections, corrected courthouse artwork, and dark green footer. Commerce will live in a separate WordPress/WooCommerce installation. There is no cart or checkout on this homepage.

## Development

Requires Node.js 22.12+ (Node.js 24 is used in deployment).

```sh
npm ci
npm run dev
npm test
npm run build
```

Set `storeUrl` in `src/main.js` to the separate WooCommerce site's URL when ready. Store links remain absent while this value is empty. Edit homepage copy in `src/main.js` and styling in `src/style.css`. Legacy catalog utilities are retained but are not imported by the homepage.

## Artwork

`public/images/approved-vintage-mockup.png` is the original approved reference recovered from the design conversation. Collection and postcard artwork is displayed from that image using CSS crops, retaining the approved artwork without changing the original. Headings, copy, navigation, and layouts are native HTML and CSS, not a single page image.

The text-free hero background and parchment texture were prepared with the built-in image-generation tool using the approved mockup as the reference. Replace CSS-cropped collection previews with individual production artwork when available.

## Deployment

The GitHub Pages workflow tests, builds, and deploys pushes to `main`. In repository settings, Pages should use GitHub Actions as its source. This deployment is independent of the existing WordPress installation and does not change DNS or WooCommerce settings.
