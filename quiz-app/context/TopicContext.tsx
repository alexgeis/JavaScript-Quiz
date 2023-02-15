import { createContext, useContext, useEffect, useState } from "react";
import { getTopicData } from "../data/helpers/extractViewData";

const TopicContext = createContext<any>(undefined);

export function TopicProvider({ children }: any) {
	const [topic, setTopic] = useState<string>(
		JSON.parse(localStorage.getItem("topic") ?? "")
	);
	// Persist topic in localStorage
	useEffect(() => {
		localStorage.setItem("topic", topic);
	}, [topic]);

	const [topicQuestions, setTopicQuestions] = useState<Question[] | []>([]);

	const [subText, setSubText] = useState<string>(
		"Questions are sorted by category"
	);

	const [prevTopics, setPrevTopics] = useState<PrevTopic[] | []>([]);

	useEffect(() => {
		const topicExists = prevTopics.find(
			(prevTopic) => prevTopic.name.toLowerCase() === topic.toLowerCase()
		);

		if (!topicExists) {
			const topicData = getTopicData(topic);
			// setPrevTopics([
			// 	...prevTopics,
			// 	{
			// 		name: topicData.name,
			// 		questions: topicData.questions,
			// 		currQuesIndex: 0,
			// 	},
			// ]);
		}
		console.log("prevTopics", prevTopics);
	}, [topic]);

	return (
		<TopicContext.Provider
			value={{
				topic,
				setTopic,
				subText,
				setSubText,
				topicQuestions,
				setTopicQuestions,
				prevTopics,
				setPrevTopics,
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
