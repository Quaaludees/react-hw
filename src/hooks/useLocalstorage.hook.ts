import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
    key: string
): [T | undefined, (newDate: T) => void] {
    const [data, setData] = useState<T>();

    useEffect(() => {
        const localItem = localStorage.getItem(key);
        if (!localItem) {
            return;
        }
        const res = JSON.parse(localItem) as T;
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
