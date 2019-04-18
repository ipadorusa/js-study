

const log = console.log;
let 참가자 = ['billyBobs', 'Ggg', 'jung', 'asda', 'aaaaaaaaaaaaaaaaaaaa1404', 'asda', 'bhavin111', 'sarewqr', 'shubhamoiuhg', 'testGirish20', 'sawqweqwe', 'billyBobs'];
let people = ['billyBobs', 'Ggg', 'jung', 'billyBobs', 'aaaaaaaaaaaaaaaaaaaa1404', 'bhavin111', 'asda', 'sarewqr', 'shubhamoiuhg', 'testGirish20', 'sawqweqwe', 'billyBobs'];
let a = {};

people.forEach(key => {  
  a[key] = a[key] ? a[key] +1 : 1
})




let d = people.reduce((obj, t) => (obj[t] = obj[t] ? obj[t]+1 : 1, obj),{});

/* function solution(arr) {
  arr.filter((val, idx) => log("val, idx", val, idx, val != arr[idx + 1]))
} */
