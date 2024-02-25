function orderArray() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(i)
    }
    arr.sort()
    arr.sort((a,b) => a - b)
    return arr
}

console.log(orderArray())