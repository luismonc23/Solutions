// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    let chars = str.split('');
    let count = 0;
    let tempString = "";
    let collectedElements = [];
    let isOdd = str.length % 2 == 1;

   for (let i = 0; i < (isOdd ? chars.length + 1 : chars.length); i++) {
        if(count < 1){
            tempString += chars[i];
            count++;
        } else {
            tempString += chars[i] ?? "_";
            count++;
            collectedElements.push(tempString);
            count = 0;
            tempString = "";
        }
    }
    return collectedElements;
 }
