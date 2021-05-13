/**
 * Number formatting * 
 * @param {number, string} n
 */

const makecomma = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
