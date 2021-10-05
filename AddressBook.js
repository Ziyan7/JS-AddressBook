"use strict";
const ps = require("prompt-sync");
const prompt = ps(); // to take input from the terminal
const validate = require("./AddressBookValidation.js"); 
const BookOperations = require("./ContactOperartion"); 
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
    Function to add new contact and
    simultaniously validate the input
    */
    console.log("Select option ")
    let option = prompt("1.Add 2.Edit 3.Delete 4.Number of Contacts 5.Search by Place name") //to add the option from the terminal
    if(option ==1){
        insertContact();
    }

    function insertContact(){
        try {
            let firstName = prompt("Enter Your First Name: ");
            validate.firstNameValidation(firstName);
            let temp = checkDuplicate(firstName); //checking for existing contact
            if(temp == false){
                console.log("Contact Already Exist")
                return;
            }
            let lastName = prompt("Enter Your last Name: ");
            validate.lastNameValidation(lastName);
            let address = prompt("Enter Your address: ");
            validate.addressValidation(address);
            let city = prompt("Enter Your city Name: ");
            validate.cityValidation(city);
            let state = prompt("Enter Your state Name: ");
            validate.stateValidation(state);
            let zip = prompt("Enter Zip code: ");
            validate.zipValidation(zip);
            let phoneNumber = prompt("Enter Your Phone Number: ");
            validate.phoneValidation(phoneNumber);
            let email = prompt("Enter Your emailId: ");
            validate.emailValidation(email);
            AddressBook.push(new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email));//adding new contacts to the Addressbook array
            console.log(AddressBook);
        } catch (error) {
            console.error(error);
            insertContact();
            return;
        }
           
    }  
    /*funtion to check for the duplicates
    @param is used to chec the first in the addressbook
    */
    function checkDuplicate(firstName){
        let flag = true;
        AddressBook.forEach((contact)=> {
            if(contact.firstName == firstName)
                flag =false;
        });
        if(flag==false)
            return false;
            
        return true;
    };

    //Condition for editing the existing contacts
    if(option==2){
        if(AddressBook.length == 0) //checks if the Addressbook is empty
            console.log("Addressbook is empty. Please Add contacts to edit");
        else{
            let person = prompt("Enter the persons First name to edit in the contact: ");
            AddressBook.forEach((contact)=> { 
            if (person == contact.firstName){ //checks of the first name and input name matches to edit its details 
                contact.lastName = prompt("Enter Your last Name: ");
                contact.address = prompt("Enter Your Address: ");
                contact.city = prompt("Enter Your city Name: ");
                contact.state = prompt("Enter Your state Name: ");
                contact.zip = prompt("Enter Your zip code: ");
                contact.phoneNumber = prompt("Enter Your phone number: ");
                contact.email = prompt("Enter Your emailId: ");
            }})
        }
        console.log(AddressBook);
    }

    if(option==3){
        if(AddressBook.length == 0) //checks if the Addressbook is empty
            console.log("Addressbook is empty");
        else{
            let person = prompt("Enter the persons First name to delete the info from the contacts: ");
            AddressBook.forEach((contact)=> { 
                if (person == contact.firstName){
                    AddressBook.pop(contact);
                }
                else{
                    console.log("Info doesn't exist");
                }
            })
        }
        console.log(AddressBook);
    }

    if(option==4){
        BookOperations.countContacts(AddressBook);
        console.log(AddressBook);
    }
    if(option==5){
        let place = prompt("Enter city or place name");
        BookOperations.searchPlace(place,AddressBook);
    }
}
