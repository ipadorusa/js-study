import { log } from './help';

let log = console.log;
let arr = [ "lee", "kim", "hong", "hong", "lee", "lee", "hong"];


let d = arr.reduce((obj, t) => 
  (obj[t] = obj[t] ? obj[t]+1 : 1, obj),{});
log(d)

