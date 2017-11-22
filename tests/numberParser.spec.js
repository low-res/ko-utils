define([
    "npm:lodash@4.17.4",
    "../src/misc/numberParser"
], function ( _, NumberParser ) {

    describe('Number Parser', function () {

        beforeEach( function () {

        });


        it('should parse numbers with , and .', function () {
            var v = NumberParser.parseFloat("1.2234,45");
            expect(v).toEqual(12234.45);

            v = NumberParser.parseFloat("1.22");
            expect(v).toEqual(1.22);

            v = NumberParser.parseFloat("XYZ");
            expect(v).toEqual(NaN);
        });
    });

});