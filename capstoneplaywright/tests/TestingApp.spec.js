const { test, expect } = require('@playwright/test');

const x = require('./TestData.json');

test("openning an App", async({page})=>{


await page.goto(x.bank)

await page.waitForTimeout(2000)

page.click("//a[contains(text(),'Register')]");
await page.fill('[id="customer.firstName"]',"Neeraj")

await page.waitForTimeout(2000)
await page.fill('[id="customer.lastName"]',"Neeraj")
await page.fill('[id="customer.address.street"]',"Neeraj")
await page.fill('[id="customer.address.city"]',"Neeraj")
await page.waitForTimeout(2000)
await page.fill('[id="customer.address.state"]',"Neeraj")
await page.waitForTimeout(2000)
await page.fill('[id="customer.address.zipCode"]',"555555")

await page.waitForTimeout(2000)
await page.fill('[id="customer.phoneNumber"]',"9999999999")
await page.waitForTimeout(2000)

await page.locator('[id="customer\\.ssn"]').fill('1');

await page.fill('[id="customer.username"]',"Neeraj721")
await page.fill('[id="customer.password"]',"123123")

await page.fill('[id="repeatedPassword"]',"123123")

page.click("[value='Register']")

//await page.locator("//p[text()='Your account was created successfully. You are now logged in.']").


await page.waitForTimeout(5000)

page.click("//a[contains(text(), 'Log Out')]");

await page.waitForTimeout(2000)

await page.locator("[name='username']").fill("Neeraj7212")
await page.locator("[name='password']").fill("123123")

page.click("[value='Log In']")
 

});