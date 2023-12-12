const hammingCode = require("./HammingCode/hammingCode")
const hammingDecode = require("./HammingDecode/hammingDecode")

const code = hammingCode("111111110000")

console.log(code)
console.log(hammingDecode(code))
console.log(hammingDecode("11101110111100100")) // 1 ошибка