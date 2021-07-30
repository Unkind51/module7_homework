const person = {
  city: "Saint-P",
  age: 33,
  country: "Russia"
}

const checkProperty = (str, obj) => {
  
  return obj.hasOwnProperty(str);
  
}

console.log( checkProperty('age', person) );
console.log( checkProperty('education', person) );