// Given a list of digits, return the smallest number that could be formed from these digits,using the digits only once (ignore duplicates)
function minValue(values){
    return +values.filter((el,i,arr) => i === arr.lastIndexOf(el)).sort((a,b) => a - b ).join('');
}
//my comment