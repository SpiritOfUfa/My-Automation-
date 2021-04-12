class Numbers{
    constructor(a){
      this.x = a;
    }
    set value123(a){
      this.x = a;
    }
    get abs(){
      return Math.abs(this.x);
    }
    get reverse(){
      return -this.x;
    }
    get round(){
      return Math.round(this.x);
    }
    get floor(){
      return Math.floor(this.x);
    }
    get ceil(){
      return Math.ceil(this.x);
    }
    pow(a){
      return Math.pow(this.x, a);
    }
    toFixed(a){
      return +this.x.toFixed(a);
    }
    toNumber(){
      this.x = Number(this.x);
    }
    get nan(){
      return isNan(this.x);
    }
    get sqrt(){
      return Math.sqrt(this.x);
    }
  }
  let num = new Numbers('12345.4563456');
  console.log(num);
  num.toNumber();
  console.log(num.x);
  console.log(num.reverse);
  console.log(num.round);
  console.log(num.floor);
  console.log(num.ceil);
  console.log(num.pow(2));
  console.log(num.toFixed(2));
  num.value = 5;
  console.log(num.x);
  let arr = [233.34, 332.44, '4325.5', '-43545'];
  let mynum = new Numbers();
  for(el of arr){
    mynum.value = el;
    mynum.toNumber();
    console.log(mynum.floor);
  }

  class String{
    constructor(a){
      this.x = a;
    }
    get length(){
      return this.x.length;
    }
    get index(){
      return this.x[2]
    }
    indexOf(a){
      return this.x.indexOf(a);
    }
    includes(a){
      return this.x.includes(a);
    }
    lastIndexOf(a){
      return this.x.lastIndexOf(a);
    }
     startsWith(a){
       return this.x.startsWith(a);
     }
    endsWith(a){
      return this.x.endsWith(a);
    }
     get toLowerCase(){
      return this.x.toLowerCase();
    }
    get toUpperCase(){
      return this.x.toUpperCase();
    }
    slice(a,b){
      return this.x.slice(a,b);
    }
    substring(a){
      return this.x.substring(a);
    }
    substr(a){
      return this.x.substr(a);
    }
    replace(a,b){
      return this.x.replace(a,b);
    }
    repeat(a){
      return this.x.repeat(a);
    }
    get trim(){
      return this.x.trim();
    }
     concat(a){
       return this.x.concat(a);
     }
    set fun(a){
     this.x = a ;
    }
  }
  let str = new String('I Love New York ')
  console.log(str.x);
  console.log(str.length);
  console.log(str.index);
  console.log(str.indexOf('N'));
  console.log(str.includes());
    console.log(str.endsWith());
  console.log(str.toLowerCase);
  console.log(str.toUpperCase);
  console.log(str.slice(0, 6));
  console.log(str.substring(7));
  console.log(str.substr(10));
   console.log(str.repeat(5));
  console.log(str.trim);
  
  console.log(str.x);