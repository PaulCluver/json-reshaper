const fs = require('fs');
const path = require('path');
let filePath = path.resolve(`${__dirname}/raw-data/dataa.json`);
let tempObject = [];
let formattedObj = [];

function readJson() {
  try {
    const jsonString = fs.readFileSync(filePath);
    return tempObject.push(JSON.parse(jsonString));
  }
  catch(err) {
    console.log(err)
    return
  }
};

function formatTempObject() {
  for (const [key, value] of Object.entries(tempObject[0])) {
    formattedObj.push(value);
  };
}

function groupFormattedObject() {
  var grouped = formattedObj.reduce(function (obj, testItem) {
    obj[testItem.testidentifier] = obj[testItem.testidentifier] || [];
    obj[testItem.testidentifier].push(testItem);
    return obj;
  }, {});
  return grouped;
}

readJson();
formatTempObject();
var groupedTestData = groupFormattedObject();
console.dir(groupedTestData);