/// <reference types="cypress" />
import "cypress-wait-until";
import "chance";

import { CheckoutPage } from "../../../pageObjects/uscca.com/pages/checkout.page";

let testTypes = [
  //"Visual Regression",
  "Integration",
];
describe.only("Checkout Page Offer Modal Functionality", () => {
  var visualRegression = false;
  testTypes.forEach((type, index) => {
    beforeEach(() => {
      visualRegression = false;
      if (type === "Visual Regression") {
        cy.eyesOpen({
          appName: "USCCA.com",
          testName: "Checkout: Offer Popup functionality",
        });
        visualRegression = true;
      }
      CheckoutPage.navigate();
    });

    afterEach(() => {
      if (type === "Visual Regression") {
        cy.eyesClose();
      }
    });

    it(`${type} Test Modal can be closed with the X button`, function () {
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getOfferModal(),
        visualRegression,
        "Checkout Offer Modal Displayed"
      );
      CheckoutPage.getOfferModalCloseButton().click();
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getEmailField(),
        visualRegression,
        "Checkout Offer Modal is closed after clicking close"
      );
    });
    it(`${type} Test Modal can be closed with the Add button`, function () {
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getOfferModal(),
        visualRegression,
        "Checkout Offer Modal Displayed"
      );
      CheckoutPage.getOfferModalAddButton().click();
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getEmailField(),
        visualRegression,
        "Checkout Offer Modal is closed after clicking Add"
      );
    });
  });
});
describe("Checkout Page New User Functionality", () => {
  var visualRegression = false;
  testTypes.forEach((type, index) => {
    beforeEach(() => {
      if (type === "Visual Regression") {
        cy.eyesOpen({
          appName: "USCCA.com",
          testName: "Checkout: New Membership functionality",
        });
        visualRegression = true;
      }
      CheckoutPage.setBonusModalDismissed();
      CheckoutPage.navigate();
    });

    afterEach(() => {
      if (type === "Visual Regression") {
        cy.eyesClose();
      }
    });

    it(`${type} Test Checkout - Verify new user can sign up for a monthly subscription without different billing and shipping information`, function () {
      let userData = CheckoutPage.createUserData();
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getOrderSummaryProduct(),
        visualRegression,
        "Checkout Step 1 - First view"
      );
      CheckoutPage.fillOutStep1(userData);
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getEmailField(),
        visualRegression,
        "Checkout Step 1 - filled out"
      );
      CheckoutPage.getStep1ContinueButton().click();
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getStep2LoadingModal(),
        visualRegression,
        "Checkout Step 1 - Create account modal displayed"
      );
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getShippingFirstNameField(),
        visualRegression,
        "Checkout Step 2 - First view"
      );
      CheckoutPage.fillOutStep2(userData);
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getShippingFirstNameField(),
        visualRegression,
        "Checkout Step 2 - Filled out"
      );
      CheckoutPage.getStep2ContinueButton().click();
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getStep3LoadingModal(),
        visualRegression,
        "Checkout Step 2 - Saving Address modal"
      );
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getMembershipMonthlyRadio(),
        visualRegression,
        "Checkout Step 3 - First View"
      );
      CheckoutPage.fillOutStep3(userData);
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getMembershipMonthlyRadio(),
        visualRegression,
        "Checkout Step 3 - filled out (monthly)"
      );
      CheckoutPage.getStep3ContinueButton().click();
      CheckoutPage.verifyZuoraPaymentiFrameLoaded();
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getCardHolderNameField(),
        visualRegression,
        "Checkout Step 4 - First view"
      );
      CheckoutPage.getCardHolderNameField().should(
        "have.value",
        userData["ccName"]
      );
      CheckoutPage.fillOutStep4(userData);
      CheckoutPage.getStep4PlaceOrderButton().should("be.enabled");
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getStep4PlaceOrderButton(),
        visualRegression,
        "Checkout Step 4 - Filled out and button enabled"
      );
    });
    it(`${type}Checkout email error verification`, function () {
      CheckoutPage.verifyElementIsVisible(
        CheckoutPage.getMarketingCopyContent(),
        visualRegression,
        "Checkout Step 1 - First view"
      );
      let emailErrorConditions = {
        " ": "No Email",
        "John..Doe@example.com": "Consecutive .'s in local",
        "testuscca.com": "No @",
        "test@@test.uscca.com": "Consecutive @'s",
        "test@uscca..com": "Consecutive .'s in domain",
        ".test@uscca.com": "Leading . in local",
        "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabc@uscca.com":
          ">64 Characters in local",
        "@test.com": "No local portion",
        "abc#def@mail.com": "# in local",
        "-abc@mail.com": "Leading - in local",
        "abc.def@mail.c": "Invalid Domain",
        "abc.def@mail#archive.com": "Invalid Domain with #'s",
        "abc.def@mail": "Invalid domain",
        "abc.def@mail..com": "Invalid domain with consecutive .'s",
      };
      for (const emailAddress in emailErrorConditions) {
        CheckoutPage.getEmailField().clear().type(emailAddress);
        CheckoutPage.getStep1ContinueButton().click();
        CheckoutPage.verifyElementIsVisible(
          CheckoutPage.getEmailErrorMessage(),
          visualRegression,
          "Checkout Step 1: Verify Email Failures - " +
            emailErrorConditions[emailAddress]
        );
        CheckoutPage.getEmailField().type("test@test.com");
        CheckoutPage.verifyElementIsEnabled(
          CheckoutPage.getStep1ContinueButton(),
          visualRegression,
          "Checkout Step 1: Verify Email Failures - Error No Longer Displayed"
        );
      }
    });
  });
});
