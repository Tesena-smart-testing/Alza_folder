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
    await expect(mainScreen.searachField).toBeDisplayed();
    await browser.pause(4000);
    // Up swipe gesture
    await Gestures.swipeUp(0.85);
    await expect(mainScreen.computerAndLaptopsSection).not.toBeDisplayed();
    await browser.pause(3000);
    await mainScreen.clickOnProductCard();
    await browser.pause(3000);
    await expect(mainScreen.productVariantsDetail).toBeDisplayed();
    //swipe left gesture
    await Gestures.swipeLeft(0.8);
    await Gestures.swipeUp(0.85);
  });

  // it("Gestures: swipe", async () => {
  //   await browser.pause(4000);
  // });
});
