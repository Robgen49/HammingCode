module.exports = function createMatrix(input, getCountOfControlBits) {
    const result = []
    for (let index = 1; index < input.length + 1; index++) {
        result.push(index.toString(2).padStart(getCountOfControlBits, '0'))
    }
    return result
}