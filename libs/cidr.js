require('sanic.js').changeMyWorld();
const request = require('request');
const rangecalc = require('rangecalc');
const Netmask = require('netmask').Netmask;

function fetch(query, callback) {

    // http://rest.db.ripe.net/search.json?query-string=google&type-filter=inetnum&flags=resource

    // because rest.db.ripe is playing with get variable with the same name,
    // we can not use qs requestjs object
    let queryString = "type-filter=inetnum&flags=no-filtering&flags=resource&query-string="+encodeURI(query);

    let options = {
        method: 'get',
        json: true,
        url: 'http://rest.db.ripe.net/search.json?'+queryString
    };

    const onResult = function (err, response, body) {

        let cidrs = [];
        let range;
        let mask;
        let cidr;

        if (err) {
            return callback(err);
        }

        if (!body.objects) {
            return callback(new Error('Sorry, no result for query "'+query+'"'));
        }

        if (!body.objects.object) {
            return callback(new Error('Strange result, please open a bug, query = "'+query+'"'));
        }

        body.objects.object.forEach((obj) => {
            if (
                obj['primary-key'] &&
                obj['primary-key'].attribute &&
                obj['primary-key'].attribute[0] &&
                obj['primary-key'].attribute[0].value &&
                obj['primary-key'].attribute[0].value.match(/^[0-9\. \-]+$/)
            ) {

                range = obj['primary-key'].attribute[0].value.split(' - ');
                mask = rangecalc.getCIDR(range[0], range[1]);
                cidr = range[0] + '/' + mask;
                cidrs.push(cidr);
            }
        });

        callback && callback(null, cidrs);
    };

    request(options, onResult);
}

function stats(cidrs) {
    let count = 0;
    cidrs.forEach(cidr=> {
        let block = new Netmask(cidr);
        count+=block.size;
    });
    return count;
}

module.exports = {
    fetch:fetch,
    stats:stats
};
