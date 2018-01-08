/**
 * unit test for DateTime fueled by Mocha & Chai
 * Written by Kohei 2018
 */

'use strict';

// imports
var chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  DateTime = require('../DateTime').DateTime,
  LANG = require('../DateTime').LANG;

// variables
var p = console.log;

describe('DateTime', function() {
  describe('constructor w/ no args', function() {
    it('should return a valid DateTime instance.', function(){
      var dt1 = new DateTime();
      assert.instanceOf(dt1, DateTime);
      expect(dt1.toDateString()).to.not.equal('Invalid Date');
    })
  }),
  describe('constructor w/ int milliseconds', function() {
    it('should return a valid DateTime instance.', function(){
      var dt2 = new DateTime(1515376699268);
      assert.instanceOf(dt2, DateTime);
      expect(dt2.toDateString()).to.not.equal('Invalid Date');
    })
  }),
  describe('constructor w/ dateString', function() {
    it('should return a valid DateTime instance.', function(){
      var dt3 = new DateTime("October 20, 1999 00:13");
      assert.instanceOf(dt3, DateTime);
      expect(dt3.toDateString()).to.not.equal('Invalid Date');
    })
  }),
  describe('constructor w/ int args', function() {
    it('should return a valid DateTime instance.', function(){
      var dt4 = new DateTime(98, 12, 13, 1);
      assert.instanceOf(dt4, DateTime);
      expect(dt4.toDateString()).to.not.equal('Invalid Date');
    }),
    it('should set a month exactly same as the number given in the second argument.', function(){
      var dt5 = new DateTime(98, 6, 13, 1);
      dt5.getMonth().should.equal(5);
    })
  })
})

