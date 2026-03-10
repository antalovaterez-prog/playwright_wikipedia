import { test, expect} from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage';
import { ArticlePage } from '../pages/ArticlePage'; 

test('Detektiv Wiki 1', async ({page}) => {

    const wiki= new WikipediaPage(page);
    const article = new ArticlePage(page);

    await wiki.otvor();     
    await wiki.vyhladaj('Bratislava');  

    await expect(article.HlavnyNadpis).toHaveText('Bratislava');
    await article.klikniNaOdkaz('Slovensko');   
    await expect(article.HlavnyNadpis).toHaveText('Slovensko');

});

