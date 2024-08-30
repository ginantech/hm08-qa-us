Urban Routes Automation Testing

This repository contains automated end-to-end (E2E) tests for the Urban Routes application. The tests are written to verify the full process of ordering a taxi, ensuring the system behaves as expected.
Test Scenarios

The automated tests cover the following scenarios:

    Setting the Address
        Verify that the user can correctly set the pickup and drop-off locations.

    Selecting Supportive Plan
        Check that the user can choose a supportive plan from the available options.

    Filling in the Phone Number
        Ensure the phone number field is functional and accepts valid input.

    Adding a Credit Card
        Tip: The "link" button does not become active until the card CVV field loses focus. This can be simulated by pressing TAB or clicking somewhere else on the screen.
        Ensure the credit card details can be added correctly using the modal with id="code" and class="card-input".

    Writing a Message for the Driver
        Verify that the user can add a custom message for the driver in the appropriate field.

    Ordering a Blanket and Handkerchiefs
        Tip: There are two selectors to be aware of here:
            One selector for the click action.
            One to verify that the state has changed using an expect statement.

    Ordering 2 Ice Creams
        Check that the user can successfully order two ice creams along with the ride.

    Car Search Modal Appears
        Verify that the car search modal pops up after the order has been placed.

    Optional: Waiting for Driver Info to Appear
        This step is optional but good practice. It ensures that the driver's information is displayed correctly in the modal after the car search.

Structure

    test/specs/createAnOrder.e2e.js: This file contains all the end-to-end tests for the Urban Routes order process.

Installation & Setup

    Clone the repository:

    bash

git clone https://github.com/username/urban-routes-automation.git

Navigate to the project directory:

bash

cd urban-routes-automation

Install the required dependencies:

bash

    npm install

Running the Tests

To execute the tests, run the following command:

bash

npm test

Notes

    Ensure that the application server is running before executing the tests.
    Make sure that all dependencies are up to date for the smooth running of tests.
