import { quizDB } from "../_quizDB";

export const allTopicNames: string[] = quizDB.map(
	(topic: Topic): string => topic.text
);

const emptyTopic: Topic = {
	text: "No Topic",
	questions: [],
};
// Promise<Topic>
export const getTopicData = (topicName: string): Topic => {
	// return new Promise((resolve, reject) => {
	// 	const result: Topic | undefined = quizDB.find(
	// 		(topic) => topic.text.toLowerCase() === topicName.toLowerCase()
	// 	);
	// 	console.log("result", result);
	// 	if (result) resolve(result);
	// 	else reject(emptyTopic);
	// });

	const test = quizDB.find((topic) => {
		return topic.text === "JavaScript";
	});
	// console.log("test", test);

	const result: Topic | undefined = quizDB.find((topic) => {
		const lowerTopic = topic.text.toLowerCase();
		const lowerInput = topicName.toLowerCase();
		console.log(lowerTopic, lowerInput);
		return lowerTopic === lowerInput;
	});
	console.log("result", result);
	if (result) return result;
	else return emptyTopic;
};

export const getUniqueStringArray = (array: string[]): Set<string> => {
	return new Set(array.flat());
};
