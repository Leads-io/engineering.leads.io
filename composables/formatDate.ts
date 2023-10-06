export function useLocaleDate(date: string | Date) {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return new Intl.DateTimeFormat(undefined, { year: "numeric", month: "long", day: "numeric" }).format(date);
}