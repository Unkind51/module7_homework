obj = {
    a: 1,
    b: 2
  }
  function getValue(obj) {
    
    const newObj = Object.create(obj); 
    newObj.c = 3
    newObj.d = 4
    
    for (let key in newObj) {
      if (newObj.hasOwnProperty(key)) {
        console.log(`Ключ - ${key}, значение - ${newObj[key]}`);
      }
    }
  }
    
  
  
  getValue(obj)