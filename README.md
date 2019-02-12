# WebdriverIO-POC
-Create a test folder

$ mkdir webdriverio-test and cd webdriverio-test

-While still in this test folder:

-Setup Chromedriver

Install chromedriver

npm install -g chromedriver

-Start chromedriver with command below

chromedriver --port=4444 --url-base=/wd/hub --verbose

Keep this terminal open and start another one so that Chromedriver continues to run.

-Download WebdriverIO

$ npm install webdriverio

-install Test runner

$ npm i --save-dev @wdio/cli

-Generate Configuration File. To do that just run the configuration utility:

$ ./node_modules/.bin/wdio config

Answer these queston below

Q: Where should your tests be launched?

A: local

Q: Shall I install the runner plugin for you?

A: Yes

Q: Where is your automation backend located?

A: On my local machine

Q: Which framework do you want to use?

A: mocha

Q: Shall I install the framework adapter for you?

A: Yes (just press enter)

Q: Do you want to run WebdriverIO commands synchronous or asynchronous?

A: sync just press enter

Q: Where are your test specs located?

A: ./test/specs/*/.js (just press enter)

Q: Which reporter do you want to use?

A: dot (just press space and enter)

Q: Shall I install the reporter library for you?

A: Yes (just press enter)

Q: Do you want to add a service to your test setup?

A: none (just press enter, let's skip this for simplicity)

Q: Level of logging verbosity:

A: trace

Q: What is the base url?

A: http://localhost (just press enter)

-Run all tests using the below command

./node_modules/.bin/wdio wdio.conf.js

-To run each test individually, pass spec file path as parameter

./node_modules/.bin/wdio wdio.conf.js --spec tests/Sharebar.test.js


