// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    let chars = str.split(''); //I could add an _ to the end of the initial string, if its odd, it will complete, if not, the underscore will be ignored
    let count = 0; //How many characters have been added
    let tempString = "";
    let collectedElements = [];
    let isOdd = str.length % 2 == 1;

   for (let i = 0; i < (isOdd ? chars.length + 1 : chars.length); i++) { //If its odd, it runs until the length + 1
        if(count < 1){
            tempString += chars[i];
            count++;
        } else {
            tempString += chars[i] ?? "_"; //If the character is empty because its an odd length string, add the underscore
            count++;
            collectedElements.push(tempString);
            count = 0;
            tempString = "";
        }
    }
    return collectedElements;
 }
