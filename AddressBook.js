"use strict";
const prompt = require("prompt-sync")(); // to take input from the terminal
let Addressbook = new Array();
class Contact{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

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
let firstName = prompt("Enter Your First Name: ");
let lastName = prompt("Enter Your last Name: ");
let address = prompt("Enter Your address: ");
let city = prompt("Enter Your city Name: ");
let state = prompt("Enter Your state Name: ");
let zip = prompt("Enter Zip code: ");
let phoneNumber = prompt("Enter Your Phone Number: ");
let email = prompt("Enter Your emailId: ");
Addressbook.push(new Contact(firstName,lastName,address,city,state,zip,phoneNumber,email));
Addressbook.forEach(value => console.log(value));

    