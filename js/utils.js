export function notNumber(value) {
    return isNaN(value) || value === '' || value === null;
}

export function calculateBMI(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}
