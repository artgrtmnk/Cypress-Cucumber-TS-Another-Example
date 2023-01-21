import NotImplementedException from "../exceptions"

/// <reference types="cypress" />

abstract class BasePage {
    // Static abstract methods implementation
    static get getPageName(): string {
        throw new NotImplementedException()
    }
    static get getPageUrl(): string {
        throw new NotImplementedException()
    }
}
export default BasePage