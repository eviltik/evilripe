# ripe-extract
[![Build Status](https://travis-ci.org/eviltik/ripe-extract.svg?branch=master)](https://travis-ci.org/eviltik/ripe-extract)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Dependencies](https://david-dm.org/eviltik/ripe-extract.svg)](https://david-dm.org/eviltik/ripe-extract)

Extract all CIDR Ranges for the Organization you want.

It use https://github.com/RIPE-NCC/whois/wiki/WHOIS-REST-API under the wood.

Installation
------------
```
$ npm install -g ripe-extract
```

Usage
-----
```
# show me microsoft IP blocks
$ ripe-extract --cidr "msft"
167.220.236.0/22
167.220.240.0/22
13.64.0.0/10
[...]
213.199.128.0/20
```


