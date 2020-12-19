var userInput;
var username;
userInput = 5;
userInput = 'Hello';
// username = userInput; //Error because its unknown
//Solution
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code }; //crashes here : return is never
    // while(true){}
}
var res = generateError('An error occurred!', 500);
console.log(res);
