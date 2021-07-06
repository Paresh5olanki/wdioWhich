# Which? UI Automation

# Kiwii_e2e_tests
This repo has been set up to add e2e tests for which?.


# What is webdriverIO?
WebdriverIO is a progressive automation framework built to automate modern web and mobile applications. It simplifies the interaction with your app and provides a set of plugins that help you create a scalable, robust and flakiness test suite.

# webdriverIO documentation
To be able to use webdriverIO you will need to use their api to be able to control the browser they have some excellent documentation to help with the writing of automated tests as found below. 

https://webdriver.io/docs/api

## Cloning the Repo
Create a folder in your local directory
Navigate to that folder in a terminal
Run `git clone -repo-`
Once the repo has been cloned you can go ahead and install the dependencies by running `npm install`

## Running the tests
There are a couple of ways to run the test. 

1 - You can run the following script in a terminal.
`npm run test` This will run the tests in a Chrome browser.
This scripts are located in the package.json file, additional scripts can be added or existing ones can be amended.

2 - For debugging you can use the `launch.json`, by default it will run all test however you can add `.only` to the test you want to debug and add breakpoints.