function alphabetSort(message){
    var str = Array.from(message).sort().join("");
    return str;
}
console.log(alphabetSort('hello'));
