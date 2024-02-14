
function strComp(inputStr) {
    let compressedStr = '';
    let count = 1;
  
    for (let j = 0; j < inputStr.length; j++) {
        if (inputStr[j] !== inputStr[j + 1]) {
            compressedStr += inputStr[j] + count;
            count = 1;
        } else {
            count++;
        }
    }
  
    if (compressedStr.length >= inputStr.length) {
        console.log(inputStr);
    } else {
        console.log(compressedStr);
    }
  }
  
  strComp("aabcccccaaa");