import NotImplementedException from "../exceptions"

/// <reference types="cypress" />


abstract class BasePage {
    abstract NAME: string;
    abstract URL: string;

    public get getPageName(): string {
        return this.NAME
    }

    public get getPageUrl(): string {
        return this.URL
    }

    abstract checkIsOnPage(): any
}
export default BasePage