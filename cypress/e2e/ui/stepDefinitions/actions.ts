import { When } from '@badeball/cypress-cucumber-preprocessor';

import Actions from '../../../support/helpers/actions';

/// <reference types="cypress" />

describe('Common Actions Step Definitions', () => {
  When(
    'On {string} user clicks on {string}',
    (pageName: string, buttonName: string) => {
      Actions.clickOnButton(pageName, buttonName);
    },
  );

  When(
    'On {string} user enters in {string} value {string}',
    (pageName: string,
      fieldName: string,
      value: string) => {
      Actions.fillFieldWithValue(pageName, fieldName, value);
    },
  );
});
