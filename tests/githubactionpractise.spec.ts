import {test,expect} from '@playwright/test';

const authFile = 'playwright/.auth/user.json'
test('LOGIN-001 Login with valid credentials',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('//*[@id="user-name"]').fill('standard_user');
    await page.locator('//*[@id="password"]').fill('secret_sauce');
    await page.locator('//*[@id="login-button"]').click();
    // After your login steps complete:
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.context().storageState({path:authFile});
});
    
    test.describe('Authenticated test', async ()=>{
    test.use({storageState:authFile});
    
     test('LOGIN-002 Login with invalid credentials one', async ({page})=>{
     await page.goto('https://www.saucedemo.com/inventory.html'); 
     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
     await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText('Products');
     
});
})
     




