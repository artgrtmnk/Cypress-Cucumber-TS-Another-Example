import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import PageService from '../../../support/helpers/page_service'
import PageHeader from '../../../support/pajeObjects/header_component';

/// <reference types="cypress" />

describe('Navigation Step Definitions', () => {
  Given('User has opened {string}', (page: string) => {
    let pageUrl = PageService.getUrl(page)
    Cypress.config('baseUrl', pageUrl)
    cy.visit('/')
  });

  When('User clicks on Cart icon', () => {
    PageHeader.clickOnCart()
  });

  Then('User is on the {string}', (pageName: string) => {
    PageService.checkIsOnCorrectPage(pageName)
  })
})