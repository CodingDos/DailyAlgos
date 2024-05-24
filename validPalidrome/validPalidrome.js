
function validP(str){

    s = 0
    e = str.length - 1

    while(s < e){
        if(str[s] !== str[e]){
            //recurssion to compare the next char with current
            return helper(s, e-1) || helper(s+1, e)
        }
            s++
            e--
    }
    //this function compares the two string characters
    function helper(s,e){
        if(str[s] !== str[e]){
            //if they are not the same return false since it needs to be the same to be considered a palidrome
            return false
        }
        //keep moving forward and return true
        s++
        e--
        return true
    }
    //if all characters are the same then it is a palidrome
    return true
}