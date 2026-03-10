import {Locator, Page, expect} from '@playwright/test';

export class ArticlePage {
    readonly page: Page;
    readonly HlavnyNadpis: Locator;
    readonly TextClanku: Locator;

    constructor(page: Page) {
        this.page = page;
        this.HlavnyNadpis = page.locator('h1');
        this.TextClanku = page.locator('#mw-content-text');
    }

    async klikniNaOdkaz(nazovOdkazu: string) {
        await this.page.getByRole('link', { name: nazovOdkazu, exact: true }).first().click();
    }

    async zistiTextClanku() {
        return await this.TextClanku.textContent();
    }   
    async overSlovo(slovo: string) {
       await expect(this.TextClanku).toContainText(slovo);
    }

};

