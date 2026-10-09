# Warren Co. Merch

A responsive starter storefront with sample T-shirts, hoodies, and hats. Product filtering, size selection, and a persistent shopping bag work locally. Prices are sample USD prices. Checkout displays a preview notice; this project does not accept payments or submit orders.

## Development

Requires Node.js 22.12+ (Node.js 24 is supported).

```sh
npm ci
npm run dev
```

```sh
npm test
npm run build
```

Edit sample product details in `src/catalog.js` and storefront styling in `src/style.css`. Product graphics are inline illustrations, not actual product photography. Cart storage uses this browser only.

## Before opening the store

Replace sample products, prices, and illustrations with real inventory. Choose and connect a commerce/payment platform, validate prices and inventory on the server, and configure shipping, taxes, fulfillment, contact information, and store policies. Do not collect payment details in this frontend.

## Deploy the mockup to GitHub Pages

The `Deploy storefront to GitHub Pages` workflow tests, builds, and deploys on pushes to `main`. In the GitHub repository settings, open **Pages** and choose **GitHub Actions** as the source. Then run the deployment workflow in the **Actions** tab if enabling Pages after the initial push. Checkout remains a preview notice; no payment credentials are needed.
