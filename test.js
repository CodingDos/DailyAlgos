function pLinkedList(head) {
    if(!head) {
        return false
    }

    let count = 0
    let sum = 0
    let current = head
    let mid = head

    while(current !== null && current.next !== null) {
        current = current.next.next
        mid = mid.next
        count += 1
    }

    current = head

    if(count % 2 !== 0) {
        while (current !== null) {
            if(current === mid) {
                sum = -sum
                current.val = sum
                current.next.val = current.val + current.next.val
                current = current.next
            } else {
                if(current.next !== null) {
                    sum = current.val + current.next.val
                    current.next.val = sum
                }
                current = current.next
            }
        }
        if(sum === 0){
            return true
        } else {
            return false
        }
    } else {
        while (current !== null) {
            if(current === mid) {
                sum = -sum
                current.val = sum
                current.next.val = current.val + current.next.val
                current = current.next
            } else {
                if(current.next !== null) {
                    sum = current.val + current.next.val
                    current.next.val = sum
                }
                current = current.next
            }
        }
        if(sum === 0){
            return true
        } else {
            return false
        }
    }   
}