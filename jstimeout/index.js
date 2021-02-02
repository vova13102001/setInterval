'use strict'
let i = 1;
let timerId = setInterval(() =>{
  console.log(i++);
  if(i >20){
    clearInterval(timerId);
    console.timeEnd('1')
  }
}, 100);


console.time('1')