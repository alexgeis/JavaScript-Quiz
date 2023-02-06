import { createContext, useContext, useState } from "react";

const TopicContext = createContext<any>(undefined);

export function TopicProvider({ children }: any) {
	const [topic, setTopic] = useState<string>(
		"Take a quiz - test your knowledge"
	);

	const [subText, setSubText] = useState<string>(
		"Questions are sorted by category"
	);

	const [topicQuestions, setTopicQuestions] = useState<Question[]>([
		{ categories: [""], text: "", answers: [{ text: "", isCorrect: false }] },
	]);

	return (
		<TopicContext.Provider
			value={{
				topic,
				setTopic,
				subText,
				setSubText,
				topicQuestions,
				setTopicQuestions,
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
