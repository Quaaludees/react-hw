import { useEffect, useState } from 'react';

const getLocalItem = <T>(key: string) => {
    const localItem = localStorage.getItem(key);
    if (!localItem) {
        return;
    }
    try {
        return JSON.parse(localItem) as T;
    } catch {
        return;
    }
};
export function useLocalStorage<T>(
    key: string
): [T | undefined, (newDate: T) => void] {
    const [data, setData] = useState<T | undefined>(getLocalItem<T>(key));

    useEffect(() => {
        const res = getLocalItem<T>(key);
        if (res) {
            setData(res);
        }
    }, [key]);

    const saveData = (newData: T) => {
        localStorage.setItem(key, JSON.stringify(newData));
        setData(newData);
    };

    return [data, saveData];
}
