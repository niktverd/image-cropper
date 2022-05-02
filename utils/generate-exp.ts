import dateFormat from 'dateformat';

export default function generateExpiration() {
    const daysPlus = Math.round(Math.random() * 2000 + 500)

    const future = new Date((new Date()).getTime() + (daysPlus * 86400000))

    return dateFormat(future, 'mm/dd/yyyy');
}