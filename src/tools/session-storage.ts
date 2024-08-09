export const SessionStorage = {
    getItem: <T>(key: string): T | null => {
        const parsedItem = JSON.parse(sessionStorage.getItem(key)!)
        if (!parsedItem) return null;
        return parsedItem as T;
    },
    setItem: (key: string, data: any) => {
        sessionStorage.setItem(key, typeof data === "string" ? data : JSON.stringify(data))
    }
}