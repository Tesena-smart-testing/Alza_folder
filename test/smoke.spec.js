import welcomeScreen from "../screenObjects/WelcomeScreenObject";
import mainScreen from "../screenObjects/MainScreenObject";
import Gestures from "../hepers/Gestures";

describe("Main Screen functionality", () => {
  beforeEach(async () => {
    await browser.activateApp("cz.alza.eshop");
    await welcomeScreen.clickOnSkipBtn();
  });

  afterEach(async () => {
    // Close the app after each test
    await browser.closeApp();
  });

  it("Gestures: scroll, swipe", async () => {
  
  });
});


//   adb uninstall io.appium.uiautomator2.server