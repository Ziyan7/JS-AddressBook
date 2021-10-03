//Function to find number of contacts in the AddressBook
function countContacts(AddressBook){
    let total = AddressBook.reduce((total,contact) => {     //reduce method is used tp count total number of contacts in an Addressbook
        return total+1;
    },0)
    console.log(total);
}
module.exports = { countContacts };