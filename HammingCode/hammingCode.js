const calculateControlBits = require("./utils/calculateControlBits")
const createMatrix = require("./utils/createMatrix")
const getCountOfControlBits = require("./utils/getCountOfControlBits")
const insertControlBits = require("./utils/insertControlBits")
const insertEmptyControlBits = require("./utils/insertEmptyControlBits")

module.exports = function hammingCode(input) {

    const inputWithControlBits = insertEmptyControlBits(input)

    const countOfControlBits = getCountOfControlBits(input.length)

    const matrix = createMatrix(inputWithControlBits, countOfControlBits)

    const controlBits = calculateControlBits(inputWithControlBits, matrix, countOfControlBits)
    
    return insertControlBits(inputWithControlBits, controlBits)
}