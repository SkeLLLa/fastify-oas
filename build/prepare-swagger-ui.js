const fs = require('fs');
const {promisify} = require('util');
const path = require('path');
const swaggerUiAssetPath = require('swagger-ui-dist').getAbsoluteFSPath();

const readdir = promisify(fs.readdir);
const unlink = promisify(fs.unlink);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);

const STATIC_DIR = './static';

(async () => {
  try {
    const files = await readdir(STATIC_DIR);
    await Promise.all(
      files.map(async (file) => {
        try {
          if (file !== '.gitkeep') {
            const p = path.join(STATIC_DIR, file);
            await unlink(p);
          }
        } catch (err) {
          // do nothing, file not exists
        }
      })
    );
  } catch (ex) {
    // do nothing, directory not exists
  }
  [
    'favicon-16x16.png',
    'favicon-32x32.png',
    'index.html',
    'oauth2-redirect.html',
    'swagger-ui-bundle.js',
    'swagger-ui-bundle.js.map',
    'swagger-ui-standalone-preset.js',
    'swagger-ui-standalone-preset.js.map',
    'swagger-ui.css',
    'swagger-ui.css.map',
    'swagger-ui.js',
    'swagger-ui.js.map',
  ].forEach((filename) => {
    fs.createReadStream(`${swaggerUiAssetPath}/${filename}`).pipe(
      fs.createWriteStream(path.resolve(`${STATIC_DIR}/${filename}`))
    );
  });
  const newIndex = await readFile(
    path.resolve(`${STATIC_DIR}/index.html`),
    'utf-8'
  );
  await copyFile(
    `${__dirname}/../node_modules/redoc/bundles/redoc.standalone.js`,
    `${STATIC_DIR}/redoc.standalone.js`
  );
  await writeFile(
    path.resolve(`${STATIC_DIR}/redoc.html`),
    `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Docs</title>
  </head>
  <body>
    <redoc spec-url="./json"></redoc>
    <script src="./redoc.standalone.js"> </script>
  </body>
</html>`
  );
  await writeFile(
    path.resolve(`${STATIC_DIR}/index.html`),
    newIndex
      .replace(
        'window.ui = ui',
        `window.ui = ui

      function resolveUrl (url) {
          const anchor = document.createElement('a')
          anchor.href = url
          return anchor.href
      }`
      )
      .replace(
        /url: "(.*)",/,
        `url: resolveUrl('./json'),
    validatorUrl: null,
    oauth2RedirectUrl: resolveUrl('./oauth2-redirect.html'),`
      )
  );
})();
