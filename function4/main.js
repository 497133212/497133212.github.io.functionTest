function countWords(message){
    var str = new Array();
    str = message.split(" ");
    return str.length;
}
console.log(countWords('Good morning, I love JavaScript.'));
