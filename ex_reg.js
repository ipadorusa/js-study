/**
 * 10000 => "10,000" 
 * @param {number, string} n
 */

const makecomma = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
