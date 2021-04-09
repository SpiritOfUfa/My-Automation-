function minValue(values){
  return +values.filter((el,i,arr) => i === arr.lastIndexOf(el)).sort((a,b) => a - b ).join('');
}
