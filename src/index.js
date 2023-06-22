function complementDna(text) {

    if (text == 'A') {
        return 'T'
    }
    if (text == 'C') {
        return 'G'
    }
}

module.exports = {
    complementDna
}