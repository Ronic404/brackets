module.exports = function check(str, bracketsConfig) {
    let strArray = str.split('');
    if(strArray.length%2 !== 0) return false;
    let openBrackets = [];
    let closeBrackets = [];    
    
    for(let i of bracketsConfig) {
        openBrackets.push(i[0]);
        closeBrackets.push(i[1]);
    }

    for(let i = 0; i < strArray.length; i++) {
        for(let j = 0; j < openBrackets.length; j++) {
            if(strArray[i] === openBrackets[j] && strArray[i+1] === closeBrackets[j]) {
                strArray.splice(i, 2);
                i -= 2;
            } 
        }
    }

    return (strArray.length === 0) ? true : false;
}
