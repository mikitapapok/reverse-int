module.exports = function reverse (n) {
    let a=parseInt(n.toString().split('').reverse().join(''))
    return a;
}
