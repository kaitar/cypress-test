/// <reference types="cypress" />

import "cypress-iframe";
import { BasePage } from "../../basePage.page";

class Checkout extends BasePage {
    private chance = require("chance").Chance();
    private emailField = "[id='customer_email']";
    private customerVerificationCodeField = "[id='customer_verification']";
    private editButton = "button[class^='EditButton_editBtn']";
    private errorMessage = "div[class^='ValidationMessage_warning']";
    private changeEmailLink = "button[class^='CustomerInformation_linkButton']";
    private changeEmailLink2 = "CustomerInformation_singleLineAction";
    private loginLink = "p[class^='CustomerInformation_accountExists']";
    private loginLink2 = "button[class^='CustomerInformation_linkButton']";
    private continueButton = "button[class^='SubmitButton_btn']";
    private shippingFirstNameField = "[id='shipping_first_name']";
    private shippingLastNameField = "[id='shipping_last_name']";
    private shippingAddressField = "[id='shipping_address']";
    private shippingCityField = "[id='shipping_city']";
    private shippingStateDropdown = "[id='shipping_state']";
    private shippingPostalCodeField = "[id='shipping_postal_code']";
    private phoneNumberField = "[id='shipping_phone_number']";
    private useShippingForBillingCheckbox = "[id='use_shipping_for_blling']";
    private billingAddressField = "[id='billing_address']";
    private billingCityField = "[id='billing_city']";
    private billingStateDropdown = "[id='billing_state']";
    private billingPostalCodeField = "[id='billing_postal_code']";
    private membershipYearlyRadio = "[id='membership_yearly']";
    private membershipMonthlyRadio = "[id='membership_monthly']";
    private spouseMembershipCheckbox = "[id='spouse_membership']";
    private spouseEmailField = "[id='spouse_email']";
    private spouseFirstNameField = "[id='spouse_first_name']";
    private spouseLastNameField = "[id='spouse_last_name']";
    private step4LoadingModalText = "Loading Payment System";
    private zuoraPaymentiFrame = "[id='z_hppm_iframe']";
    private cardHolderNameField = "input[id='input-creditCardHolderName']";
    private cardNumberField = "#input-creditCardNumber";
    private visaCardImage = "#card-image-container-Visa";
    private masterCardImage = "#card-image-container-MasterCard";
    private americanExpressCardImage = "#card-image-container-AmericanExpress";
    private discoverCardImage = "#card-image-container-Discover";
    private cardExpirationDateMonthDropdown =
        "#input-creditCardExpirationMonth";
    private cardExpirationDateYearDropdown = "#input-creditCardExpirationYear";
    private cardSecurityCodeField = "#input-cardSecurityCode";
    private termsOfAgreementCheckbox =
        "label[class^='TermsOfAgreement_acknowledgementLabel']";
    private offerModal = "div[class^='modal--']";
    private offerModalCloseButton = "button[class^='d-none']";
    private offerModalAddButton =
        "button[class^='defaultBundleIdModal_acknowledge']";
    private membershipAgreementTermsLink = "Membership Agreement Terms";
    private telephoneLink = "div[class='gv-tel-link']";
    private insuranceDisclaimerButton =
        "button[class^='InsuranceDisclaimer_readMore'";
    private step2LoadingModalText = "Creating Account";
    private step3LoadingModalText = "Saving Address";
    private addingCreditCardModalText = "Adding Credit Card";
    private errorModal = "div[class^='ErrorModal_modal']";
    private errorModalHeader = "div[class^='ErrorModal_heading']";
    private errorModalText = "div[class^='ErrorModal_msg']";
    private errorModalButton = "button[class^='ErrorModal_button']";
    private errorPageBackLinkText = "← Back to www.usconcealedcarry.com";
    private checkoutSummaryModal = "section[class^='Checkout_summary']";
    private orderSummaryLoadingModal = "div[class^='OrderSummary_updating']";
    private productSummary = "div[class^='OrderSummary_product']";
    private orderSummary = "div[class^='OrderSummary_summary']";
    private orderSummaryProduct = "div[class^='OrderSummary_product']";
    private stepDivider = "div[class^='Divider_sectionNumber']";
    private step = "section[class^='Step_stepSection']";
    private sessionMessageWarningModal = "div[class^='SessionMsg_warning']";
    private loadingModal = "div[class^='Loading_modal']";
    private exitIntentModal = "div[class^='ExitIntent_modal']";
    private errorPageModal = "div[class^='ErrorPage_main']";
    private errorPagePhoneLink = "p[class^='ErrorPage_phone']";
    private stepNumber = "div[class^='Divider_sectionNumber']";
    private urlParams: string = Cypress.env("checkout").params;
    private marketingCopyContent = "section[class^='MarketingCopy_copyHolder']";

