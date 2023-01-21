import PageService from '../../../support/helpers/pageService'
import { Given } from "@badeball/cypress-cucumber-preprocessor";

/// <reference types="cypress" />

describe('Navigation Step Definitions', () => {
  Given('User has opened {string} page', (page: string) => {
    let pageUrl = PageService.getUrl(page)

    Cypress.config('baseUrl', pageUrl)

    cy.visit('/')
  });
})