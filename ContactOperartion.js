//Function to find number of contacts in the AddressBook
function countContacts(AddressBook){
    let total = AddressBook.reduce((total,contact) => {     //reduce method is used tp count total number of contacts in an Addressbook
        return total+1;
    },0)
    console.log(total);
}

//method to search persons contact in particular city or state
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

//method to count number of contacts based on city using reduce
function countCity(AddressBook){
  const count = AddressBook.reduce(function(acc,current){
    if(acc[current.city] )
      acc[current.city] = ++acc[current.city];
    else 
      acc[current.city] =1;
      return acc;
  },{});
  console.log(count);
};

//method to count number of contacts based on state using reduce
function countState(AddressBook){
  const count = AddressBook.reduce(function(acc,current){
    if(acc[current.state] )
      acc[current.state] = ++acc[current.state];
    else 
      acc[current.state] =1;
    return acc;
  },{});
  console.log(count);
};
module.exports = { countContacts ,searchPlace, countCity, countState};