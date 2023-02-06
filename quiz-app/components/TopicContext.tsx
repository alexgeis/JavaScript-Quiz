import { createContext, useContext, useState } from "react";

const TopicContext = createContext<any>(undefined);

export function TopicProvider({ children }: any) {
	const [topic, setTopic] = useState<string>(
		"Take a quiz - test your knowledge"
	);

	const [subText, setSubText] = useState<string>(
		"Questions are sorted by category"
	);

	return (
		<TopicContext.Provider
			value={{
				topic,
				setTopic,
				subText,
				setSubText,
			}}
		>
			{children}
		</TopicContext.Provider>
	);
}

export function useTopic() {
	const context = useContext(TopicContext);

	if (!context)
		throw new Error("useTopic must be used inside a `TopicProvider`");

	return context;
}
