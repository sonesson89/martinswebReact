import fs from 'fs';
import inquirer from 'inquirer';

const copyFolder = (from, to, recursive = true) => {
  return new Promise((resolve, reject) => {
    fs.cp(from, to, { recursive }, (err) => {
      if (err) {
        console.error(`Error copying folder from ${from} to ${to}:`, err);
        reject(err);
      } else {
        console.log(`Folder copied successfully from ${from} to ${to}!`);
        resolve();
      }
    });
  });
};

const createSymlink = (target, path) => {
  return new Promise((resolve, reject) => {
    fs.symlink(target, path, 'dir', (err) => {
      if (err) {
        console.error(`Error creating symlink from ${target} to ${path}:`, err);
        reject(err);
      } else {
        console.log(`Symlink created from ${target} to ${path}`);
        resolve();
      }
    });
  });
};

const removeSizeIndicator = () => {
  return new Promise((resolve, reject) => {
    const indexPath = 'dist/index.html';
    fs.readFile(indexPath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading index.html:', err);
        reject(err);
        return;
      }

      const updatedData = data.replace(/\s*<p id="sizeIndicator"><\/p>\n/, '');

      fs.writeFile(indexPath, updatedData, 'utf8', (err) => {
        if (err) {
          console.error('Error writing index.html:', err);
          reject(err);
        } else {
          console.log('Successfully removed sizeIndicator from index.html');
          resolve();
        }
      });
    });
  });
};

const ENVIRONMENTS = {
  DEV: 'Development',
  PROD: 'Production',
};

const run = async () => {
  console.log('POSTBUILD SCRIPT');

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'environment',
      message:
        'What environment are you building for? Dev or prod? Note that if you try to build for prod on a dev-computer it will fail, due to certain files and folders not existing.',
      choices: [ENVIRONMENTS.DEV, ENVIRONMENTS.PROD],
    },
  ]);
  const env = answers.environment;

  await copyFolder('src/js/', 'dist/src/js');
  await copyFolder('src/assets', 'dist/src/assets');
  await copyFolder('src/documents', 'dist/src/documents');
  await copyFolder('src/miscFiles', 'dist/src/miscFiles');
  await copyFolder('.htaccess', 'dist/.htaccess');

  await removeSizeIndicator();

  if (env === ENVIRONMENTS.PROD) {
    await copyFolder(
      'browser-extension-test-site.html',
      'dist/browser-extension-test-site.html'
    );
    await copyFolder('browserExtensionTest', 'dist/browserExtensionTest');
    await copyFolder(
      'redirect_youtube_mass_stl.php',
      'dist/redirect_youtube_mass_stl.php'
    );

    await createSymlink(
      '/var/www/martinswebReact/pi',
      '/var/www/martinswebReact/dist/pi'
    );
    await createSymlink(
      '/var/www/martinswebReact/sti',
      '/var/www/martinswebReact/dist/sti'
    );
    await createSymlink(
      '/var/www/martinswebReact/totalrisk',
      '/var/www/martinswebReact/dist/totalrisk'
    );
    await createSymlink(
      '/var/www/martinswebReact/pi/Cults3DSellerStats/dist',
      '/var/www/martinswebReact/dist/cults'
    );
  }
};

run();
