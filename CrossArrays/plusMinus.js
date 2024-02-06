



function plusMinus(arr) {
    let x = arr.sort()
    let z = 0
    let n = 0
    let p = 0
    for (let i = 0; i < arr.length; i++) {
        
        if (x[i] === 0) {
            z++
        } else if (x[i] < 0) {
            n++
        } else {
            p++
        }
    }

    let zf = (z / arr.length )
    let nf = (n / arr.length )
    let pf = (p / arr.length )

    return zf.toFixed(6), nf.toFixed(6), pf.toFixed(6)



}

plusMinus([1,1,0,-1,-1])