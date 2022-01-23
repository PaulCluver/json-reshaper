const expect = require('chai').expect;
const data = require('../data');

describe('Restructuring json', () => {

    beforeEach(function() {
        data.setUniqueKeys();
    });

    afterEach(function() {
        data.resetObject();
    });
  
    it('should not have duplicate keys in the unique array', () => {
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);        
        expect(findDuplicates(data.uniqueKeys).length).to.equal(0
            , `There is a duplicate ${findDuplicates(data.uniqueKeys)} in the array`);        
    });

    it('should allow you to reset the formatted json', () => {
        data.reShapeAndPopulateJson('testid');
        data.resetObject();
        expect(data.reShapedObject.length).equals(0, "The object was not reset");
    });

    it('should set the expected parent node', () => {
        data.reShapeAndPopulateJson('streetnumber');        
        Object.keys(data.reShapedObject).forEach(function (key) {
            expect(key).to.not.equals('undefined', 'Expected the parent node to not be undefined');
        });
    });
});