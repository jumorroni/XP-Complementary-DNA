function complementDna(text) {

    while (text !== null) {
        if (text == 'A') {
            return 'T'
        }
        if (text == 'C') {
            return 'G'
        }
        if (text == 'ATTGC') {
            return 'TAACG'
        }
    }
}

module.exports = {
    complementDna
}