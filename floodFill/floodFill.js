

function floodFill(sr, sc, img, color){
    let currentColor = img[sr][sc]
    let queue = [[sr,sc]]
    if( currentColor === color ) {
        return img
    }
    while( queue.length > 0 ) {
        const [ r, c ] = queue.shift()
        if ( img[r][c] === currentColor ) {
            img[r][c] = color
        
            if ( r-1 >= 0 ) {
                queue.push([ r-1, c ])
            }
            if ( r+1 < img.length ) {
                queue.push([ r+1, c ])
            }
            if ( c-1 >= 0 ) {
                queue.push([ c-1, r])
            }
            if ( c-1 < img[0].length ) {
                queue.push([ c-1, r ])
            }
        }
    }
    return img
}