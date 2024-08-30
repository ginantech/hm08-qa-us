module.exports = {
    // Inputs
    fromField: '#from',
    toField: '#to',
    phoneNumberField: '#phone',
    codeField: '#code',
    cardNumberField: '#card number',
    commentBox: '#comment',

    // Buttons
    callATaxiButton: 'button=Call a taxi',
    phoneNumberButton: '//div[starts-with(text(), "Phone number")]',
    nextButton: 'button=Next',
    confirmButton: 'button=Confirm',
    paymentMethodField: '.pp-text',
    addCardButton: 'pp-selector',
    paymentMethodAddedCard: 'div=Card',
    supportiveCar: 'div=Supportive',
    blanketToggle: '.switch',
    requirementsButton: 'div.reqs',
    iceCreamButton: 'div=+',
    iceCreamCounterValue: 'div=2',
    enterButton: 'button.smart-button',

    // Modals
    phoneNumberModal: '.modal',
    creditCardModal: '#root > div > div.payment-picker.open > div.modal',
    cardInfoModal: '#root > div > div.payment-picker.open > div.modal.unusual',
    addingTheCardModal: 'number',
    paymentMethodButton: '.pp-text',
    addCardButton: 'div=Add card',
    cardNumberField: '#number',
    cardCodeField: '.card-second-row #code',
    paymentMethodModal: '.payment-picker .modal',
    linkCardButton: 'button=Link',
    paymentMethodModalCloseButton: '.payment-picker .section.active .close-button',
    requirementOptions: 'div.reqs.open',
    carSearchModal: 'div=Car search',
    //carOrderNumber: 'div.order-number',


    // Functions
    fillAddresses: async function(from, to) {
        const fromField = await $(this.fromField);
        await fromField.setValue(from);
        const toField = await $(this.toField);
        await toField.setValue(to);
        const callATaxiButton = await $(this.callATaxiButton);
        await callATaxiButton.waitForDisplayed();
        await callATaxiButton.click();
    },
    fillPhoneNumber: async function(phoneNumber) {
        const phoneNumberButton = await $(this.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const phoneNumberModal = await $(this.phoneNumberModal);
        await phoneNumberModal.waitForDisplayed()
        const phoneNumberField = await $(this.phoneNumberField);
        await phoneNumberField.waitForDisplayed();
        await phoneNumberField.setValue(phoneNumber);
    },
    submitPhoneNumber: async function(phoneNumber) {
        await this.fillPhoneNumber(phoneNumber);
        // we are starting interception of request from the moment of method call
        await browser.setupInterceptor();
        await $(this.nextButton).click();
        // we should wait for response
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(2000);
        const codeField = await $(this.codeField);
        // collect all responses
        const requests = await browser.getRequests();
        // use first response
        await expect(requests.length).toBe(1)
        const code = await requests[0].response.body.code
        await codeField.setValue(code)
        await $(this.confirmButton).click()
    },

    submitPaymentMethod: async function(paymentMethod) {
        const paymentMethodField = await $(this.paymentMethodField);
        await paymentMethodField.click();
        const creditCardModal = await $(this.creditCardModal);
        await creditCardModal.waitForDisplayed();
        await expect(creditCardModal).toBeExisting();
    },

    addPaymenMethodCard: async function (cardNumber, cardCode) {
        const paymentMethodButton = await $(this.paymentMethodButton);
        await paymentMethodButton.waitForDisplayed();
        await paymentMethodButton.click();
        const addCardButton = await $(this.addCardButton);
        await addCardButton.waitForDisplayed();
        await addCardButton.click();
        const cardNumberField = await $(this.cardNumberField);
        await cardNumberField.setValue(cardNumber);
        const cardCodeField = await $(this.cardCodeField);
        await cardCodeField.setValue(cardCode);
        const paymentMethodModal = await $(this.paymentMethodModal);
        await paymentMethodModal.click();
        const linkCardButton = await $(this.linkCardButton);
        await linkCardButton.waitForDisplayed();
        await linkCardButton.click();
        const paymentMethodModalCloseButton = await $(this.paymentMethodModalCloseButton);
        await paymentMethodModalCloseButton.click();
    },

    fillCommentBox: async function(driverMessage) {
        const commentBox = await $(this.commentBox);
        await commentBox.setValue(driverMessage);

    },

    selectSupportiveCar: async function () {
        const supportiveCar = await $(this.supportiveCar);
        await supportiveCar.waitForDisplayed();
        await supportiveCar.click();
    },

    selectTwoIceCreams: async function () {
        const iceCreamButton = await $(this.iceCreamButton);
        await iceCreamButton.waitForDisplayed();
        await iceCreamButton.click();
        await iceCreamButton.click();
    },

    selectEnterButton: async function () {
        const enterButton = await $(this.enterButton);
        await enterButton.waitForDisplayed();
        await enterButton.click();
    },
}