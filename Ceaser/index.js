
	let alph= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	let answer = ""
	function ceasarCipher(string, key){
	    for(let x of string.split("")) {
	        if(alph.includes(x)){
	            let y = alph.indexOf(x)
	            let z = (y + key) % 26
	            answer = answer + alph[z]
	        }
	    }
        return answer
	}
ceasarCipher("xyz", 2)




