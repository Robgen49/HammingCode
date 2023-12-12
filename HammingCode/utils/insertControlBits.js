module.exports = function insertControlBits(input, controlBits) {
    input = input.split``
    input[0] = controlBits[0]
    input[1] = controlBits[1]
    for (let index = 2; index < controlBits.length; index++) {
        input[Math.pow(2, index) - 1] = controlBits[index]
    }
    return input.join``
}