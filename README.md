# Project Name

A brief description of your project and its purpose.

ß## Table of Contents

- [Installation](#installation)
- [Running Tests](#running-tests)

## Installation

Install homebrew

````bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Install node
```bash
brew install node
```

Clone the repository and install the dependencies:

```bash
git clone
cd your-project-name
npm install
```
## Running Tests
Execute this command to apply the configuration for the pages and services
npx codeceptjs def -c codecept.conf.ts

Execute this command to run the tests
npx codeceptjs run --config codecept.conf.ts

## If execution doesnt work
Try installing plarwright and the browsers.

npm install @playwright/test
npx playwright install

## Headless mode
Headless mode is inside codecept.conf.ts inside the plarwright condif, when it is false the browser is not opened and the tests are executed in headless mode, when it is true the chromium browser is opened

```bash
Playwright: {
      browser: "chromium",
      url: process.env.AUTOMATION_WEB_URL,
      show: false,
      ignoreHTTPSErrors: true,
      waitForTimeout: 10000,
      getPageTimeout: 20000,
    }
````
