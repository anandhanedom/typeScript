function combine(n1, n2, resultConversion) {
    var res;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        res = n1 + n2;
    }
    else {
        res = n1.toString() + n2.toString();
    }
    if (resultConversion === 'as-number') {
        return +res;
    }
    else {
        return res.toString();
    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('John', 'Doe', 'as-text');
console.log(combinedNames);
