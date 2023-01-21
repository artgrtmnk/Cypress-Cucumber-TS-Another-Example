import CartPage from "../pajeObjects/cart_page"
import CheckoutPage from "../pajeObjects/checkout_page"
import LoginPage from "../pajeObjects/login_page"
import ProductDetailsPage from "../pajeObjects/pdp_page"
import ProductListPage from "../pajeObjects/plp_page"

/// <reference types="cypress" />

const PAGES = [
    LoginPage,
    ProductListPage,
    ProductDetailsPage,
    CartPage,
    CheckoutPage
]

class PageService {
    private static get getPages() {
        return PAGES
    }

    static getUrl(pageName: string) {
        let pages = this.getPages
        let targetPage = pages.find(page => page.getPageName == pageName + ' Page')
        return targetPage.getPageUrl
    }

    static checkIsOnCorrectPage(pageName: string) {
        let pages = this.getPages
        let targetPage = pages.find(page => page.getPageName == pageName + ' Page')
        targetPage.checkIsOnPage()
    }
}

export default PageService