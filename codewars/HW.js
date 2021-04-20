let obj = {
  arr: [],
  init(array) {
    this.arr = [...array];
  },
  print() {
    console.log(this.arr);
  },

  sum() {
    return this.arr.reduce((acc, el) => acc + el, 0);
  },
  min() {
    return Math.min(...this.arr);
  },
  sortPrint() {
    this.arr.sort((a, b) => a - b);
    this.print();
  },
};
let myarray = [3, 2, 1];
obj.init(myarray);
obj.print();
// console.log(obj.arr)
console.log(obj.sum());
console.log(obj.min());
obj.sortPrint();
