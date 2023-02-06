import { quizDB } from "../_quizDB";

export const allTopicNames: string[] = quizDB.map(
	(topic: Topic): string => topic.text
);

const emptyTopic: Topic = {
	text: "No Topic",
	questions: [],
};
export const getTopicData = (topicName: string): Topic => {
	const result: Topic | undefined = quizDB.find(
		(topic) => topic.text.toLowerCase() === topicName.toLowerCase()
	);
	return result !== undefined ? result : emptyTopic;
};

export const getUniqueStringArray = (array: string[]): Set<string> => {
	return new Set(array.flat());
};
