export const debounce = <T extends (...args: any[]) => any>(
    func: T,
    delay: number,
): ((...funcArgs: Parameters<T>) => void) => {
    let timerId: ReturnType<typeof setTimeout> | null;

    return (...args: Parameters<T>) => {
        clearTimeout(timerId as ReturnType<typeof setTimeout>);
        timerId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
