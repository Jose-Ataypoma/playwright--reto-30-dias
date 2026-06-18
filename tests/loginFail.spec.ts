import {expect, test} from '@playwright/test'

test('Login fallido en hrm', async({page}) =>{
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.getByRole('textbox', {name: 'Username'}).fill('Admin');
    await page.getByRole('textbox', {name: 'Password'}).fill('admin1234');
    await page.getByRole('button', {name: 'Login'}).click();

    //Validación de mensaje de error
    const errorMessage = page.getByText(/Invalid credentials/i);
    await expect(errorMessage).toBeVisible({timeout: 10000});
});