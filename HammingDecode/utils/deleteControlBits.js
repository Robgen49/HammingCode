module.exports = function deleteContolBits(input) {
    let result = ""
    for (let index = 2; index < input.length; index++) {
        result += Number.isInteger(Math.log2(index + 1)) ? "" : input[index]
    }
    return result
}