const inquirer = require('inquirer');
const data = require('./data');

function ask() {
  data.setUniqueKeys();
  const { uniqueKeys } = data;
  const questions = [{
    name: 'setParentNode',
    type: 'list',
    message: 'Select the parent node(s)',
    choices: uniqueKeys,
  }];

  inquirer.prompt(questions[0])
    .then(async (answer) => {
      data.reShapeAndPopulateJson(answer.setParentNode);
    });
}

ask();
