import { createContext } from "react";
import { Dispatch, SetStateAction } from "react";

const DarkModeContext = createContext<Theme>("light");
const SetDarkModeContext = createContext<Dispatch<SetStateAction<Theme>>>(
	(value: any) => {
		console.log("Default function:", value);
	}
);
