let userInput: unknown;
let username: string;

userInput = 5;
userInput = 'Hello';

// username = userInput; //Error because its unknown

//Solution
if (typeof userInput === 'string') {
  username = userInput;
}

function generateError(message: string, code: number): never {
  throw { message, code }; //crashes here : return is never

  // while(true){}
}

const res = generateError('An error occurred!', 500);
console.log(res);
