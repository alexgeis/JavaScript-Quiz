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

	useEffect(() => {
		const prevTopicMatch = prevTopics.find(
			(prevTopic) => prevTopic.name.toLowerCase() === topic.toLowerCase()
		);

		const topicData: Topic = getTopicData(topic);

		if (!prevTopicMatch) {
			// update current topic question state
			const randomQuestions: Question[] = shuffleArray(topicData.questions);
			setTopicQuestions(randomQuestions);

			// push to previous topics array
			const questionIds: string[] = randomQuestions.map(
				(question) => question.id
			);

			setPrevTopics([
				...prevTopics,
				{
					name: topic,
					questionIds: questionIds,
					currQuesIndex: 0, // TODO: fix this
				},
			]);
		} else {
			// there is a previous topic with questions already randomized
			// prevTopicMatch.questionIds = ["123","456"]
			// map over values
			// if id is equal to
			const orderedQuestions = prevTopicMatch.questionIds.map((id) => {
				for (let i = 0; i < topicData.questions.length; i++) {
					const question = topicData.questions[i];

					if (question.id == id) return question;
				}
				return {
					id: "",
					categories: [""],
					text: "Stored ID does not correspond to a stored question",
					answers: [{ text: "empty answer", isCorrect: false }],
					userCorrect: false,
				};
			});
			setTopicQuestions(orderedQuestions);
		}
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
