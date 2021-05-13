/**
 * Optional chaining
 */


const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  }
};

const dogName = adventurer.cat?.name;
console.log(dogName);


/**
 * Nullish coalescing operator
 */


 const foo = null ?? 'default string';
 console.log(foo);
 // expected output: "default string"
 
 const baz = 0 ?? 42;
 console.log(baz);
 // expected output: 0
 
