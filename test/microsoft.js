const tap = require('tap');
const ripeCidr = require('../libs/cidr');

tap.test('Microsoft (msft)',function(t) {
    ripeCidr.fetch('msft', (err, r) => {

        t.equal(err,null,'should not return an error');

        let ipCount = ripeCidr.stats(r);

        t.equal(ipCount, 50888192, "should return 50888192 IPv4 (nov 2017)");
        t.end();

    });
});
