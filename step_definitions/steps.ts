const { I, WebLoginPage, DashBoardPage, EmployeePage, PaylocityServices } = inject();
import * as data from "../data/employeeData"


const AUTOMATION_USER = process.env.AUTOMATION_USER
const AUTOMATION_PWORD = process.env.AUTOMATION_PWORD

Given("an Employeer", async () => {
  await I.amOnPage("/Prod/Account/Login");
  await WebLoginPage.logIn(AUTOMATION_USER, AUTOMATION_PWORD)
});

When("I am on the Benefits Dashboard page", async () => {
  await DashBoardPage.verifyDashboardIsDisplayed()
});

When("I select Add Employee", async () => {
  await I.wait(3);
  await DashBoardPage.clickAddEmployee()
});

When("I click on edit", async () => {
  await I.wait(3);
  await DashBoardPage.clickEditEmployee(data.employee)
});

When("I click on delete", async () => {
  await I.wait(3);
  await DashBoardPage.clickRemoveEmployee(data.employee)
});

Then("I should be able to enter employee details", async () => {
  data.generateTestData();
  await EmployeePage.addEmployeeDetails(data.employee);
});

Then("I should be able to update employee details", async () => {
  data.generateTestData();
  await EmployeePage.updateEmployeeDetails(data.employee);
});

Then("I should see the employee in the table", async () => {
  await DashBoardPage.verifyEmployeeTableDisplayed(data.employee)
});

Then("the benefit cost calculations are correct", async () => {
  await DashBoardPage.verifyBenefitCostIsCorrect(data.employee)
});

Given("I get the list of employees", async () => {
  await PaylocityServices.getEmployeeList()
});

Then("I can see the employee details are displayed", async () => {
  await PaylocityServices.validateEmployeeResponse()
});

Given("I add a new employee through the post request", async () => {
  data.generateTestData();
  await PaylocityServices.postEmployee(data.employee)
});

Then("I should be able to see employee details through the get employee request", async () => {
  await PaylocityServices.getEmployee(data.employee)
});

Then("I should be able to edit employee details through the API", async () => {
  data.generateTestData();
  await PaylocityServices.putEmployee(data.employee)
});

Then("I should be able to delete the employee", async () => {
  await PaylocityServices.deleteEmployee(data.employee)
});

Then("I can see the response code is {int}", async (code: number) => {
  await PaylocityServices.responseCode(code)
});