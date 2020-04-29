// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// function vowels(str) {
//     const vowels = ['a', 'i', 'e', 'o', 'u'];
//     let vowel = '';

//     for (let char of str.toLowerCase()) {
//         const filteredVowels = vowels.filter(vowel => vowel === char);

//         vowel += filteredVowels
//     }

//     return vowel
// }


function vowels(str) {
    const vowels = ['a', 'i', 'e', 'o', 'u'];
    let vowel = '';

    for (let char of str.toLowerCase()) {
        const filteredVowels = vowels.filter(vowel => vowel === char);
        if (vowels.includes(char)) {
            vowel += filteredVowels
        }
    }

    return vowel
}

vowels('hI there');

module.exports = vowels;
