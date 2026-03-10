import {Page, Locator} from '@playwright/test';

export class WikipediaPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('searchbox', { name: 'Hľadať na Wikipédii' });
        this.searchButton = page.getByRole('button', { name: 'Hľadať' });
        }
    

    async otvor () {
        await this.page.goto('https://sk.wikipedia.org/');
    }

    async vyhladaj(text: string) {
        await this.searchInput.fill(text);
        await this.searchButton.click();

    }
}
    