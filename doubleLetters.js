
let word = "";

function doubleLetters(word) {
   
    for(let i = 0; i < word.length; i++) {
        
        let letters = word.charAt(i);
        
        console.log(letters)

        if(letters = letters[i]) {
            return true;
        }
        else {
            return false;
        }
    }
    
}
//console.log(doubleLetters("moi"))


function dubleLetters(str) {
    for(var i = 0; i <= str.length; i++) {
        for(var j = i+1; j <= str.length; j++) {
            if(str[j] == str[i]) {
                return true;
            }
        }
    }
    return false;
}

console.log(dubleLetters("Hello"))
console.log(dubleLetters("orange"))
console.log(dubleLetters("yummy"))
console.log(dubleLetters("munchkin"))
