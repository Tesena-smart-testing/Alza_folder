import welcomeScreen from '../screenObjects/WelcomeScreenObject'

describe("Main Screen functionality",()=>{

  beforeEach(async () => {
    await browser.activateApp("cz.alza.eshop");
    await welcomeScreen.clickOnSkipBtn(); 

  });

  afterEach(async () => {
    // Close the app after each test
    await browser.closeApp();
  });
    it("Gestures: scroll", async () => {

      await browser.pause(4000)
    });

    it("Gestures: swipe", async () => {
      await browser.pause(4000);
    });
})