const program = require('commander');
const ripeCidr = require('./libs/cidr');

let query = '';

program
    .arguments('<query>')
    .action(function (q) {
        query = q;
    })
    .option('--cidr', 'extract cidr from results')
    .option('--cidr-stats', 'show IPv4 count from cidr result')
    .parse(process.argv);

if (!query) {
    program.outputHelp();
    process.exit();
}

if (program.cidr) {

    ripeCidr.fetch(query, (err, r) => {

        if (err) {
            console.log(err.message);
            process.exit(0);
            return;
        }

        console.log(r.join('\n'));

        if (program.cidrStats) {
            let ipCount = ripeCidr.stats(r);
            console.log('%s IPv4',ipCount);
        }
    });

}
