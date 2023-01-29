import PageService from '../../support/helpers/page_service';

/// <reference types="cypress" />

class Actions {
  public clickOnButton = (pageName: string, buttonName: string) => {
    PageService.getPage(pageName)
      .ELEMENTS[buttonName]()
      .click('center', { force: true });
  };

  public fillFieldWithValue = (
    pageName: string,
    fieldName: string,
    value: string,
  ) => {
    if (value != '[empty]')
      PageService.getPage(pageName).ELEMENTS[fieldName]().type(value);
  };
}
export default new Actions();
