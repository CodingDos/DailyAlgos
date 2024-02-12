
function oneWay( strOne, strTwo ) {
    let stringOne = strOne.split("")
    let stringTwo = strTwo.split("")
    let stringThree = []
    let edit = 0
    if( stringOne.length === stringTwo.length ) {
        for( let i = 0; i < stringOne.length; i++) {
            if( stringOne[i] !== stringTwo[i] ) {
                edit++
            }
        }
        if ( edit >= 2 ) {
            return false
        } else {
            return true
        }
    }
    if( stringOne.length <= stringTwo.length ) {
        let spare = "%"
        let j = 0
        for( let i = 0; i < stringTwo.length; i++ ) {
            if( stringTwo[i] !== stringOne[j] ) {
                stringThree.push( spare )
                if( j === 0) {
                    j++
                } else {
                    continue
                }
            } else {
                stringThree.push(stringTwo[i])
                j++
            }
        }
        for( let i = 0; i < stringThree.length; i++) {
            if( stringThree[i] !== stringTwo[i]) {
                edit++
            } else {
                continue
            }
        }
        if(edit >= 2) {
            return false
        } else {
            return true
        }
    } else { 
    let spare = "%"
    let j = 0  
    for( let i = 0; i < stringOne.length; i++ ) {
        if( stringOne[i] !== stringTwo[j]) {
            stringThree.push(spare)
            if (j === 0 ) {
                j++
            } else {
                continue
            }
        } else {
            stringThree.push(stringOne[i])
            j++
        }
    }
    for( let i = 0; i < stringThree.length; i++) {
        if( stringThree[i] !== stringOne[i]) {
            edit++
        } else {
            continue
        }
    }
    if(edit >= 2) {
        return false
    } else {
        return true
    }    
  }   
  }
  oneWay("pale", "bake")