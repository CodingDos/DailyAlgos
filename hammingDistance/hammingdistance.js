

function hammingDistance(str1, str2){
    if (str1.length !== str2.length){
        return NaN
    }
    let i=0
    let count = 0
    while(i< str1.length){
        if(str1[i] !== str2[i]){
            count++
            i++
        } else {
            i++
        }
    }
    return count
}
console.log(hammingDistance("abc", "acc"))