/**
 * Written by Kohei 2018
 */

'use strict';

var p = console.log;


/**
 * Date class extension
 */
class DateTime extends Date {
  constructor(...args){
    // minus 1 from the int val represents the month
    if (arguments.length > 1) args[1] = args[1]-1;
    super(...args);
    this.lang = LANG.en;
  }

  /*
    custom functions
  */
  /**
   * set lang
   * @param { int } lang (enum LANG)
   * @throws { TypeError }
   */
  setLang(lang){
    if(!_isLANG(lang)) throw new TypeError('Invalid Arguments. Must be LANG.');
    this.lang = lang;
  }
  
  /**
   * returns true if it's before the date given in the argument
   * if it's the same time this returns false
   * @param { Date } date 
   * @returns { boolean }
   * @throws { TypeError }
   */
  isBefore(date) {
    if (!(date instanceof Date)) throw new TypeError('Invalid Arguments. Must be a Date instance.');
    return this.getTime() - date.getTime() < 0;
  }
  
  /**
   * returns true if it's after the date given in the argument
   * if it's the same time this returns false
   * @param { Date } date 
   * @returns { boolean }
   * @throws { TypeError }
   */
  isAfter(date) {
    if (!(date instanceof Date)) throw new TypeError('Invalid Arguments. Must be a Date instance.');
    return this.getTime() - date.getTime() > 0;
  }

  /**
   * returns true if it's the same time
   * @param { object } date 
   * @returns { boolean }
   * @throws { TypeError }
   */
  equals(date) {
    if(arguments.length !== 1) throw new TypeError('Invalid Arguments.');
    return !(date instanceof Date) ? false : this.getTime() === date.getTime();
  }

  /**
   * get the day string of target language given in the argument
   * if no target is specified, returns the default lang of the instance
   * @param { object } target_lang (enum LANG) optional
   * @returns { string }
   * @throws { TypeError }
   */
  getDayString(target_lang = this.lang) {
    if(!_isLANG(target_lang)) throw new TypeError('Invalid Arguments. Must be LANG.');
    return target_lang.weekdays[super.getDay()];
  }

  /**
   * get the month string of target language given in the argument
   * if no target is specified, returns the default lang of the instance
   * @param { object } target_lang (enum LANG) optional
   * @returns { string }
   * @throws { TypeError }
   */
  getMonthString(target_lang = this.lang) {
    if(!_isLANG(target_lang)) throw new TypeError('Invalid Arguments. Must be LANG.');
    return target_lang.months[super.getMonth()];
  }

  /*
    override
  */
  /**
   * returns a number representing the month
   *  1 ~ 12
   * @returns { int }
   */
  getMonth(){
    return super.getMonth()+1;
  }

  /**
   * returns time in a format given in the argument
   * @param { string } format_str
   * @returns { string }
   * @throws { TypeError }
   */
  toDateString(format_str) {
    // write codes here
    if(!(arguments.length)) return super.toDateString();


    return    
  }
}

// non-exported functions
var _isLANG = l => Object.keys(LANG).some(k => LANG[k] === l);

// enum
const LANG = Object.freeze({
  en : {
    toString: _ => 'English',
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
  },
  jp : {
    toString: _ => '日本語',
    weekdays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
  }
})

module.exports = { DateTime: DateTime, LANG: LANG };