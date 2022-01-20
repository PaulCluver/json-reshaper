const testdata = [
  {
    "testid": "test case 1",
    "title": "Mr",
    "firstname":  "Jeffrey",
    "lastname": "Dunker",
    "emailaddress": "jeffrey@dunker.com",
    "streetnumber": 101,
    "streetname": "Red Street",
    "city": "Durban",
    "province": "KZN",
    "country": "South Africa"
  },
  {
      "testid": "test case 2",
      "title": "Mrs",
      "firstname":  "Mary",
      "lastname": "Maker",
      "emailaddress": "mary@maker.com",
      "Streetnumber": 212,
      "streetname": "Blue Street",
      "city": "Cape Town",
      "province": "Western Cape",
      "country": "South Africa"
  }
];
const allKeys = [];
const uniqueSet = new Set();
const uniqueKeys = [];

(function () {

  async function setUniqueKeys() {
    testdata.forEach(function (item) {
      allKeys.push(Object.keys(item));
    });
    allKeys.forEach(function(unique) {
      unique.forEach(function(key) {
        uniqueSet.add(key);
      })
    });
    uniqueSet.forEach(function (key) {
      uniqueKeys.push(key);
    });
  };

  module.exports.setUniqueKeys = setUniqueKeys;
  module.exports.uniqueKeys = uniqueKeys;
})();

