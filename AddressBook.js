"use strict";
const ps = require("prompt-sync");
const prompt = ps(); // to take input from the terminal
const validate = require("./AddressBookValidation.js"); 

class Contact{
    //property
    firstName; lastName; address; city; state; zip; phoneNumber; email;

    //constructor
    constructor (firstName,lastName,address,city,state,zip,phoneNumber,email){
        
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    toString() {
        return this.firstName +  this.lastName + this.address + this.city + this.state + this.zip + this.phoneNumber + this.email ;
    }
}
/*
Function to add new contact
simultaniously validate the input
*/
insertContact();
function insertContact(){
    let firstName = prompt("Enter Your First Name: ");
    try{
        validate.firstNameValidation(firstName);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }
    let lastName = prompt("Enter Your last Name: ");
    try{
        validate.lastNameValidation(lastName);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }
    
    let address = prompt("Enter Your address: ");
    try{
        validate.addressValidation(address);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }
   
    let city = prompt("Enter Your city Name: ");
    try{
        validate.cityValidation(city);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }
    
    let state = prompt("Enter Your state Name: ");
    try{
        validate.stateValidation(state);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }
    
    let zip = prompt("Enter Zip code: ");
    try{
        validate.zipValidation(zip);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }

    let phoneNumber = prompt("Enter Your Phone Number: ");
    try{
        validate.phoneValidation(phoneNumber);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }

    let email = prompt("Enter Your emailId: ");
    try{
        validate.emailValidation(email);
    }
    catch (error) {
        console.log(error);
        insertContact();//if error occurs call the function again
    }
}
    



    