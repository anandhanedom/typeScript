function add(n1, n2, showAns, phrase) {
    //   if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    //   }
    var res = n1 + n2;
    if (showAns) {
        console.log(phrase + res);
    }
    else {
        return n1 + n2;
    }
}
var number1; //hey you! eventually a number will be stored here
number1 = 5;
var number2 = 2.8;
var printAns = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printAns, resultPhrase);