    constructor() {
        super(Cypress.env("checkoutUrl"));
    }
    getMarketingCopyContent() {
        return cy.get(this.marketingCopyContent);
    }
    getEmailField() {
        return cy.get(this.emailField);
    }
    getSwitchUserCloseButton() {
        return this.getStepDivider(1).find(this.editButton);
    }
    getEmailErrorMessage() {
        return this.getError(this.emailField);
    }
    private getError(fieldWithErrorCondition: string) {
        return cy
            .get(fieldWithErrorCondition)
            .siblings()
            .get(this.errorMessage);
    }
    getCustomerVerificationCodeField() {
        return cy.get(this.customerVerificationCodeField);
    }
    getCustomerVerificationCodeErrorMessage() {
        return this.getError(this.customerVerificationCodeField);
    }
    getChangeEmailLink() {
        return this.getStep("1").find(this.changeEmailLink);
    }
    getLogInLink() {
        return this.getStep("1").find(this.loginLink);
    }
    getStep1ContinueButton() {
        return this.getStep("1").find(this.continueButton);
    }
    getStep2LoadingModal() {
        return this.getLoadingModal().contains(this.step2LoadingModalText);
    }
    getShippingFirstNameField() {
        return cy.get(this.shippingFirstNameField);
    }
    getShippingLastNameField() {
        return cy.get(this.shippingLastNameField);
    }
    getShippingAddressField() {
        return cy.get(this.shippingAddressField);
    }
    getShippingCityField() {
        return cy.get(this.shippingCityField);
    }
    getShippingStateDropdown() {
        return cy.get(this.shippingStateDropdown);
    }
    getShippingPostalCodeField() {
        return cy.get(this.shippingPostalCodeField);
    }
    getPhoneNumberField() {
        return cy.get(this.phoneNumberField);
    }
    getUseShippingForBillingCheckbox() {
        return cy.get(this.useShippingForBillingCheckbox);
    }
    getBillingAddressField() {
        return cy.get(this.billingAddressField);
    }
    getBillingCityField() {
        return cy.get(this.billingCityField);
    }
    getBillingStateDropdown() {
        return cy.get(this.billingStateDropdown);
    }
    getBillingPostalCodeField() {
        return cy.get(this.billingPostalCodeField);
    }
    getStep2ContinueButton() {
        return this.getStep("2").find(this.continueButton);
    }
    getStep2EditButton() {
        {
            return this.getStepDivider(2).within(() => {
                cy.get(this.editButton);
            });
        }
    }
    getShippingFirstNameError() {
        return this.getError(this.shippingFirstNameField);
    }
    getShippingLastNameError() {
        return this.getError(this.shippingLastNameField);
    }
    getShippingAddressError() {
        return this.getError(this.shippingAddressField);
    }
    getShippingCityError() {
        return this.getError(this.shippingCityField);
    }
    getShippingPostalCodeError() {
        return this.getError(this.shippingPostalCodeField);
    }
    getShippingPhoneNumberError() {
        return this.getError(this.phoneNumberField);
    }
    getBillingAddressError() {
        return this.getError(this.billingAddressField);
    }
    getBillingCityError() {
        return this.getError(this.billingCityField);
    }
    getBillingPostalCodeError() {
        return this.getError(this.billingPostalCodeField);
    }
    getStep3LoadingModal() {
        return this.getLoadingModal().within(() => {
            cy.findByText(this.step3LoadingModalText);
        });
    }
    getMembershipYearlyRadio() {
        return cy.get(this.membershipYearlyRadio);
    }
    getMembershipMonthlyRadio() {
        return cy.get(this.membershipMonthlyRadio);
    }
    getSpouseMembershipCheckbox() {
        return cy.get(this.spouseMembershipCheckbox);
    }
    getSpouseEmailField() {
        return cy.get(this.spouseEmailField);
    }
    getSpouseFirstNameField() {
        return cy.get(this.spouseFirstNameField);
    }
    getSpouseLastNameField() {
        return cy.get(this.spouseLastNameField);
    }
    getSpouseEmailError() {
        return this.getError(this.spouseEmailField);
    }
    getSpouseFirstNameError() {
        return this.getError(this.spouseFirstNameField);
    }
    getSpouseLastNameError() {
        return this.getError(this.spouseLastNameField);
    }
    getStep3ContinueButton() {
        return this.getStep("3").find(this.continueButton);
    }
    getStep3EditButton() {
        return this.getStepDivider(3).within(() => {
            cy.get(this.editButton);
        });
    }
    getStep4LoadingModal() {
        return cy.get(this.loadingModal).within(() => {
            cy.findByText(this.step4LoadingModalText);
        });
    }
    getStep4PlaceOrderButton() {
        return this.getStep("4").find(this.continueButton);
    }
    getZuoraPaymentiFrame() {
        return cy.get(this.zuoraPaymentiFrame).then(cy.wrap);
    }
    getCardHolderNameField() {
        return cy
            .iframe(this.zuoraPaymentiFrame)
            .find(this.cardHolderNameField);
    }
    getCardNumberField() {
        return cy.iframe(this.zuoraPaymentiFrame).find(this.cardNumberField);
    }
    getVisaCardImage() {
        return cy.iframe(this.zuoraPaymentiFrame).find(this.visaCardImage);
    }
    getMasterCardImage() {
        return cy.iframe(this.zuoraPaymentiFrame).find(this.masterCardImage);
    }
    getAmericanExpressCardImage() {
        return cy
            .iframe(this.zuoraPaymentiFrame)
            .find(this.americanExpressCardImage);
    }
    getDiscoverCardImage() {
        return cy.iframe(this.zuoraPaymentiFrame).find(this.discoverCardImage);
    }
    getCardExpirationDateMonthDropdown() {
        return cy
            .iframe(this.zuoraPaymentiFrame)
            .find(this.cardExpirationDateMonthDropdown);
    }
    getCardExpirationDateYearDropdown() {
        return cy
            .iframe(this.zuoraPaymentiFrame)
            .find(this.cardExpirationDateYearDropdown);
    }
    getCardSecurityCodeField() {
        return cy
            .iframe(this.zuoraPaymentiFrame)
            .find(this.cardSecurityCodeField);
    }
    getTermsOfAgreementCheckbox() {
        return cy.get(this.termsOfAgreementCheckbox);
    }
    getOfferModal() {
        return cy.get(this.offerModal);
    }
    getOfferModalCloseButton() {
        return cy.get(this.offerModalCloseButton);
    }
    getOfferModalAddButton() {
        return cy.get(this.offerModalAddButton);
    }
    getMembershipAgreementTermsLink() {
        return cy.contains(this.membershipAgreementTermsLink);
    }
    getDeltaDefenseGVPhoneLink() {
        return cy.get(this.telephoneLink);
    }
    getInsuranceDisclaimerReadMoreButton() {
        return cy.get(this.insuranceDisclaimerButton);
    }
    getAddingCreditCardModal() {
        return cy.get(this.loadingModal).within(() => {
            cy.findByText(this.addingCreditCardModalText);
        });
    }
    getErrorModal() {
        return cy.get(this.errorModal);
    }
    getErrorModalHeader() {
        return cy.get(this.errorModalHeader);
    }
    getErrorModalMessage() {
        return cy.get(this.errorModalText);
    }
    getErrorModalTelephoneLink() {
        return this.getErrorModal().within(() => {
            cy.get(this.telephoneLink);
        });
    }
    getErrorModalButton() {
        return cy.get(this.errorModalButton);
    }
    getSessionMessageWarningModal() {
        return cy.get(this.sessionMessageWarningModal);
    }
    getLoadingModal() {
        return cy.get(this.loadingModal).then(cy.wrap);
    }
    getExitIntentModal() {
        return cy.get(this.exitIntentModal);
    }
    getErrorPageModal() {
        return cy.get(this.errorPageModal);
    }
    getErrorPagePhoneLink() {
        return cy.get(this.errorPagePhoneLink);
    }
    getErrorPageBackLink() {
        return cy.findByText(this.errorPageBackLinkText);
    }
    getCheckoutSummaryModal() {
        return cy.get(this.checkoutSummaryModal);
    }
    getProductSummary() {
        return cy.get(this.productSummary);
    }
    getOrderSummary() {
        return cy.get(this.orderSummary);
    }
    getOrderSummaryLoadingModal() {
        return cy.get(this.orderSummaryLoadingModal);
    }
    getOrderSummaryProduct() {
        return cy.get(this.orderSummaryProduct);
    }
    verifyZuoraPaymentiFrameLoaded() {
        cy.frameLoaded(this.zuoraPaymentiFrame);
    }
    private getStepDivider(stepNumber: number) {
        return cy
            .get(this.stepDivider)
            .within(() => {
                cy.findByText(stepNumber);
            })
            .then(cy.wrap);
    }
    private getStep(stepNumber: string) {
        return cy
            .findByText(stepNumber)
            .closest(this.stepNumber)
            .parent()
            .siblings()
            .closest(this.step);
    }
    navigate(clearCookies: boolean = false, level: string = "eliteAnnual") {
        let envProducts = Cypress.env("checkout").productId;
        let levelId = envProducts[level];
        let urlParams = this.urlParams + levelId;
        super.setPageUrlParams(urlParams);
        super.navigate(clearCookies);
    }
    clickOfferModalAddButton() {
        this.getOfferModalAddButton().click();
    }
    clickOfferModalCloseButton() {
        this.getOfferModalCloseButton().click();
    }
    setBonusModalDismissed(bonusModalDismissedSetting: string = "true") {
        cy.session("bonusModalDismissed", () => {
            window.sessionStorage.setItem(
                "bonusModalDismissed",
                bonusModalDismissedSetting
            );
        });
    }
    createUserData(userData: object = {}) {
        if (!userData.hasOwnProperty("email")) {
            userData["email"] = super.getNewEmail();
        }
        if (!userData.hasOwnProperty("firstName")) {
            userData["firstName"] = this.chance.first();
        }
        if (!userData.hasOwnProperty("lastName")) {
            userData["lastName"] = this.chance.last();
        }
        if (!userData.hasOwnProperty("shippingAddress")) {
            userData["shippingAddress"] = this.chance.address();
        }
        if (!userData.hasOwnProperty("shippingCity")) {
            userData["shippingCity"] = this.chance.city();
        }
        if (!userData.hasOwnProperty("shippingState")) {
            userData["shippingState"] = this.chance.state({ full: true });
        }
        if (!userData.hasOwnProperty("shippingZipCode")) {
            userData["shippingZipCode"] = this.chance.zip();
        }
        if (!userData.hasOwnProperty("billingDiff")) {
            userData["billingDiff"] = false;
        }
        if (userData["billingDiff"]) {
            if (!userData.hasOwnProperty("billingAddress")) {
                userData["billingAddress"] = this.chance.address();
            }
            if (!userData.hasOwnProperty("billingCity")) {
                userData["billingCity"] = this.chance.city();
            }
            if (!userData.hasOwnProperty("billingState")) {
                let notPermittedStates = [
                    "New York",
                    "New Jersey",
                    "Washington"
                ];
                let stateTemp = this.chance.state({ full: true });
                if (notPermittedStates.includes(stateTemp)) {
                    stateTemp = "Wisconsin";
                }
                userData["billingState"] = this.chance.state({ full: true });
            }
            if (!userData.hasOwnProperty("billingZip")) {
                userData["billingZip"] = this.chance.zip();
            }
        }
        if (!userData.hasOwnProperty("phone")) {
            userData["phone"] = this.chance.phone();
        }
        if (!userData.hasOwnProperty("billingOption")) {
            userData["billingOption"] = "monthly";
        }
        if (!userData.hasOwnProperty("addSpouse")) {
            userData["addSpouse"] = false;
        } else if (userData["addSpouse"]) {
            if (!userData.hasOwnProperty("spouseEmail")) {
                userData["spouseEmail"] = super.getNewEmail();
            }
            if (!userData.hasOwnProperty("spouseFirst")) {
                userData["spouseFirst"] = this.chance.first();
            }
            if (!userData.hasOwnProperty("spouseLast")) {
                userData["spouseLast"] = this.chance.last();
            }
        }
        if (!userData.hasOwnProperty("ccType")) {
            let validCardTypes = ["mc", "visa", "amex", "discover"];

            userData["ccType"] =
                validCardTypes[
                    Math.floor(Math.random() * validCardTypes.length)
                ];
        }
        if (!userData.hasOwnProperty("ccNameDiff")) {
            userData["ccNameDiff"] = false;
            userData["ccName"] =
                userData["firstName"] + " " + userData["lastName"];
        } else if (userData["ccNameDiff"]) {
            userData["ccName"] = this.chance.first() + " " + this.chance.last();
        }
        if (!userData.hasOwnProperty("ccNumber")) {
            userData["ccNumber"] = this.chance.cc({
                type: userData["ccType"]
            });
        }
        if (!userData.hasOwnProperty("ccExpMonth")) {
            userData["ccExpMonth"] = this.chance.exp_month();
        }
        if (!userData.hasOwnProperty("ccExpYear")) {
            userData["ccExpYear"] = this.chance.exp_year();
        }
        if (!userData.hasOwnProperty("ccSecurityCode")) {
            userData["ccSecurityCode"] = this.generateCVV2();
        }
        if (!userData.hasOwnProperty("termsAgreement")) {
            userData["termsAgreement"] = true;
        }
        return userData;
    }
    private generateCVV2() {
        var min = 0;
        var max = 999;
        var num = Math.floor(Math.random() * (max - min + 1) + min);
        var s = num + "";
        while (s.length < 3) s = "0" + s;
        return s;
    }
    fillOutStep1(userData: object) {
        this.getEmailField().type(userData["email"]);
    }
    fillOutStep2(userData: object) {
        this.getShippingFirstNameField().type(userData["firstName"]);
        this.getShippingLastNameField().type(userData["lastName"]);
        this.getShippingAddressField().type(userData["shippingAddress"]);
        this.getShippingCityField().type(userData["shippingCity"]);
        this.getShippingStateDropdown().select(userData["shippingState"]);
        this.getShippingPostalCodeField().type(userData["shippingZipCode"]);
        this.getPhoneNumberField().type(userData["phone"]);
        if (userData["billingDiff"] === "true") {
            this.getUseShippingForBillingCheckbox().uncheck();
            this.getBillingAddressField().type(userData["billingAddress"]);
            this.getBillingCityField().type(userData["billingCity"]);
            this.getBillingStateDropdown().select(userData["billingState"]);
            this.getBillingPostalCodeField().type(userData["billingZipCode"]);
        }
    }
    fillOutStep3(userData: object) {
        this.getMembershipMonthlyRadio().should("be.visible");
        if (userData["billingOption"].includes("monthly")) {
            this.getMembershipMonthlyRadio().click();
        } else {
            this.getMembershipYearlyRadio().click();
        }
        if (userData["addSpouse"] === true) {
            this.getSpouseMembershipCheckbox().check();
            this.getSpouseEmailField().type(userData["spouseEmail"]);
            this.getSpouseFirstNameField().type(userData["spouseFirst"]);
            this.getSpouseLastNameField().type(userData["spouseLast"]);
        }
    }
    fillOutStep4(userData: object) {
        this.getCardHolderNameField().should("have.value", userData["ccName"]);
        this.getStep4PlaceOrderButton().should("be.visible");
        this.getStep4PlaceOrderButton().should("be.disabled");
        this.getCardNumberField().type(userData["ccNumber"]);
        this.getCardExpirationDateMonthDropdown().select(
            userData["ccExpMonth"]
        );
        this.getCardExpirationDateYearDropdown().select(userData["ccExpYear"]);
        this.getCardSecurityCodeField().type(userData["ccSecurityCode"]);
        if (userData["termsAgreement"] === true) {
            this.getTermsOfAgreementCheckbox().click();
        }
    }
}
export const CheckoutPage = new Checkout();
