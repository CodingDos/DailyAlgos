function sortSquaredArray(arr) {
    let na = []
    let nas = []
  
    for(let i = 0; i < arr.length; i++) {
        na.push(arr[i] * arr[i])
    }
    for(let j = 0; j < na.length; j++) {
        for(let k = 0; k < na.length - j - 1; k++) {
            if(na[k] > na[k + 1]) {
                nas = na[k]
                na[k] = na[k + 1]
                na[k + 1] = nas
            }
        }
    }
}