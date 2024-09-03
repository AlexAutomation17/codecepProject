/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type WebLoginPage = typeof import('./pages/paylocity/loginPage');
type DashBoardPage = typeof import('./pages/paylocity/dashBoardPage');
type EmployeePage = typeof import('./pages/paylocity/employeePage');
type PaylocityServices = typeof import('./services/paylocity/Functions/paylocityServices');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, WebLoginPage: WebLoginPage, DashBoardPage: DashBoardPage, EmployeePage: EmployeePage, PaylocityServices: PaylocityServices }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
