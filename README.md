# evilripe
[![Build Status](https://travis-ci.org/eviltik/evilripe.svg?branch=master)](https://travis-ci.org/eviltik/evilripe)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Dependencies](https://david-dm.org/eviltik/evilripe.svg)](https://david-dm.org/eviltik/evilripe)

Extract all CIDR Ranges for the Organization you want.

It use https://github.com/RIPE-NCC/whois/wiki/WHOIS-REST-API under the wood.

Installation
------------
```
$ npm install -g evilripe
```

Usage
-----
```
# show me microsoft IP blocks
$ evilripe --cidr "msft"
167.220.236.0/22
167.220.240.0/22
13.64.0.0/10
[...]
213.199.128.0/20
```
