const { I } = inject();
const TIME_OUT = +process.env.AUTOMATION_WEB_TIMEOUT;

export class WebBasePage {
  async clickOnElement(element: string): Promise<void> {
    await I.waitForElement(element, TIME_OUT);
    await I.click(element);
  }

  async sendKeys(element: string, text: string): Promise<void> {
    await I.waitForElement(element, TIME_OUT);
    await I.clearField(element);
    await I.fillField(element, text);
  }

  async verifyElementDisplayed(element: string): Promise<boolean> {
    try {
        await I.waitForElement(element, TIME_OUT);
        await I.seeElement(element);
        return true;
    } catch (error) {
        console.error(`Error in verifyElementDisplayed: ${error.message}`);
        return false;
    }
}ß

  async getElementsText(locator: string): Promise<string[]> {
    const elementsText = await I.grabTextFromAll(locator);
    return elementsText;
  }
}
