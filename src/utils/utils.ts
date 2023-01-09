export const parseStringValue = (filterValue: string, max: string, unit: string) => {
    if (!filterValue) return `All`

    const scale = unit === 'hours' ? 60 : 1

    const tokens = filterValue.split(',')
    if (tokens.length === 2) {
        if (tokens[0] === '0' && tokens[1] === max) return `All`
        if (tokens[0] === '0')
            return `<${Math.round(parseFloat(tokens[1]) / scale / 0.5) * 0.5} ${unit}`
        if (tokens[1] === max)
            return `>${Math.round(parseFloat(tokens[0]) / scale / 0.5) * 0.5} ${unit}`

        return `${Math.round(parseFloat(tokens[0]) / scale / 0.5) * 0.5}-${
            Math.round(parseFloat(tokens[1]) / scale / 0.5) * 0.5
        } ${unit}`
    }
}
