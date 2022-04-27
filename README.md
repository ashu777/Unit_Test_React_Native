# Unit Testing in React Native:

## Unit Testing in React Native using Jest

### Unit Testing with Test Report and Code Coverage Report Generation

##  Check and Add Jest :
### > When we create a react-native project, by default jest is added .
### > To check this please go to package.json and check  "test": “jest"  inside  “scripts”. And  “jest"  dependency  will be there. If it is not present add jest using command “npm install --save-dev jest ” .

##  Run all Test Files :
### > Run the command “npm  run test”  
### > All the test case results will be shown in terminal.

##  Run a particular Test File :
### > Run the Command “npx jest  testfilename”
###   For e.g=> npx jest App-test.js

## Updating Snapshots :
### > npx jest --updateSnapshot

## Test Report Generation :
### > To Generate Test Report we need to add jest-html-reporter 
### > To add this run command “npm install --save-dev jest-html-reporter” And add “reporters” inside  “jest” dependency in  package.json file .
### > Run the command “npm  run test” and  test report will be generated as a file name called “test-report.html” in the  root of the project.

## Code Coverage Rreport Generation :
### > To Generate Code Coverage report add the below code inside the “jest” dependency .

### "collectCoverage": true,
### "coverageReporters": [ "json", "html" ]

### > To Generate Code Coverage Report  of all TestFiles run command “npx jest --coverage”
### > It  will generate a folder called coverage  in root of the project and inside it “index.html” contains the Code Coverage report.

## To generate a specific testfile code coverage report :
### > npx jest --coverage  -- testfilename
![Test Report](https://user-images.githubusercontent.com/39656382/165514634-1e5b081e-61d6-4100-99fc-707d247c0b30.png)
![Code Coverage Report](https://user-images.githubusercontent.com/39656382/165514672-902d8846-bbf6-46a9-b53d-88136dbeb05b.png)

