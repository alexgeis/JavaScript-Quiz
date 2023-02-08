import { quizDB } from "../_quizDB";

export const allTopicNames: string[] = quizDB.map(
	(topic: Topic): string => topic.name
);

const emptyTopic: Topic = {
	name: "No Topic",
	questions: [],
};
// Promise<Topic>
export const getTopicData = (topicName: string): Topic => {
	// return new Promise((resolve, reject) => {
	// 	const result: Topic | undefined = quizDB.find(
	// 		(topic) => topic.name.toLowerCase() === topicName.toLowerCase()
	// 	);
	// 	console.log("result", result);
	// 	if (result) resolve(result);
	// 	else reject(emptyTopic);
	// });

	const result: Topic | undefined = quizDB.find((topic: Topic): boolean => {
		const lowerTopic: string = topic.name.toLowerCase();
		const lowerInput: string = topicName.toLowerCase();

		return lowerTopic === lowerInput;
	});
	console.log("result", result);
	if (result) return result;
	else return emptyTopic;
};

export const getUniqueStringArray = (array: string[]): Set<string> => {
	return new Set(array.flat());
};
