'use strict';

// imports
var DateTime = require('../DateTime');
// variables
var p = console.log;

var d1 = new DateTime();
var d2 = new DateTime();
p(d1.getTime());
p(d2.getTime());
p(d1.equals(d2));