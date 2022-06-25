module.exports = function toReadable (number){
    const numWords = require('num-words');
    let numbers_word = numWords(number);
    return numbers_word.split('and ').join('');
};