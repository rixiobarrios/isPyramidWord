// * isPyramidWord Exercise function * //
function isPyramidWord(word) {
    // Creates an array from the input word
    const sortedLetters = word.split('').sort();

    // Creates an object that contains a key of each word, along with the number of times it appears in the word
    const totalLetterCounts = sortedLetters.reduce((letterTotals, letter) => {
        letterTotals[letter]
            ? letterTotals[letter]++
            : (letterTotals[letter] = 1);
        return letterTotals;
    }, {});
    // This creates a sorted array of the amount of occurences of each letter
    const counts = Object.values(totalLetterCounts).sort();
    let isPyramid;

    // This uses a counter 'i' to see if the occurences happen in succession. If the letters do not increase without gaps, then the word is NOT a pyramid. If they do continue in sucession and match the counter, then the word is in fact a pyramid word

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === i + 1) {
            isPyramid = true;
        } else {
            isPyramid = false;
        }
    }

    return isPyramid;
}

module.exports = isPyramidWord;
