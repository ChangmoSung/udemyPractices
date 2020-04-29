// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let stair = '';

//         for (let column = 0; column < n; column++) {
//             if (column <= row) {
//                 stair += '#';
//             } else {
//                 stair += ' ';
//             }
//         }
        
//         console.log(stair);
//     }
// }


function steps(n, row = 0, stair = '') {
    const add = stair.length <= row ? '#' : ' ';

    if (stair.length === n) {
        console.log(stair);

        steps(n, row + 1);

        return;
    }

    if (n === row) {
        return;
    }

    steps(n, row, stair += add);
}

steps(3);

module.exports = steps;
