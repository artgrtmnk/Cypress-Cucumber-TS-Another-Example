import PageService from '../../../support/helpers/pageService'
import LoginPage from '../../../support/pajeObjects/login_page';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { user } from '../../../fixtures/login_credentials.json'
import ProductDetailsPage from '../../../support/pajeObjects/pdp_page';

/// <reference types="cypress" />

describe('Navigation Step Definitions', () => {
  Given('User has opened {string} page', (page: string) => {
    let pageUrl = PageService.getUrl(page)
    cy.visit(`${pageUrl}/`)
  });

  Given('User is logged in', () => {
    cy.visit(LoginPage.getPageUrl)

    let userCookie = Cypress.env("sessionCookie")

    if (userCookie == undefined) {
      LoginPage.login(user.username, user.password)

      cy.getCookie('session-username').then((cookie) => {
        Cypress.env('sessionCookie', cookie)
      })
    } else {
      cy.setCookie('session-username', userCookie)
    }
  });

  When('User clicks on Cart icon', () => {
    ProductDetailsPage.clickOnCart()
  });

  Then('User is on the {string} Page', (pageName: string) => {
    PageService.checkIsOnCorrectPage(pageName)
  })
})