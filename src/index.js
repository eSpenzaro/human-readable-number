module.exports = function toReadable (number) {
    
    const ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']; 
    const secondTens = ['ten', 'eleven', 'twelve', 'thirteen','fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let razryad = number.toString()[0]; // 2
    const str = number.toString()    
    if (str.length == 1) {
        return ones[number]
    }
    
    if (str.length == 2 && number <= 19) {
        return secondTens[number - 10];
    }

    // if (str.length == 2 && number >= 20 && number <= 99 && razryad === tens[razryad])
    // return 
    
} 
    console.log(module.exports(20))
  
