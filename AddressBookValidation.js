//validation of first name using ragex pattern
let firstNameValidation = (firstName) => {
    let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
    if (regex.test(firstName)) 
        return true;
    else 
        throw "Enter valid first Name";
  };

  //validation of Last name using ragex pattern
  let lastNameValidation = (lastName) => {
    let regex = RegExp("^[A-Z][a-zA-Z]{2,}");
    if (regex.test(lastName)) 
        return true;
    else 
        throw "Enter valid last Name";
  };

  //validation of address using ragex pattern
  let addressValidation = (address) => {
    let regex = RegExp("^[a-zA-Z]{4,}");
    if (regex.test(address)) 
        return true;
    else 
        throw "Enter valid address";
  };

  //validation of city name using ragex pattern
  let cityValidation = (city) => {
    let regex = RegExp("^[a-zA-Z]{4,}");
    if (regex.test(city)) 
        return true;
    else 
        throw "Enter valid city name";
  };

  //validation of state name using ragex pattern
  let stateValidation = (state) => {
    let regex = RegExp("^[a-zA-Z]{4,}");
    if (regex.test(state)) 
        return true;
    else 
        throw "Enter valid state name";
  };

  //validation of zip code using ragex pattern
  let zipValidation = (zip) => {
    let regex = RegExp("^[0-9]{5}[-][0-9]{5}$");
    if (regex.test(zip)) 
        return true;
    else 
        throw "Enter valid zip code";
  };

  //validation of Phone Number using ragex pattern
  let phoneValidation = (phoneNumber) => {
    let regex = RegExp("^91 [0-9]{10}$");
    if (regex.test(phoneNumber)) 
        return true;
    else 
        throw "Enter valid mobile number";
  };

   //validation of email using ragex pattern
  let emailValidation = (email) => {
    let regex = RegExp("^[a-zA-Z0-9-_+]+(\\.?[a-zA-Z0-9-_]+)@[a-zA-Z0-9-_]+\\.[a-zA-Z]{2,}(\\.?[a-zA-Z-_]+)$");
    if (regex.test(email)) 
        return true;
    else 
        throw "Enter valid EmailId";
  };
  module.exports = {
    firstNameValidation, lastNameValidation, addressValidation, cityValidation, stateValidation, zipValidation, phoneValidation, emailValidation
  };