let sum = 0
let fm = 0
let sm = 0
let z = 0
let x = 0
let y = arr.length -1
while(x< arr.length){
    for(let count of arr[x]){
        fm += count[z]
        sm += count[y]
        x++
        z++
        y--
    }
    sum = fm- sm
    return sum
}