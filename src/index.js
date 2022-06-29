module.exports = function toReadable (number){
    let arr_one = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',];
    let arr_two = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',];
    let newString = '';
    if (number === 0) {
        return 'zero';
    }      
    if (String(number).length === 3) {
        newString = newString + arr_one[Number(String(number)[0])] + ' hundred';
        number = Math.round((number/100 - Math.floor(number/100)) * 100);
    }
    if (String(number).length === 2) {
        if (Math.floor(number/10) === 1) {
            newString = newString + " " + arr_one[number];
        } else {
            newString = newString + " " + arr_two[Math.floor(number/10)-2];
            number = Math.round((number/10 - Math.floor(number/10)) * 10);
        }
    }
    if (String(number).length === 1) {
        newString = newString + " " + arr_one[Number(String(number)[0])];
    }
    return newString.trim();
};