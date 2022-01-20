const inquirer = require('inquirer');
const data = require('./data');

function ask() {
  data.setUniqueKeys();
  let uniqueKeys = data.uniqueKeys

  const questions = [{
    name: 'chooseParentNodes',
    type: 'checkbox',
    message: 'Select the parent nodes',
    choices: uniqueKeys
  }];

  inquirer
  .prompt(questions[0])
  .then(async function (answer) {
    console.log(answer);
  });

}

ask();
