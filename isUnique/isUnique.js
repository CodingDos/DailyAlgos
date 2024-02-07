let string = ("abcdeef")
let answer = true
for(let i=0;i<string.length;i++){
    for(let j=i+1;j<=string.length;j++){
        if(string[i] === string[j]){
            answer = false
        } 
    }
}
return answer

// hash method

function isUnique(string){
    let emptyObject = {}
    for(const char of string){
        if(char in emptyObject){
            return false
        } else {
            emptyObject[char] = true
        }
    }
    return true
}

isUnique("abcdef")
