import dotenv from 'dotenv';

dotenv.config();

exports.config = {
    output: './output',
    helpers: {
      Playwright: {
        browser: 'chromium',
        url: process.env.AUTOMATION_WEB_URL,
        show: true
      },
      JSONResponse: {
      }
    },
    include: {
      I: './steps_file',
      WebLoginPage: './pages/paylocity/loginPage.ts'
    },
    mocha: {},
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
      features: './features/*.feature',
      steps: ['./step_definitions/steps.ts']
    },
    plugins: {
      screenshotOnFail: {
        enabled: true
      },
      tryTo: {
        enabled: true
      },
      retryFailedStep: {
        enabled: true
      },
      retryTo: {
        enabled: true
      },
      eachElement: {
        enabled: true
      },
      pauseOnFail: {}
    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
        pattern: 'wait.*',
        timeout: 0
      },
      {
        pattern: 'amOnPage',
        timeout: 0
      }
    ],
    tests: './*_test.ts',
    name: 'githubTest'
  }