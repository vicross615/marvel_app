import namor from 'namor'

const range = len => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}


let userCounter = 1;

const newPerson = () => {
    const statusChance = Math.random()

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }



    return {
        id: userCounter + 1,
        firstName: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        email: namor.generate({ words: 1, numbers: 0 }) + '@gmail.com',
        phone: '080' + Math.floor(100000 + Math.random() * 90000000),
        joined: "12th Oct 2012",
    }
}

export default function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth]
        return range(len).map(d => {
            return {
                ...newPerson(),
                subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
            }
        })
    }

    return makeDataLevel()
}