/// <reference types="cypress" />
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

import "@applitools/eyes-cypress/commands";
import "./commands";

// Import commands.js using ES2015 syntax:
import "@bahmutov/cy-api/support";
//import 'cypress-graphql-mock-network';
import "cypress-fill-command";
import "cypress-mochawesome-reporter/register";
import "@testing-library/cypress/add-commands";
import "cypress-localstorage-commands";
import "cypress-grep";
import "@cypress/skip-test/support";

// Our in-house custom commands...
import "cypress-xpath/src";

import "cypress-wait-until";
