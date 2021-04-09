let folderList = [];

function sol(folderName) {
  let count = folderList.length + 1;
  let word = 'New folder';
  let answer = '';
  
  if(folderName[0] !== word) return answer = folderName;
  if(folderName[0] === word && count === 1) answer = word;
  if(folderName[0] === word && count > 1) answer = folderName + ' (' + count + ')';
  
  folderList.push(answer)
  return answer;
}

sol(['kim']);
sol(['New folder']);
sol(['New folder']);
sol(['New folder']);
