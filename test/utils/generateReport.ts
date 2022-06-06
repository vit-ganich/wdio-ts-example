const allure = require('allure-commandline');

/**
 * Generate Allure report
 * @returns
 */
export default function () {
  const reportError = new Error('Could not generate Allure report');
  const generation = allure(['generate', 'allure-results', '--clean']);

  return new Promise<void>((resolve, reject) => {
    const generationTimeout = setTimeout(() => reject(reportError), 5000);

    generation.on('exit', function (exitCode) {
      clearTimeout(generationTimeout);

      if (exitCode !== 0) {
        return reject(reportError);
      }

      console.log('Allure report successfully generated');
      resolve();
    });
  });
}
