var counter = (function(){
    var count = 0;
  return function(num){
    count = num !== undefined ? num : count;
    return count++;
  }
}());

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(10));
console.log(counter());
console.log(counter());

var greet = function(){
  return 'Hi! My name is ' + this.name + this.age;
}

var person = {
  name: 'John',
  greet: greet,
   _age: 20,
  get age(){
    return this._age;
  },
  set age(value){
    this._age = value;
  }
}

var anotherPerson = {
  name: 'Bob',
  greet: greet,
   _age: 25,
  get age(){
    return this._age;
  },
  set age(value){
    this._age = value;
  }
}

console.log(person.greet());
console.log(anotherPerson.greet());

