import { useEffect, useState } from "react";

export function useLocalStorage<T>(localStorageKey: string, initialState: T) {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    const item = localStorage.getItem(localStorageKey);
    if (item) setState(JSON.parse(item));
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return [state, setState] as const;
}
