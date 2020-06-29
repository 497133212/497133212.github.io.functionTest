function palindrome(message){
    if (typeof message !== 'string' || message.constructor !== String) {
        return false;
    }
    var len = parseInt((message.length+1)/2);
    for(var i=0; i<len; i++){
        if (message[i] !== message[message.length-i-1]) {
            return false;
        }
    }
    return true;
}
console.log(palindrome('hello'));
console.log(palindrome('abcba'));


