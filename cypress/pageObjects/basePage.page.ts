export abstract class BasePage {
    baseUrl: string;
    pageUrlParams?: string = "/";
    constructor(desiredBaseUrl: string) {
        this.setBaseUrl(desiredBaseUrl);
    }

    setBaseUrl(desiredBaseUrl: string) {
        this.baseUrl = desiredBaseUrl;
        Cypress.config("baseUrl", desiredBaseUrl);
        Cypress.log({
            name: "Cypress baseUrl configuration",
            displayName: "Cypress baseUrl configuration",
            message: [`Setting Cypress baseUrl to | ${desiredBaseUrl})`]
        });
    }
    getBaseUrl(): string {
        return String(Cypress.config("baseUrl"));
    }

    setPageUrlParams(desiredPageUrlParams: string) {
        this.pageUrlParams = desiredPageUrlParams;
    }

    getPageUrlParams(): string {
        return this.pageUrlParams;
    }

    navigate(clearCookies: boolean = false): void {
        if (clearCookies === true) {
            cy.clearCookies();
        }
        cy.log("Navigating to: " + this.getBaseUrl() + this.getPageUrlParams());
        cy.visit(this.getBaseUrl() + this.getPageUrlParams());
    }

    getNewEmail() {
        var d = new Date();
        let email =
            "qa+" +
            d.getFullYear().toString() +
            (d.getMonth() + 1).toString() +
            d.getDate().toString() +
            d.getHours().toString() +
            d.getMinutes().toString() +
            d.getSeconds().toString() +
            d.getMilliseconds().toString() +
            "@uscca.com";
        return email;
    }
    private verifyElementIsSomething(element: any, condition: string) {
        element.should(condition);
    }
    private takeScreenshot(visualRegression: boolean, applitoolsTag: string) {
        if (visualRegression) {
            cy.eyesCheckWindow({
                tag: applitoolsTag
            });
        }
    }
    verifyElementIsEnabled(
        element: any,
        visualRegression: boolean,
        applitoolsTag: string
    ) {
        this.verifyElementIsSomething(element, "is.enabled");
        this.takeScreenshot(visualRegression, applitoolsTag);
    }
    verifyElementIsVisible(
        element: any,
        visualRegression: boolean,
        applitoolsTag: string
    ) {
        this.verifyElementIsSomething(element, "is.visible");
        this.takeScreenshot(visualRegression, applitoolsTag);
    }
}
