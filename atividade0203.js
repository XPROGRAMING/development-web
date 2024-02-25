function orderArray() {

    let arr = [1, 2, 3, 6, 7, 9]
    console.log(arr)

    arr.splice(3,0,4,5)
    console.log(arr)
    
    arr.splice(7,0,8)
    console.log(arr)
}

orderArray()