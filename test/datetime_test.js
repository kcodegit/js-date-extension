'use strict';

// imports
var DateTime = require('../DateTime').DateTime;
var LANG = require('../DateTime').LANG;
// variables
var p = console.log;

var d1 = new DateTime();
var d2 = new DateTime(1988,5,14);
p(d1.getTime());
p(d2.getFullYear());
d2.setLang(LANG.jp);
p(d2.getDay(LANG.en))
p(d2.getDay())

p(d1.equals(d2));