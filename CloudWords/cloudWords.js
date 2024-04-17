function cloudWords(str) {

    let hash = {}
    let lstr = str.toLowerCase()
    let rstr = lstr.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '')
    let sstr = rstr.split(/\s+/)

    for(const char of sstr) {
        if (char in hash) {
            hash[char] += 1
        } else {
            hash[char] = 1
        }
    }
    return hash
}