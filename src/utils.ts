export function getNumberedArray(count: number, firstNumber = 0): number[] {
    return [...Array(count)].map((_, i) => i + firstNumber);
}

export function padEndArray<T = unknown>(
    array: T[],
    length: number,
    value: T
): T[] {
    return Object.assign(Array(length).fill(value), array);
}
