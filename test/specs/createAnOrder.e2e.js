const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
    it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })

    it('should save the phone', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    }) 

    it('adding a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');   
        const cardNumber = helper.getCardNumber();
        const cardCode = helper.getCardCode();
        await page.addPaymenMethodCard(cardNumber, cardCode);
        await expect(await $(`${page.paymentMethodAddedCard}`)).toBeExisting(); 
    })

    it('writing a message', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCommentBox('how are you today?');
        const enterButton = await $(page.enterButton);
        await enterButton.waitForDisplayed();
        await enterButton.click();
    })

    it('should select supportive car', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveCar();

    })

    it('should select blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.selectSupportiveCar();
        const blanketToggle = await $(page.blanketToggle);
        await blanketToggle.waitForDisplayed();
        await blanketToggle.click();
        await expect(await $(`.switch-input`)).toBeChecked(); 
    })

    it('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCommentBox('how are you today?');
        const requirementsButton = await $(page.requirementsButton);
        await requirementsButton.click();
        const requirementOptions = await $(page.requirementOptions);
        await requirementOptions.waitForDisplayed();
        await page.selectTwoIceCreams();
        await expect($(page.iceCreamCounterValue)).toBeExisting();
    })

    it('car search model appears', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.fillCommentBox('how are you today?');
        await page.selectEnterButton();
        await expect($(page.carSearchModal)).toBeExisting();
    })
})





