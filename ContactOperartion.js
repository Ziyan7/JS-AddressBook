const ps = require("prompt-sync");
const prompt = ps(); // to take input from the terminal
//Function to find number of contacts in the AddressBook
function countContacts(AddressBook) {
  let total = AddressBook.reduce((total, contact) => {
    //reduce method is used tp count total number of contacts in an Addressbook
    return total + 1;
  }, 0);
  console.log(total);
}

//method to search persons contact in particular city or state
function searchPlace(place, AddressBook) {
  function check(contact) {
    console.log(place);
    console.log(contact.city);
    if (contact.city == place || contact.state == place) return true;
  }
  const temp = AddressBook.filter(check);
  console.log(temp);
}

//method to count number of contacts based on city using reduce
function countCity(AddressBook) {
  const count = AddressBook.reduce(function (acc, current) {
    if (acc[current.city]) acc[current.city] = ++acc[current.city];
    else acc[current.city] = 1;
    return acc;
  }, {});
  console.log(count);
}

//method to count number of contacts based on state using reduce
function countState(AddressBook) {
  const count = AddressBook.reduce(function (acc, current) {
    if (acc[current.state]) acc[current.state] = ++acc[current.state];
    else acc[current.state] = 1;
    return acc;
  }, {});
  console.log(count);
}

//sort the contacts in the list based on Name
function sortByName(AddressBook) {
  let first, second;
  const display = AddressBook.sort((a, b) => {
    first = a.firstName.toLowerCase();
    second = b.firstName.toLowerCase();
    if (first < second) {
      return -1;
    }
    if (first > second) {
      return 1;
    }
  });
  console.log(display);
}

//sort the contacts in the list based on city or name
function sortByCityOrName(AddressBook) {
  let choice = prompt("1.Sort by City 2.Sort by State");
  let first, second;
  switch (Number(choice)) {
    case 1:
      const sortCity = AddressBook.sort((a, b) => {
        first = a.city.toLowerCase();
        second = b.city.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
      });
      console.log(sortCity);
      break;
    case 2:
      const sortState = AddressBook.sort((a, b) => {
        first = a.state.toLowerCase();
        second = b.state.toLowerCase();
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
      });
      console.log(sortState);
      break;
  }
}

module.exports = {
  countContacts,
  searchPlace,
  countCity,
  countState,
  sortByName,
  sortByCityOrName,
};
