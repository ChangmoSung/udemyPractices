// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


const reverseInt = n => {
    const reversed = parseInt(n.toString().split('').reverse().join(''));

    return reversed * Math.sign(n)
}

reverseInt(1234)

module.exports = reverseInt;
