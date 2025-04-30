//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

const array = ['hello Jo', 'fish', 'birmingham', 'periodic table', 'phone'];
function checkLength(arr) {
    const filtered = arr.filter(item => item.length > 6);
    return filtered.every(item => item.length < 10);
  }
  console.log(checkLength(array));
//!  Answer: