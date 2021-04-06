const wrap = document.getElementById('app');
const fruits = ['바나나', '사과', '배', '딸기', '귤'];

/*
const buildListElem = list => {
	const ul = document.createElement('ul')	;
  for (let i=0;i<list.length;i++) {
  	const li = document.createElement('li');
    li.innerText = list[i];
    ul.append(li)
  }
  return ul
}


const buildListElem = list => {
  const ul = document.createElement('ul')
  list.forEach(value => {
    const li = document.createElement('li')
    li.innerText = value
    ul.append(li)
  })
  return ul
}


const buildListElem = list => {
	return list.reduce((ul, value) => {
  	const li = document.createElement('li');
    li.innerText = value
    ul.append(li)
    return ul
  }, document.createElement('ul'))
  
}
*/
const list = buildListElem(fruits);
wrap.append(list)
