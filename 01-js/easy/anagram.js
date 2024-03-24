/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Check if the lengths of the cleaned strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    // Count occurrences of each character in both strings
    const charCount1 = {};
    const charCount2 = {};

    for (let char of cleanStr1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of cleanStr2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }

    // Check if the character counts are the same
    for (let char in charCount1) {
        if (charCount1[char] !== charCount2[char]) {
            return false;
        }
    }

    return true;
}

module.exports = isAnagram;
