"use strict";
const ps = require("prompt-sync");
const prompt = ps(); // to take input from the terminal
const validate = require("./AddressBookValidation.js"); 
let AddressBook = new Array();

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
}

while(true){
    /*
    Function to add new contact
    simultaniously validate the input
    */
    console.log("Select option ")
    let option = prompt("1.Add ") //to add the option from the terminal
    if(option ==1){
        insertContact();
    }

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
        AddressBook.push(new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email)); //adding new contacts to the Addressbook array
    }

    console.log(AddressBook);
}

    



    