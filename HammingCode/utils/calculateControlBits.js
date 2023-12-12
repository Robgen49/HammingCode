module.exports = function calculateControlBits(input, matrix, countOfControlBits) {
    const result = new Array(countOfControlBits)
    let mt = []
    let st = ""
    for (let bit = 0; bit < countOfControlBits; bit++) {
        let count = 0
        for (let index = 0; index < input.length; index++) {
            st += (matrix[index][countOfControlBits - 1 - bit])
            count += +matrix[index][countOfControlBits - 1 - bit] * +input[index]
        }
        mt.push(st)
        st = ""
        result[bit] = count % 2
    }
    // console.table(mt)
    return result
}