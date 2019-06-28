var Number = function (countrycode, values) {

  var _countrycode = countrycode;
  var _values = values;
  
  this.setCountrycode = function (countrycode) {
    _countrycode = countrycode;
  };
  
  this.getCountrycode = function () {
   return _countrycode;
  };

  this.getValues = function () {
   return _values;
  };
  
  this.setValues = function (number) {
   _values = number;
  };

};
