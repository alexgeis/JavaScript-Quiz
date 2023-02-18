import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, fallbackValue: T) {
	// keep track of value when retrieved from local storage, and when changed after
	const [value, setValue] = useState(fallbackValue);
	// get local storage value and store in state, using fallback value if key nonexistent
	useEffect(() => {
		const stored = localStorage.getItem(key);
		setValue(stored ? JSON.parse(stored) : fallbackValue);
	}, [fallbackValue, key]);
	// make sure to update stored value when state is updated
	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);
	// return useState values
	return [value, setValue] as const;
}
