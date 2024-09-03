import { WebBasePage } from "../WebBasePage";

class loginPage extends WebBasePage {
    locators = {
        usernameInput: "input[id='Username']",
        passwordInput: "#Password",
        loginButton: "button[type='submit']"
    };

  async logIn(user: string, password: string): Promise<void> {
    await this.sendKeys(this.locators.usernameInput, user)
    await this.sendKeys(this.locators.passwordInput, password)
    await this.clickOnElement(this.locators.loginButton)
  }  
}

export = new loginPage();