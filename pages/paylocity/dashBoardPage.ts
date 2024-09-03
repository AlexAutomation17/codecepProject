import { WebBasePage } from "../WebBasePage";
import assert from "assert";

class dashboardPage extends WebBasePage {
    locators = {
        dashboardLabel: "a[href='/Prod/Benefits']",
        addEmployeeButton: "button#add",
        employeeTable: (employeeName: string) => `//table[@id='employeesTable']//tbody//td[text()='${employeeName}']/..//td`,
        editTable: (employeeName: string) => `${this.locators.employeeTable(employeeName)}//i[contains(@class, 'edit')]`,
        deleteTable: (employeeName: string) => `${this.locators.employeeTable(employeeName)}//i[contains(@class, 'times')]`,
        deleteButton: "//button[@id='deleteEmployee']"
    };

  async verifyDashboardIsDisplayed(): Promise<void> {
    const page = await this.verifyElementDisplayed(this.locators.dashboardLabel)
    await assert.equal(page, true, "The dashboard page is not displayed")
  }
  
  async clickAddEmployee(): Promise<void> {
    await this.clickOnElement(this.locators.addEmployeeButton)
  }

  async clickEditEmployee(employee: Map<string, string>): Promise<void> {
    await this.clickOnElement(this.locators.editTable(employee.get("firstName")))
  }

  async clickRemoveEmployee(employee: Map<string, string>): Promise<void> {
    await this.clickOnElement(this.locators.deleteTable(employee.get("firstName")))
    await this.clickOnElement(this.locators.deleteButton)
  }
  
  async verifyEmployeeTableDisplayed(employee: Map<string, string>): Promise<void> {
    const employeeLocator = this.locators.employeeTable(employee.get("firstName"));
    const page = await this.verifyElementDisplayed(employeeLocator)
    await assert.equal(page, true, "The employee is not displayed")
  }

  async verifyBenefitCostIsCorrect(employee: Map<string, string>): Promise<void> {
    const employeeLocator = this.locators.employeeTable(employee.get("firstName"));
    const employeeDetails = await this.getElementsText(employeeLocator);
    const employeeBenefitCost = parseFloat(employeeDetails[6]).toFixed(2)
    const employeeGrossPay = parseFloat(employeeDetails[5]).toFixed(2)
    const employeeSalary = parseFloat(employeeDetails[4]).toFixed(2)
    
    const grossPay = 2000.00
    const salary = grossPay * 26
    const employeeCost = 1000.00/12
    const dependentNumber = parseInt(employeeDetails[3])
    const dependentCost = (500.00/12) * dependentNumber
    const benefitCost = employeeCost + dependentCost
    await assert.equal(employeeGrossPay, grossPay, "The gross pay is incorrect")
    await assert.equal(employeeSalary, salary, "The salary is incorrect")
    await assert.equal(benefitCost, employeeBenefitCost, "The benefit cost is not correct")
 }
}

export = new dashboardPage();