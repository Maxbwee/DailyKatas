
let str = "";

function replaceVowel(str) {
        
    return str.toLowerCase()
            .replace('a', 1)
            .replace('e', 2)
            .replace('i', 3)
            .replace('o', 4)
            .replace('u', 5)    
}

console.log(replaceVowel('karAchi'));
console.log(replaceVowel('chEmBur'));
console.log(replaceVowel('LexiCAl'));
console.log(replaceVowel('fuNctionS'))
console.log(replaceVowel('EASY'));
console.log(replaceVowel('khandbari'));