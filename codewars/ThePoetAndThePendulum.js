function countSalutes(hallway) {
  let s = 0;
  let arr = hallway.split('');
  for(let i = 0; i<arr.length; i++){
   if(arr[i] === '>') {
     s += arr.filter((el,j) => el === '<' && j > i).length;
   }
  }
  return 2 * s;
}