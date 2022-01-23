const testdata = [
  {
    testid: 'test case 1',
    title: 'Mr',
    firstname: 'Jeffrey',
    lastname: 'Dunker',
    emailaddress: 'jeffrey@dunker.com',
    streetnumber: 101,
    streetname: 'Red Street',
    city: 'Durban',
    province: 'KZN',
    country: 'South Africa',
  },
  {
    testid: 'test case 2',
    title: 'Mrs',
    firstname: 'Mary',
    lastname: 'Maker',
    emailaddress: 'mary@maker.com',
    streetnumber: 212,
    streetname: 'Blue Street',
    city: 'Cape Town',
    province: 'Western Cape',
    country: 'South Africa',
  },
];
const allKeys = [];
const uniqueSet = new Set();
const uniqueKeys = [];
let reShapedObject = [];

(function reformatData() {
  async function setUniqueKeys() {
    testdata.forEach((item) => {
      allKeys.push(Object.keys(item));
    });
    allKeys.forEach((unique) => {
      unique.forEach((key) => {
        uniqueSet.add(key);
      });
    });
    uniqueSet.forEach((key) => {
      uniqueKeys.push(key);
    });
  }

  async function reShapeAndPopulateJson(chosenNode) {
    testdata.forEach((dataSet) => {
      const newParentNode = dataSet[chosenNode];
      delete dataSet[chosenNode];
      reShapedObject[newParentNode] = dataSet;
    });
  }

  async function resetObject() {
    reShapedObject = [];
  }

  module.exports.uniqueKeys = uniqueKeys;
  module.exports.reShapedObject = reShapedObject;
  module.exports.setUniqueKeys = setUniqueKeys;
  module.exports.reShapeAndPopulateJson = reShapeAndPopulateJson;
  module.exports.resetObject = resetObject;
}());
