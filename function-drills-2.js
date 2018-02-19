/* function jediName(firstName, lastName){
    return lastName.slice(0,3).concat(firstName.slice(0,2));
}

jediName('George', 'Colon');
*/

function beyond(num) {
  if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
    console.log('And beyond');
  } else if(isFinite(num) && num > 0) {
    console.log('To Infinity');
  } else if(isFinite(num) && num < 0) {
    console.log('To Negative Infinity');
  } else if(num === 0) {
    console.log('Staying Home');
  }
}

beyond(10 / 0);
beyond(0);
beyond(10);
beyond(-10);