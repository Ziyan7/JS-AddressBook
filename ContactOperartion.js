//Function to find number of contacts in the AddressBook
function countContacts(AddressBook){
    let total = AddressBook.reduce((total,contact) => {     //reduce method is used tp count total number of contacts in an Addressbook
        return total+1;
    },0)
    console.log(total);
}

//method to search person contact in particular city or state
function searchPlace(place, AddressBook){

    function check(contact){
      console.log(place);
      console.log(contact.city);
      if(contact.city == place || contact.state == place)
        return true;
    }
    const temp = AddressBook.filter(check);
    console.log(temp);
  };
module.exports = { countContacts ,searchPlace};