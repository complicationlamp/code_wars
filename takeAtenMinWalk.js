// my solution 
function isValidWalk(walk) {
  //insert brilliant code here
  let y=0;
  let x =0;

  for(let i of walk){
    if(i !='n'&& i !='s'&& i !='e' && i !='w'){return "not valid input"}
    else if(i=='n'){y++}
    else if(i=='s'){y--}
    else if(i=='e'){x++}
    else{x--}
    // console.log('x:',x, 'y:', y );
  }

  return (walk.length ==10 && x==0 && y==0?true:false)
}



// console.log(isValidWalk(['w']))
//true

