define([
    "numeral",
    "lodash"
], function( numeral, _ ) {

    var p           = NumberParser.prototype;
    var instance    = null;

    /**
     * Auth
     *
     * @constructor
     */
    function NumberParser() {
        var l = numeral['locales']['de'];
        if(!l) {
            numeral.register('locale', 'de', {
                delimiters: {
                    thousands: '.',
                    decimal: ','
                },
                abbreviations: {
                    thousand: 'k',
                    million: 'm',
                    billion: 'b',
                    trillion: 't'
                },
                ordinal: function (number) {
                    return '.';
                },
                currency: {symbol: '€'}
            });
            numeral.locale('de');
        }


    }


    p.parseFloat = function (numStr) {
        var v = numStr;
        if( _.isString(numStr) ) {
            if (numStr.indexOf(',') > 0) {
                v = numeral(numStr).value();
            } else {
                v = parseFloat(numStr);
            }
        }
        return v;
    }


    NumberParser.getInstance = function() {
        if( instance == null ) instance = new NumberParser();
        return instance;
    }


    return NumberParser.getInstance();

});