import { createContext, useContext, Dispatch, SetStateAction } from "react";
import { PropsWithChildren } from "react";
import { useTheme } from "./helpers/useTheme";

const DarkModeContext = createContext<Theme>("dark");
const SetDarkModeContext = createContext<Dispatch<SetStateAction<Theme>>>(
	(value: any) => {
		console.log("Default function:", value);
	}
);

export function useDarkModeContext() {
	return useContext(DarkModeContext);
}

export function useSetDarkModeContext() {
	return useContext(SetDarkModeContext);
}

export function DarkModeContextProvider({ children }: PropsWithChildren) {
	const [theme, setTheme] = useTheme();
	return (
		<DarkModeContext.Provider value={theme}>
			<SetDarkModeContext.Provider value={setTheme}>
				{children}
			</SetDarkModeContext.Provider>
		</DarkModeContext.Provider>
	);
}
