function orderArray() {
    let arr = [1, 2, 3, 6, 7, 9]
    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let fck = []
    for (let i = min; i <= max; i++) {
        fck.push(i)
    }

    return fck
}


console.log(orderArray());

