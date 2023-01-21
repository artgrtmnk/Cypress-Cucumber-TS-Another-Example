import LoginPage from "../pajeObjects/login_page"
import ProductListPage from "../pajeObjects/plp_page"

/// <reference types="cypress" />

const PAGES = [
    LoginPage,
    ProductListPage,
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
}

export default PageService