const { expect } = require('chai');
const data = require('../data');

describe('Restructuring json', () => {

    beforeEach(function () {
        data.setUniqueKeys();
        data.reShapeAndPopulateJson('testid');
    });

    afterEach(function () {
        data.resetReshapedObject();
        data.resetUniqueKeys();
    });

    it('should not have duplicate keys in the unique array', () => {
        const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) !== index);
        expect(findDuplicates(data.uniqueKeys).length).to.equal(0, 
            `There is a duplicate ${findDuplicates(data.uniqueKeys)} in the array`,);
    });

    it('should set the expected parent node', () => {
        Object.keys(data.reShapedObject).forEach((key) => {
            expect(key).to.not.equals('undefined', 'Expected the parent node to not be undefined');
        });
    });

    it('should allow you to reset the formatted json', () => {        
        data.resetReshapedObject();
        expect(data.reShapedObject.length).equals(0, 'The object was not reset');
    });
});
