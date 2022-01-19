const rawData = [
    {
      "testidentifier": "Create A Death Claim",
      "policynumber": 8765423,
      "claimtype": "Death Claim",
      "assuredlife": "Mr Jeffrey Dunker",
      "emailaddress": "jeffrey@dunker.com",
      "Streetnumber": 1,
      "streetname": "Red Street",
      "city": "Durban",
      "province": "KZN",
      "country": "South Africa"
  },
  {
      "testidentifier": "Create Retrenchment Claim",
      "policynumber": 9834768,
      "claimtype": "Disability Claim",
      "assuredlife": "Miss Mary Maker",
      "emailaddress": "mary@maker.com",
      "Streetnumber": 2,
      "streetname": "Blue Street",
      "city": "Cape Town",
      "province": "Western Cape",
      "country": "South Africa"
  }
]

const newStructure = [
  {
    "test id": {
      "item 1": "item 1 data",
      "item 2": "item 2 data"
    }
  }
]

const source = {};
const returnTarget = Object.assign(rawData, source)
console.log(newStructure);