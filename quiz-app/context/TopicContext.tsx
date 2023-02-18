"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getTopicData } from "../data/helpers/extractViewData";
import { shuffleArray } from "../data/helpers/shuffleArray";

const TopicContext = createContext<any>(undefined);

export function TopicProvider({ children }: any) {
	// get topic from local storage
	// let localStorageTopic: any = "";
	// if (typeof window !== "undefined") {
	// 	localStorageTopic = JSON.parse(
	// 		localStorage.getItem("topic") || '{"topic":""}'
	// 	);
	// }

	const [topic, setTopic] = useState<string>("");
	// Persist topic in localStorage
	// useEffect(() => {
	// 	if (typeof window !== "undefined") {
	// 		localStorage.getItem("") ||
	// 		localStorage.setItem("topic", topic);
	// 	};

	// }, [topic]);

	// if topic is changed
	// 	check if topic has already been visited // pull from local storage into a state variable
	// 	if so pull from old progress
	// if not,

	if (typeof window !== "undefined") {
		const userQuizProgress: TopicProgress[] = JSON.parse(
			localStorage.getItem("userQuizProgress") ||
				'[{"topicName":"","questionRefs":"[]","currQuesIndex":"0"}]'
		);

		const topicsVisited = userQuizProgress.map(
			(topicProgress) => topicProgress.topicName
		);
	}

	const [prevTopics, setPrevTopics] = useState<string[]>();
	const [topicQuestions, setTopicQuestions] = useState<Question[] | []>([]);

	useEffect(() => {
		// if topic select page, ignore
		if (topic === "") return;
		// check if the prevTopics state variable includes the new topic
		const prevTopicMatch = prevTopics.find(
			(prevTopic) => prevTopic.name.toLowerCase() === topic.toLowerCase()
		);

		const topicData: Topic = getTopicData(topic);

		// only on pageload of entire app?, map ids of prevTopics localstorage object to questions

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
			const emptyObj = {
				id: "9999",
				categories: [""],
				text: "No question",
				answers: [{ text: "empty answer", isCorrect: false }],
				userCorrect: false,
			};
			// a lot of logic :(
			// TODO: do better
			const questionsFromIds = prevTopicMatch.questionIds.map((id) => {
				const questionFinder = (question: any) => question.id === id;
				const question = topicData.questions.find(questionFinder) ?? emptyObj;
				return question;
			});
			setTopicQuestions(questionsFromIds);
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

// const getLocalStorage = async (
// 	key: string,
// 	fallbackValue: any
// ): Promise<any> => {
// 	try {
// 		const results = await JSON.parse(
// 			localStorage?.getItem(key) || fallbackValue
// 		);
// 		return results;
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// // const storageResults = getLocalStorage()
// getLocalStorage().then((res) => setItems(res));
// const

// useEffect(() => {
// 	const chartData = { chain: "", address: "", dex: "" };
// 	if (window.localStorage === undefined) {
// 		localStorage.setItem("ChartData", JSON.stringify(chartData));
// 	}
// }, []);
// // answer
// const items = await JSON.parse(localStorage?.getItem("ChartData") || "{}");
