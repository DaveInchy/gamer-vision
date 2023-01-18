export function toPercentage(fraction: number = 1, total: number = 10) {
    return 100 * (fraction / total);
}

export function toFloat(percentage: number) {
    return percentage / 100;
}