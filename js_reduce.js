

const log = console.log;
let 참가자 = ['billyBobs', 'Ggg', 'jung', 'asda', 'aaaaaaaaaaaaaaaaaaaa1404', 'asda', 'bhavin111', 'sarewqr', 'shubhamoiuhg', 'testGirish20', 'sawqweqwe', 'billyBobs'];
let people = ['billyBobs', 'Ggg', 'jung', 'billyBobs', 'aaaaaaaaaaaaaaaaaaaa1404', 'bhavin111', 'asda', 'sarewqr', 'shubhamoiuhg', 'testGirish20', 'sawqweqwe', 'billyBobs'];
const test1 = [1, 1, 3, 3, 0, 1, 1];
const test2 = [4, 4, 4, 3, 3] ;
const test3 = 'a1234';
const test4 = '1234';
const test5 = '}{}{}';
let a = {};

people.forEach(key => {  
  a[key] = a[key] ? a[key] +1 : 1
})

function sol() {
  var dic = completion.reduce((obj, t)=> (obj[t]= obj[t] ? obj[t]+1 : 1 , obj) ,{});
return participant.find(t=> {
    if(dic[t])
        dic[t] = dic[t]-1;
    else 
        return true;
});

}

const log = console.log;
let participant = ['billyBobs', 'Ggg', 'jung', 'billyBobs', 'aaaaaaaaaaaaaaaaaaaa1404', 'bhavin111', 'asda', 'sarewqr', 'shubhamoiuhg', 'testGirish20'];
let completion = ['billyBobs', 'Ggg', 'jung', 'billyBobs', 'aaaaaaaaaaaaaaaaaaaa1404', 'bhavin111', 'asda', 'sarewqr', 'shubhamoiuhg'];


function sol(participant, completion) {
  
  var dic = completion.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1
    return acc
  },{})

  return participant.find(t => {
    if(dic[t]) {
      dic[t] = dic[t] - 1
    }else {
      return true
    }
  })
}


sol(participant, completion);




/* function solution(arr) {
  arr.filter((val, idx) => log("val, idx", val, idx, val != arr[idx + 1]))
} */


/* function solution(str) {
  const regex = /^\d{6}$|^\d{4}$/;  
  return regex.test(str);
}
log(solution(test5)); */


/* function solution(arr) {
    return arr.filter((val,index) => val != arr[index+1]);
}

log(solution(test1)); */



/* function solution(n) {
  var result = '수박';
  return result = result.repeat(n-1).substring(0, n);
} */