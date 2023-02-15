import { createContext, useContext, useEffect, useState } from "react";
import { getTopicData } from "../data/helpers/extractViewData";
import { shuffleArray } from "../data/helpers/shuffleArray";

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

	const [prevTopics, setPrevTopics] = useState<PrevTopic[] | []>(
		JSON.parse(localStorage.getItem("prevTopics") ?? "")
	);

	// change topic
	// if new topic
	// 		generate random question array
	//		localStorage - setItem() - random question array IDs
	// else if old topic
	//		fetch randomized question array
	//		use current index to display current question
	useEffect(() => {
		const topicExists = prevTopics.find(
			(prevTopic) => prevTopic.name.toLowerCase() === topic.toLowerCase()
		);

		if (!topicExists) {
			// update current topic question state
			const topicData: Topic = getTopicData(topic);
			// RANDOMIZE
			const randomQuestions: Question[] = shuffleArray(topicData.questions);
			setTopicQuestions(randomQuestions);

			// push to previous topics array
			const questionIds: string[] = randomQuestions.map(
				(question) => question.id
			);

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
