import dotenv from "dotenv";
dotenv.config();

exports.config = {
  output: "./output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: process.env.AUTOMATION_WEB_URL,
      show: false,
      ignoreHTTPSErrors: true,
      waitForTimeout: 10000,
      getPageTimeout: 20000,
    },
    REST: {
      endpoint: "https://swapi.dev/api",
      timeout: 150000,
    },
    JSONResponse: {},
  },
  include: {
    I: "./steps_file",
    WebLoginPage: "./pages/paylocity/loginPage.ts",
    DashBoardPage: "./pages/paylocity/dashBoardPage.ts",
    EmployeePage: "./pages/paylocity/employeePage.ts",
    PaylocityServices: "./services/paylocity/Functions/paylocityServices.ts"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: "./features/*.feature",
    steps: ["./step_definitions/steps.ts"],
  },
  plugins: {
    screenshotOnFail: {
      enabled: false,
    },
    tryTo: {
      enabled: true,
    },
    retryFailedStep: {
      enabled: true,
    },
    retryTo: {
      enabled: true,
    },
    eachElement: {
      enabled: true,
    },
    pauseOnFail: {},
  },
  stepTimeout: 0,
  stepTimeoutOverride: [
    {
      pattern: "wait.*",
      timeout: 0,
    },
    {
      pattern: "amOnPage",
      timeout: 0,
    },
  ],
  tests: "./*_test.ts",
  name: "githubTest",
};
