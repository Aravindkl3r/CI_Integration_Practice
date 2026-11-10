import {test,expect} from '@playwright/test';

test('LOGIN-001 Login with valid credentials',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('//*[@id="user-name"]').fill('standard_user');
    await page.locator('//*[@id="password"]').fill('secret_sauce');
    await page.locator('//*[@id="login-button"]').click();
    // After your login steps complete:
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText('Products');
});

test('LOGIN-002 Login with invalid credentials', async ({page})=>{

     await page.goto('https://www.saucedemo.com/'); 
     await expect(page).toHaveURL('https://www.saucedemo.com/')
     
});

test('LOGIN-003 Login with valid credentials',async ({page})=>{

    await page.goto('https://www.saucedemo.com/');
    await page.locator('//*[@id="user-name"]').fill('standard_user');
    await page.locator('//*[@id="password"]').fill('secret_sauce');
    await page.locator('//*[@id="login-button"]').click();
    // After your login steps complete:
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await expect(page.locator('//*[@id="header_container"]/div[2]/span')).toHaveText('Products');
});


     




