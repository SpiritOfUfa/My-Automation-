function pendulum(values) {
    let min = Math.min(...values);
     values.splice(values.indexOf(min) , 1);
     values.sort((a,b) => a - b );
     let rigthArr = values.filter((el,i)=> i % 2 === 0);
     let leftArr = values.filter((el,i) => i % 2 !== 0).reverse()
     return [...leftArr , min, ...rigthArr]
   }