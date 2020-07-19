
export function cloneDeep<T extends any>(source: T): T {
    return JSON.parse(JSON.stringify(source))
}

export function getPreviusIndex(currentIndex: number, length: number) {
    return (currentIndex - 1 + length) % length
}

export function getNextIndex(currentIndex: number, length: number) {
    return (currentIndex + 1) % length
} 