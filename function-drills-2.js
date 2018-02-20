/* function jediName(firstName, lastName){
    return lastName.slice(0,3).concat(firstName.slice(0,2));
}

jediName('George', 'Colon');
*/

// function beyond(num) {
//   if(num === Number.POSITIVE_INFINITY || num === Number.NEGATIVE_INFINITY) {
//     console.log('And beyond');
//   } else if(isFinite(num) && num > 0) {
//     console.log('To Infinity');
//   } else if(isFinite(num) && num < 0) {
//     console.log('To Negative Infinity');
//   } else if(num === 0) {
//     console.log('Staying Home');
//   }
// }

// beyond(10 / 0);
// beyond(0);
// beyond(10);
// beyond(-10);

function decoder(code){
    // loop the code
    let codeArray = code.split(' ');
    let newArray = [];
    for (let i = 0; i < codeArray.length; i++){
        if(codeArray[i].charAt(0) === 'a'){
            newArray.push(codeArray[i].charAt(1));
        } else if(codeArray[i].charAt(0) === 'b'){
            newArray.push(codeArray[i].charAt(2));
        } else if(codeArray[i].charAt(0) === 'c'){
            newArray.push(codeArray[i].charAt(3));
        } else if(codeArray[i].charAt(0) === 'd'){
            newArray.push(codeArray[i].charAt(4));
        } else {
            newArray.push(' ');
        }
    }
    return newArray.join('');
}
decoder('craft block argon meter bells brown croon droop');