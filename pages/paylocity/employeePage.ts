import { WebBasePage } from "../WebBasePage";
import assert from "assert";

class employeePage extends WebBasePage {
    locators = {
        firstNameLabel: "label[for='firstName']",
        firstNameInput: "input[id='firstName']",
        lastNameInput: "input[id='lastName']",
        dependentsInput: "input[id='dependants']",
        addButton: "button[id='addEmployee']",
        updateButton: "//button[@id='updateEmployee']"
    };

  async verifyEmployeeModalIsDisplayed(): Promise<void> {
    const page = await this.verifyElementDisplayed(this.locators.firstNameLabel)
    await assert.equal(page, true, "The dashboard page is not displayed")
  }
  
  async addEmployeeDetails(employee: Map<string, string>): Promise<void> {
    await this.sendKeys(this.locators.firstNameInput, employee.get("firstName"))
    await this.sendKeys(this.locators.lastNameInput, employee.get("lastName"))
    await this.sendKeys(this.locators.dependentsInput, employee.get("dependants"))
    await this.clickOnElement(this.locators.addButton)
  } 

  async updateEmployeeDetails(employee: Map<string, string>): Promise<void> {
    await this.sendKeys(this.locators.firstNameInput, employee.get("firstName"))
    await this.sendKeys(this.locators.lastNameInput, employee.get("lastName"))
    await this.sendKeys(this.locators.dependentsInput, employee.get("dependants"))
    await this.clickOnElement(this.locators.updateButton)
  } 
}

export = new employeePage();