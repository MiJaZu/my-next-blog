import { useEffect, useState } from "react";

export function useLocalStorage<T>(localStorageKey: string, initialState: T) {
  const [state, setStateInternal] = useState<T>(initialState);

  useEffect(() => {
    const item = localStorage.getItem(localStorageKey);
    if (item) setStateInternal(JSON.parse(item));
  }, []);

  const setState = (item: T) => {
    setStateInternal(item);
    localStorage.setItem(localStorageKey, JSON.stringify(item));
  };

  return [state, setState] as const;
}
