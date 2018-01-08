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
  DT = require('../DateTime'),
  DateTime = DT.DateTime,
  LANG = DT.LANG;

// variables
var p = console.log;

describe('DateTime', function() {
  // constructor
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
      expect(dt5.getMonth()).to.equal(6);
    })
  }),

  // enum LANG
  describe('LANG', function() {
    it('should be the frozen.', function(){
      expect(LANG).to.be.frozen;
    })
  }),

  // setLang()
  describe('setLang', function() {
    var dt = new DateTime();
    it('should return the default lang of en.', function(){
      expect(dt.lang).to.deep.equal(LANG.en);
    }),
    it('should set the lang to jp.', function(){
      dt.setLang(LANG.jp);
      expect(dt.lang).to.deep.equal(LANG.jp);
    }),
    it('should throw TypeError with invalid arguments.', function(){
      expect(() => { dt.setLang(12234)} ).to.throw(TypeError);
      expect(() => { dt.setLang('foo', 'bar')} ).to.throw(TypeError);
    })
  }),

  // getDateString()
  describe('toDateString', function() {
    it('should return the date string in the default format w/o argument.', function(){
      var dt = new DateTime('October 20, 1999 00:13');
      expect(dt.toDateString()).to.deep.equal('Wed Oct 20 1999');
    })
    // @TODO: and more format tests here !!!!

  }),

  // isBefore()
  describe('isBefore', function() {
    var dt1 = new DateTime('December 13, 2000 00:13');
    var dt2 = new DateTime('December 13, 2000 00:14');
    var dt3 = new DateTime('December 13, 2000 00:14');
    it('should return true if it has a time val younger than the one of the argument.', function(){
      expect(dt1.isBefore(dt2)).to.be.true;
      expect(dt2.isBefore(dt1)).to.be.false;
      expect(dt2.isBefore(dt3)).to.be.false;
    }),
    it('should throw TypeError with invalid arguments.', function(){
      expect(() => { dt1.isBefore(2000,12,13) } ).to.throw(TypeError);
      expect(() => { dt1.isBefore('December 13, 2000 00:14')} ).to.throw(TypeError);
    })
  }),

  // isAfter()
  describe('isAfter', function() {
    var dt1 = new DateTime('December 13, 2000 00:13');
    var dt2 = new DateTime('December 13, 2000 00:14');
    var dt3 = new DateTime('December 13, 2000 00:14');
    it('should return true if it has a time val older than the one of the argument.', function(){
      expect(dt1.isAfter(dt2)).to.be.false;
      expect(dt2.isAfter(dt1)).to.be.true;
      expect(dt2.isAfter(dt3)).to.be.false;
    }),
    it('should throw TypeError with invalid arguments.', function(){
      expect(() => { dt1.isAfter(2000,12,13) } ).to.throw(TypeError);
      expect(() => { dt1.isAfter('December 13, 2000 00:14')} ).to.throw(TypeError);
    })
  }),

  // equals()
  describe('equals', function() {
    var dt1 = new DateTime('December 13, 2000 00:13');
    var dt2 = new DateTime('December 13, 2000 00:14');
    var dt3 = new DateTime('December 13, 2000 00:14');
    it('should return true if the millisecond values are equal.', function(){
      expect(dt1.equals(dt2)).to.be.false;
      expect(dt2.equals(dt3)).to.be.true;
    }),
    it('should return false with arguments other than DateTime instance.', function(){
      expect(dt1.equals('woo')).to.be.false;
      expect(dt1.equals(1234)).to.be.false;
    }),
    it('should throw TypeError with no argument.', function(){
      expect(() => { dt1.equals() } ).to.throw(TypeError);
    })
  }),

  // getDayString()
  describe('getDayString', function() {
    var dt = new DateTime('December 13, 2000 00:13');
    it('should return a weekday string in the default language w/o an argument.', function(){
      expect(dt.getDayString()).to.deep.equal('Wednesday');
    }),
    it('should return a weekday string in the specified language in the argument.', function(){
      expect(dt.getDayString(LANG.jp)).to.deep.equal('水曜日');
    }),
    it('should throw TypeError with invalid argument.', function(){
      expect(() => { dt.getDayString('jp') } ).to.throw(TypeError);
    })
  }),

  // getMonthString()
  describe('getMonthString', function() {
    var dt = new DateTime('December 13, 2000 00:13');
    it('should return a month string in the default language w/o an argument.', function(){
      expect(dt.getMonthString()).to.deep.equal('Dec');
    }),
    it('should return a month string in the specified language in the argument.', function(){
      expect(dt.getMonthString(LANG.jp)).to.deep.equal('十二月');
    }),
    it('should throw TypeError with invalid argument.', function(){
      expect(() => { dt.getMonthString('jp') } ).to.throw(TypeError);
    })
  })



})

