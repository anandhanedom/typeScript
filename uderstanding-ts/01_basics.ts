function add(n1: number, n2: number, showAns: boolean, phrase: string) {
  //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //     throw new Error('Incorrect input!');
  //   }

  const res = n1 + n2;

  if (showAns) {
    console.log(phrase + res);
  } else {
    return n1 + n2;
  }
}

let number1: number; //hey you! eventually a number will be stored here
number1 = 5;

const number2 = 2.8;

const printAns = true;

const resultPhrase = 'Result is: ';

add(number1, number2, printAns, resultPhrase);
