function move (position, roll) {
    var result = (roll * 2) + position;
    return result;
}

console.log(move(0, 4));// return 8
console.log(move(3, 6));// return 15
console.log(move(2, 5));// return 12