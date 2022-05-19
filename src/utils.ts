const isValid = (id: string): boolean => {
    let len = id.length
    let numbers = '0123456789'
    let allNumber = true
    for (let index = 0; index < id.length; index++) {
        const c = id[index]
        if (numbers.indexOf(c) === -1) {
            allNumber = false
        }
    }
    if (len < 5 || len > 11) {
        return false
    } else {
        return allNumber
    }
}

const log = console.log.bind(console)

export {
    isValid,
    log,
}