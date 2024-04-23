# TS-Cypress-BDD

![Lint Checks](https://github.com/artgrtmnk/TS-Cypress-Cucumber-UI-Example/actions/workflows/push-workflow.yml/badge.svg)
### About
**Overview:** _TypeScript UI with BDD testing framework sample._

**Systems under test:**
- UI: Saucedemo.com by SWAGLABS

**Technology stack:**
- Basic: TypeScript, Cypress
- BDD: Cucumber
- UI: Cypress
- Containers: Docker & Docker Compose
- Reporting: Allure

## Locally on your machine
### Installation
1. Install [Node.js](https://nodejs.org/en/).
2. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
3. Download the project.
4. Install dependencies with a terminal command `yarn install` or `npm install` in the project's root folder.
5. Additional step: You need to install [Allure](https://github.com/allure-framework/allure2), if you want to use it.

### Running tests
1. You can use Cypress GUI with `yarn cy:ui` command.
2. As well, you can start test suite with `yarn cy:headless` command.
3. Also, you can start the suite and generate Allure report with `yarn cy:allure` and after it, open it with `yarn allure:open`.
4. And the most prefered options is to use `yarn cy:allure:open` command, that would execute the suite, generate and open the report as an HTML doc.

### After test
- Framework creates allure reports, that located in `allure-results` folder.
- Check the `Running tests` section to get more info about working with Allure reports.
- **Note: Allure folder would be cleared within the next test run.**

### Running tests with docker
Build the docker image with:
```
docker-compose -f .ci/docker-compose-tests.yml build
```
After it you could start docker compose, that would execute each test suite in separate container with:
```
docker-compose -f .ci/docker-compose-tests.yml up
```

## GitHub Actions
#### GitHub Actions are implemented for this repo. 
There are two checks:
1. Linter (Prettier and eslint) 
2. Cypress test suite for the PRs, that runs sequentialy, first smoke test, if it pass, main suite with sanity and e2e tests.
Both executes in the `docker containers`. CI implemented in the `.ci` folder.
