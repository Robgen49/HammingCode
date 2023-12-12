const getControlBit = (pow) => Math.pow(2, pow)

module.exports = function getCountOfControlBits(length, isFilled = false) {
    let count = 0;
    for (let i = 0; i < length; i++) {
        if (getControlBit(i) <= length) {
            if (isFilled) {
                count++;
            }
            else {
                count++
                length++
            }
        }
        else
            break;
    }
    return count
}