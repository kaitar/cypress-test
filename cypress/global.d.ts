/// <reference types="cypress-xpath" />

declare namespace Cypress {
    interface Message {
        type: string;
        namespace: string;
        message: string;
    }

    interface Messages {
        messages: Message[];
    }
    interface Chainable<Subject> {}

    interface Chainable {
        /**
         * Custom command to make taking Percy snapshots with full name formed from the test title + suffix easier
         */
        visualSnapshot(maybeName?): Chainable<any>;

        // All other custom commands we've written
        getAuthTokenRestApi(failOnApiError?: boolean): Chainable<any>;
        verifyErrorCases(res: Response<any>): Chainable<any>;
        usccaLoginWithUi(desiredUserType: string): Chainable<any>;
        usccaSetLoginCookies(response: Response<any>): Chainable<any>;
        getApiAccessToken(): Chainable<any>;
        forceVisit(url: string): Chainable<any>;
        usccaLoginNoUI(desiredUserType: string, overrides?: {}): Chainable<any>;
        setAuthEnvCreds(testCase: string): Chainable<any>;
        setEnvironment(): Chainable<any>;

        //Partner Dashboard Specific commands
        wordpressLogin(): Chainable<any>;
        setPdCookies(): Chainable<any>;
        loginProdPartnerDashboard(rememberMe?: boolean): Chainable<any>;
        setPdUrl(): Chainable<any>;
        getWordPressCookies(): Chainable<any>;
        setWordPressCookies(): Chainable<any>;
        checkElementTextUpdates(pathToElement: string): Chainable<any>;
        checkElementTextUpdatesByXpath(pathToElement: string): Chainable<any>;
        loginPdUi(rememberMe?: boolean): Chainable<any>;
    }
}
