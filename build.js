// build.js

const sharp = require('sharp');
const nextBuild = require('next/dist/build').default;
const webpackConfig = require('path/to/webpack/config');

async function main() {
  // Enable Image Optimization
  sharp.cache(false);

  // Perform other optimizations, such as code splitting or asset compression
  // ...

  // Run the Next.js build process
  await nextBuild(webpackConfig);

  console.log('Build completed successfully!');
}

main().catch((error) => {
  console.error('Build failed:', error);
  process.exit(1);
});
