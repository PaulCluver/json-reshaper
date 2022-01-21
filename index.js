const inquirer = require('inquirer');
const data = require('./data');

function ask() {
  data.setUniqueKeys();
  let uniqueKeys = data.uniqueKeys

  const questions = [{
    name: 'chosenNode',
    type: 'list',
    message: 'Select the parent node(s)',
    choices: uniqueKeys
  }];

  inquirer
  .prompt(questions[0])
  .then(async function (answer) {
    data.reShapeAndPopulateJson(answer.chosenNode);
    console.log(data.reShapedObject);
  });

}

ask();
