const report = require("multiple-cucumber-html-reporter");

// let starttime=Date.now();
let date=new Date()
        let currentDate=date.getDate()
        let currentMonth=date.getMonth()+1
        // cy.log(currentDate)
        // cy.log(currentMonth)
        let currentYear=date.getFullYear()
        // cy.log(currentYear)
        let currentDateTime=date.getTime()
        // cy.log(currentDateTime)
        let currentDateString=date.toLocaleDateString()
        // cy.log(currentDateString)
        let currentTimeString=date.toLocaleTimeString()
        // cy.log(currentTimeString)

report.generate({
  jsonDir: "./cypress/cucumberReports",
  reportPath: "cypress/cucumberReports",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "10",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "CypressAuto" },
      { label: "Release", value: "1.0" },
      { label: "Cycle", value: "B11221.34321" },
     // { label: "Execution Start Time", value: "Jan 07th 2025, 02:31 PM EST" },
     { label: "Execution Start Time", value: currentDateString+","+ currentTimeString},
      // { label: "Execution End Time", value: "Nov 19th 2017, 02:56 PM EST" },
      { label: "Execution End Time", value: currentDateString+","+ currentTimeString }
    ],
  },
});