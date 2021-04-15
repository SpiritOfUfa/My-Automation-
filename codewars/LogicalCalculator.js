function logicalCalc(array, op){
    if (op === 'AND'){
      return array.reduce((acc,el) => acc && el )
    }
    if (op === 'OR'){
      return array.reduce((acc,el) => acc || el )
    }
    if (op === 'XOR'){
      return array.reduce((acc,el) => acc !== el )
    }
  }