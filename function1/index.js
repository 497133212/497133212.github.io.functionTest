function reverseString(message){
    var str="";
    for(var i = 0; i < message.length; i++) {
        str += message.charAt(message.length - i -1);
    }
    return str;
}
console.log(reverseString("hello"));