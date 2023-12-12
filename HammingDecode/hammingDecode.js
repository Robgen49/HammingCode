const calculateControlBits = require("../HammingCode/utils/calculateControlBits")
const createMatrix = require("../HammingCode/utils/createMatrix")
const getCountOfControlBits = require("../HammingCode/utils/getCountOfControlBits")
const deleteControlBits = require("./utils/deleteControlBits")

module.exports = function hammingDecode(input, detected = false) {

    const countOfControlBits = getCountOfControlBits(input.length, true)

    const matrix = createMatrix(input, countOfControlBits)

    const syndrome = calculateControlBits(input, matrix, countOfControlBits)

    if (new Set(syndrome).has(1)) {

        if (detected) {
            throw new Error('код содержит более одной ошибки')
        }

        const indexOfMistake = parseInt(syndrome.reverse().join``, 2) - 1

        console.error(`ошибка в ${indexOfMistake + 1} бите`)

        input = input.split``

        input[indexOfMistake] === '0' ? input[indexOfMistake] = '1' : input[indexOfMistake] = '0'

        input = input.join``

        return hammingDecode(input, true)
    }

    else {
        return deleteControlBits(input)
    }
}