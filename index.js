
function writeCards(names, event) {
    const namesArr = [];
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    debugger;
  
  namesArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

  }
  return namesArr;
}
function countDown(integer){
  while(integer >= 0){
    console.log(integer);
    integer--;
  } 
}

