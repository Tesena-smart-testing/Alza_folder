class MainScreenObject {
  getElementByResourceId(resourceId) {
    return $(`android=new UiSelector().resourceId("${resourceId}")`);
  }

  get skipAndContinueBtn() {
    return this.getElementByResourceId("IntroLoginSkipButton");
  }

  async clickOnSkipBtn() {
    await this.skipAndContinueBtn.click();
  }
}

module.exports = new MainScreenObject();
