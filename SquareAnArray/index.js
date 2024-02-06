function squareArray(arr) {
    let ea = []
    let ea2 = []
    let eaf = []
    let x = 0
    let y = 0

    for(let i=0 ; i < arr.length; i++) {
        if (arr[i] >= 0) {
            let xx = arr[i] * arr[i]
            ea.push(xx)
            
        } else {
            let xx = arr[i] * arr[i]
            ea2.push(xx)
        }
    }
    for(let i=x, j=y; i < ea.length && j < ea2.length; i++, j++) {
        if(ea[i]>=ea2[j]) {
          eaf.push(ea2[j], ea[i])  
        } else {
            eaf.push(ea[i], ea2[j])
        }
    }
    for(let n=x; n < ea.length; n++) {
        eaf.push(ea[n])
    }
    for(let m=y; m < ea2.length; m++) {
        eaf.push(ea2[m])
    }
    console.log(eaf)
}
squareArray([1, 2, 3, 5, 6, 8, 9])