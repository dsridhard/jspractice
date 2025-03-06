function isPalindrom(){
    return str === str.split("").reverse().join("")

}

console.log(isPalindrom("madam")) // true

console.log(isPalindrom("hello")) // false