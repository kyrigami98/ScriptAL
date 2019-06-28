var Person = function (firstname, lastname, age, number) {
  var _firstName = firstname;
  var _lastName = lastname;
  var _age = age;
  var _number = number;
  
  this.setAge = function (age) {
    _age = age;
  };
  
  this.getAge = function () {
   return _age;
  };
  
  this.setNum = function (number) {
   _number = number;
  };
  
  this.getNum = function () {
   return _number;
  };
  
  var getToStringValue = function () {
   return ["Hi ! I'm ", _firstName, " ", _lastName, " and I'm ", _age, " year old.", " My number is ",_number ].join("");
  };
  
  this.toString = function () {
    return getToStringValue();
  };

};

var yann = new Person("Yannick", "Comte", 0, 0);
yann.setAge(28);
yann.setNum(6585855);
//yann.getToStringValue(); // Doesn't work because it's private !
yann.toString(); // It's good because it's public ;)