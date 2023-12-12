module.exports = function insertEmptyControlBits(input) {
    let result = "00"
    for (let index = 0; index < input.length; index++) {
        if (Number.isInteger(Math.log2(result.length + 1))) {
            result += "0"
        }
        result += input[index]
    }
    return result
}