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

// function decoder(code){
//     // loop the code
//     let codeArray = code.split(' ');
//     let newArray = [];
//     for (let i = 0; i < codeArray.length; i++){
//         if(codeArray[i].charAt(0) === 'a'){
//             newArray.push(codeArray[i].charAt(1));
//         } else if(codeArray[i].charAt(0) === 'b'){
//             newArray.push(codeArray[i].charAt(2));
//         } else if(codeArray[i].charAt(0) === 'c'){
//             newArray.push(codeArray[i].charAt(3));
//         } else if(codeArray[i].charAt(0) === 'd'){
//             newArray.push(codeArray[i].charAt(4));
//         } else {
//             newArray.push(' ');
//         }
//     }
//     return newArray.join('');
// }
// decoder('craft block argon meter bells brown croon droop');


// function days(month, leapYear) {
//     if(month === "February" && leapYear === true) {
//         console.log(`${month} has 29 days.`);
//     } else if(month === "February" && leapYear === false) {
//         console.log(`${month} has 28 days.`);
//     }
//   switch(month) {
//       case "January":
//       case "March":
//       case "May":
//       case "July":
//       case "August":
//       case "October":
//       case "December":
//         console.log(`${month} has 31 days.`);
//         break;

//       case "September":
//       case "April":
//       case "June":
//       case "November":
//         console.log(`${month} has 30 days.`);
//         break;
    
//     default:
//         throw new Error("Must provide a valid month.");
//         break;

// }
// }

// days("February", true);
//days("November");
//days("blah");

function rps(num){
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (num === 1 && randomNo === 3 || num === 3 && randomNo === 2 || num === 2 && randomNo === 1 ){
        return 'You win!';
    } else if (num === 1 && randomNo === 2 || num === 2 && randomNo === 3 || num === 3 && randomNo === 1){
        return 'You lose';
    } else if ( num === randomNo){
        return "It's a tie!";
    } else if ( typeof num !== 'number' || num > 3 || num < 1){
        throw Error('Valid number please...');
    }    
}

rps(3);