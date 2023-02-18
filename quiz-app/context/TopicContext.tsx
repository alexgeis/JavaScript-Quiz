"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getTopicData } from "../data/helpers/extractViewData";
import { shuffleArray } from "../data/helpers/shuffleArray";

const TopicContext = createContext<any>(undefined);

export function TopicProvider({ children }: any) {
	let localStorageTopic: any = "";
	if (typeof window !== "undefined") {
		localStorageTopic = JSON.parse(localStorage.getItem("topic") || "");
	}

	const [topic, setTopic] = useState<string>(localStorageTopic);
	// Persist topic in localStorage
	useEffect(() => {
		localStorage.setItem("topic", topic);
	}, [topic]);

	const [topicQuestions, setTopicQuestions] = useState<Question[] | []>([]);

	let localStorageProgress: any = [];
	if (typeof window !== "undefined") {
		localStorageProgress = JSON.parse(localStorage.getItem("prevTopic") ?? "");
	}
	const [prevTopics, setPrevTopics] = useState<PrevTopic[] | []>(
		localStorageProgress
	);

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
