'use strict';

/**
 * test for the database client class
 */

// imports and vars
var chai = require('chai');
var assert = chai.assert,
  expect = chai.expect,
  should = chai.should(),
  p = console.log;

var DT = require('../src/DateTime');

describe('DateTime', function(){
  describe('constructor', function(){
    it('should return a DateTime instance', function(){
      expect(new DT.DateTime()).to.be.instanceof(DT.DateTime);
    })
  })
  describe('setLang', function(){
    var d = new DT.DateTime();
    it('should set the lang', function(){
      d.setLang(DT.LANG.jp);
      expect(d.lang).to.equal(DT.LANG.jp);
      d.setLang(DT.LANG.en);
      expect(d.lang).to.equal(DT.LANG.en);
    })
    it('should throw TypeError with not LANG object', function(){
      expect(() => d.setLang({ bar: 'foo' })).to.throw(TypeError);
    })
  })
  describe('equals', function(){
    var d = new DT.DateTime(2018,1,1);
    it('should return true', function(){
      expect(d.equals(new DT.DateTime(2018,1,1))).to.be.true;
    })
    it('should return false', function(){
      expect(d.equals(new DT.DateTime(2017,1,1))).to.be.false;
      expect(d.equals('whats up?')).to.be.false;
    })
    it('should throw TypeError with no argument', function(){
      expect(() => d.equals()).to.throw(TypeError);
    })
  })
  describe('isValid', function(){
    it('should return true', function(){
      expect(new DT.DateTime(2018,1,1).isValid()).to.be.true;
    })
    it('should return false', function(){
      expect(new DT.DateTime('whatever').isValid()).to.be.false;
    })
  })
  describe('isBefore', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should return true', function(){
      expect(d.isBefore(new DT.DateTime(2018,2,1))).to.be.true;
    })
    it('should return false', function(){
      expect(d.isBefore(new DT.DateTime(2017,1,1))).to.be.false;
    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => d.isBefore('not a datetime')).to.throw(TypeError);
    })
  })
  describe('isAfter', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should return true', function(){
      expect(d.isAfter(new DT.DateTime(2017,1,1))).to.be.true;
    })
    it('should return false', function(){
      expect(d.isAfter(new DT.DateTime(2018,1,1))).to.be.false;
    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => d.isAfter('not a datetime')).to.throw(TypeError);
    })
  })
  describe('isPast', function(){
    it('should return true', function(){
      expect(new DT.DateTime(1970,1,1).isPast()).to.be.true;
    })
    it('should return false', function(){
      expect(new DT.DateTime(2070,1,1).isPast()).to.be.false;
    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => new DT.DateTime(1970,1,1).isPast('wrong argument')).to.throw(TypeError);
    })
  })
  describe('isFuture', function(){
    it('should return true', function(){
      expect(new DT.DateTime(2070,1,1).isFuture()).to.be.true;
    })
    it('should return false', function(){
      expect(new DT.DateTime(1970,1,1).isFuture()).to.be.false;
    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => new DT.DateTime(1970,1,1).isFuture('wrong argument')).to.throw(TypeError);
    })
  })
  describe('getSecondsString', function(){
    it('should return in the one digit format', function(){
      var d = new DT.DateTime(2018,1,1,3,33,3)
      expect(d.getSecondsString()).to.be.lengthOf(1);
      expect(d.getSecondsString(1)).to.be.lengthOf(1);
    })
    it('should return in the two digit format', function(){
      var d = new DT.DateTime(2018,1,1,3,33,33)
      expect(d.getSecondsString(2)).to.be.lengthOf(2);
    })
    it('should throw TypeError with a wrong argument', function(){
      var d = new DT.DateTime(2018,1,1,3,33,33)
      expect(() => d.getSecondsString(3)).to.throw(TypeError);
      expect(() => d.getSecondsString('ss')).to.throw(TypeError);
    })
  })
  describe('getMinutesString', function(){
    it('should return in the one digit format', function(){
      var d = new DT.DateTime(2018,1,1,3,3)
      expect(d.getMinutesString()).to.be.lengthOf(1);
      expect(d.getMinutesString(1)).to.be.lengthOf(1);
    })
    it('should return in the two digit format', function(){
      var d = new DT.DateTime(2018,1,1,3,33)
      expect(d.getMinutesString(2)).to.be.lengthOf(2);
    })
    it('should throw TypeError with a wrong argument', function(){
      var d = new DT.DateTime(2018,1,1,3,33)
      expect(() => d.getMinutesString(3)).to.throw(TypeError);
      expect(() => d.getMinutesString('ss')).to.throw(TypeError);
    })
  })
  describe('getHoursString', function(){
    it('should return in the one digit format', function(){
      var d = new DT.DateTime(2018,1,1,3)
      expect(d.getHoursString()).to.be.lengthOf(1);
      expect(d.getHoursString(1)).to.be.lengthOf(1);
    })
    it('should return in the two digit format', function(){
      var d = new DT.DateTime(2018,1,1,15)
      expect(d.getHoursString(2)).to.be.lengthOf(2);
    })
    it('should throw TypeError with a wrong argument', function(){
      var d = new DT.DateTime(2018,1,1,15)
      expect(() => d.getHoursString(3)).to.throw(TypeError);
      expect(() => d.getHoursString('ss')).to.throw(TypeError);
    })
  })
  describe('getDateString', function(){
    it('should return in the one digit format', function(){
      var d = new DT.DateTime(2018,1,1)
      expect(d.getDateString()).to.be.lengthOf(1);
      expect(d.getDateString(1)).to.be.lengthOf(1);
    })
    it('should return in the two digit format', function(){
      var d = new DT.DateTime(2018,1,11)
      expect(d.getDateString(2)).to.be.lengthOf(2);
    })
    it('should throw TypeError with a wrong argument', function(){
      var d = new DT.DateTime(2018,1,11)
      expect(() => d.getDateString(3)).to.throw(TypeError);
      expect(() => d.getDateString('ss')).to.throw(TypeError);
    })
  })
  describe('getDayString', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should return in English', function(){
      expect(d.getDayString(DT.LANG.en)).to.be.a('string');
      expect(d.getDayString(DT.LANG.en)).to.equal('Monday');
    })
    it('should return in Japanese', function(){
      expect(d.getDayString(DT.LANG.jp)).to.be.a('string');
      expect(d.getDayString(DT.LANG.jp)).to.equal('月曜日');
    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => d.getDayString({ because: 'not LANG' })).to.throw(TypeError);
    })
  })
  describe('getMonthString', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should return in English', function(){
      expect(d.getMonthString(DT.LANG.en)).to.be.a('string');
      expect(d.getMonthString(DT.LANG.en)).to.equal('Jan');
    })
    it('should return in Japanese', function(){
      expect(d.getMonthString(DT.LANG.jp)).to.be.a('string');
      expect(d.getMonthString(DT.LANG.jp)).to.equal('一月');
    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => d.getMonthString({ because: 'not LANG' })).to.throw(TypeError);
    })
  })

  // override methods
  describe('getMonth', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should return the actual month in number', function(){
      expect(d.getMonth()).to.be.a('number');
      expect(d.getMonth()).to.equal(1);
    })
  })
  describe('setMonth', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should set the actual month in number', function(){
      d.setMonth(2)
      expect(d.getMonth()).to.be.a('number');
      expect(d.getMonth()).to.equal(2);
    })
  })

  describe('toString', function(){
    var d = new DT.DateTime(2018,1,1)
    it('should return the given format', function(){
      expect(d.toString('yyyy-MM-dd HH:mm:ss:lll')).to.be.a('string');
      expect(d.toString('yyyy-MM-dd HH:mm:ss:lll')).to.equal('2018-1-1 00:00:00:0');
      expect(d.toString('[yyyy-MM-dd HH:mm:ss:lll]')).to.equal('[2018-1-1 00:00:00:0]');
      expect(d.toString('{yyyy-MM-dd HH:mm:ss:lll}')).to.equal('{2018-1-1 00:00:00:0}');

    })
    it('should throw TypeError with a wrong argument', function(){
      expect(() => d.toString('THESE ARE NOT SUPPORTED')).to.throw(TypeError);
    })
  })
});