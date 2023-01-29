import { defineConfig } from 'cypress';
import * as webpack from '@cypress/webpack-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    webpack({
      webpackOptions: {
        resolve: {
          extensions: ['.ts', '.js'],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: 'ts-loader',
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                  options: config,
                },
              ],
            },
          ],
        },
      },
    }),
  );
  allureWriter(on, config);

  return config;
}

export default defineConfig({
  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents,
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      allureReuseAfterSpec: true,
    },
  },
  screenshotOnRunFailure: false,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimations: true,
  animationDistanceThreshold: 5,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,
});
