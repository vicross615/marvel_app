export function getCurrentDate(separator=''){

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;

    return `${date} ${separator} ${monthNames[newDate.getMonth()]}`
}

export function getYesterdayDate(separator=''){

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const newDate = new Date();
    let date = newDate.getDate()-1;
    let month = newDate.getMonth() + 1;

    return `${date} ${separator} ${monthNames[newDate.getMonth()]}`
}

export function getDisplayDate(defaultDate='Today') {
    switch (defaultDate) {
        case 'Today':
            return getCurrentDate('')
            break;
        case 'Yesterday':
           return getYesterdayDate('')
            break;
    }
}