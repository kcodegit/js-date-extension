/**
 * Written by Kohei Ando 2018
 */

'use strict';

// imports


/**
 * Date class extension
 */
class DateTime extends Date {
  constructor(){
    super();
  }
  /**
   * returns time in a format given in the argument
   * @param { string } format_str
   * @returns { string }
   * @throws { Error }
   */
  format(format_str) {
    // write codes here
  
    return format_str;
  }
  
  /**
   * returns true if it's before the date given in the argument
   * if it's the same time this returns false
   * @param { Date } date 
   * @returns { boolean }
   * @throws { Error }
   */
  isBefore(date) {
    if (!(date instanceof Date)) throw new Error('Invalid Arguments. Must be a Date instance.');
    return this.getTime() - date.getTime() < 0;
  }
  
  /**
   * returns true if it's after the date given in the argument
   * if it's the same time this returns false
   * @param { Date } date 
   * @returns { boolean }
   * @throws { Error }
   */
  isAfter(date) {
    if (!(date instanceof Date)) throw new Error('Invalid Arguments. Must be a Date instance.');
    return this.getTime() - date.getTime() > 0;
  }

  /**
   * returns true if it's the same time
   * @param { object } date 
   * @returns { boolean }
   * @throws { Error }
   */
  equals(date) {
    if(arguments.length !== 1) throw new Error('Invalid Arguments.');
    return !(date instanceof Date) ? false : this.getTime() === date.getTime();
  }
}




module.exports = DateTime;