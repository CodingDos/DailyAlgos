

function mumble(str) {
    let newStr = ""
    if (str < 2) {
        return str
    }

    for(i=0;i<str.length;i++){

        newStr += str[i].repeat(i + 1)
        if(i<str.length-1){

            newStr += "-"

        }
    }
    return newStr
}