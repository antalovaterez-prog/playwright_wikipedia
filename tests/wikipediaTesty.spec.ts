import {test, expect} from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage';

test('Wikipedia', async ({page}) => {  
  const wiki= new WikipediaPage(page);
    await wiki.otvor(); 

    const dar = page.getByRole('link', { name: 'poskytnutie daru'});

    await dar.click();
    await expect(page).toHaveURL(/.*donate.*/);
}
);

test('Wikipedia2', async ({page}) => {
  const wiki= new WikipediaPage(page);
    await wiki.otvor();

   await wiki.vyhladaj('Bratislava');
    await expect(page).toHaveTitle(/.*Bratislava.*/);
}
);

test('Wikipedia3', async ({page}) => {
  const wiki= new WikipediaPage(page);
    await wiki.otvor();

const zoznamPojmov = ['Bratislava', 'Milan Rastislav Štefánik', 'Vesmír'];

await wiki.vyhladaj(zoznamPojmov[2]);

await expect(page).toHaveTitle(/.*Vesmír.*/);

}
);

test('Wikipedia4', async ({ page }) => {
  const wiki= new WikipediaPage(page);
  const zoznamPojmov = ['Bratislava', 'Milan Rastislav Štefánik', 'Vesmír'];

  for (const pojem of zoznamPojmov) {
    
    await wiki.otvor();

   await wiki.vyhladaj(pojem);

    await expect(page).toHaveTitle(new RegExp(pojem));
    await expect(page.locator('h1')).toHaveText(pojem);
    
    console.log(`Úspešne otestovaný pojem: ${pojem}`);
  }
}
);