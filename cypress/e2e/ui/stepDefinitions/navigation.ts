import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { user } from '../../../fixtures/login_credentials.json'

import PageService from '../../../support/helpers/pageService'
import PageHeader from '../../../support/pajeObjects/header_component';
import LoginPage from '../../../support/pajeObjects/login_page';

/// <reference types="cypress" />

describe('Navigation Step Definitions', () => {
  Given('User has opened {string} page', (page: string) => {
    let pageUrl = PageService.getUrl(page)
    Cypress.config('baseUrl', pageUrl)
    cy.visit('/')
  });

  Given('User is logged in', () => {
    cy.visit(LoginPage.getPageUrl)
    LoginPage.login(user.username, user.password)
  });

  When('User clicks on Cart icon', () => {
    PageHeader.clickOnCart()
  });

  Then('User is on the {string} Page', (pageName: string) => {
    PageService.checkIsOnCorrectPage(pageName)
  })
})