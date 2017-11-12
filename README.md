# ripe-extract

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
