function div (a, b){
  if(b==0){
	throw new Error('divisor cannot be 0');
  }
  return a / b;
}

function containsNumbers(text){
  if(typeof text != 'string'){
	  throw new Error('input must be a string');
	}
  for (let i = 0; i < text.length; i++) {
   if (!isNaN(text.charAt(i)))
    return true;
  }
  return false;
}

exports.div = div;
exports.containsNumbers = containsNumbers;

