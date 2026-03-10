import {    test, expect} from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage';
import { ArticlePage } from '../pages/ArticlePage';     

test('Overovac Faktov', async ({page}) => {

    const wiki= new WikipediaPage(page);
    const article = new ArticlePage(page);  

    await wiki.otvor();     
    await wiki.vyhladaj('Bratislava');

   const nazvyMesta = ['Istropolis', 'Pressburg', 'Posonium'];

   for (const nazovMesta of nazvyMesta) {
       await article.overSlovo(nazovMesta);
       console.log('V clanku sa nachádza slovo: ' + nazovMesta);
   }

}
);


