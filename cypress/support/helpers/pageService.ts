import CartPage from "../pajeObjects/cart_page"
import CheckoutOrderPage from "../pajeObjects/checkout_order_page"
import CheckoutBillingPage from "../pajeObjects/checkout_billing_page"
import OrderConfirmationPage from "../pajeObjects/order_confirmation_page"
import LoginPage from "../pajeObjects/login_page"
import ProductDetailsPage from "../pajeObjects/pdp_page"
import ProductListPage from "../pajeObjects/plp_page"
import BasePage from "../pajeObjects/base_page"

/// <reference types="cypress" />

const PAGES = [
    LoginPage,
    ProductListPage,
    ProductDetailsPage,
    CartPage,
    CheckoutBillingPage,
    CheckoutOrderPage,
    OrderConfirmationPage
]

class PageService {
    private static get getPages(): Array<BasePage> {
        return PAGES
    }

    public static getUrl(pageName: string): string {
        let pages = this.getPages
        let targetPage = pages.find(page => page.getPageName == pageName + ' Page')
        return targetPage.getPageUrl
    }

    public static checkIsOnCorrectPage(pageName: string) {
        let pages = this.getPages
        let targetPage = pages.find(page => page.getPageName == pageName + ' Page')
        targetPage.checkIsOnPage()
    }
}
export default PageService