import { quizDB } from "../_quizDB";

// const extractViewData: (quizDB: Topic[]) => TopicViewData[] = (quizDB) => {
// 	return quizDB.map((topic) => {
// 		const categoriesByTopic: string[][] = topic.questions.map(
// 			(question): string[] => {
// 				return question.categories;
// 			}
// 		);
// 		const flattenedCats: string[] = categoriesByTopic.flat();
// 		const uniqueCategories: string[] = new Set(flattenedCats);

// 		return {
// 			topicName: topic.text,
// 			categories: uniqueCategories,
// 			questions: topic.questions,
// 			questionsLength: topic.questions.length,
// 		};
// 	});
// };

// const viewData: TopicViewData[] = extractViewData(quizDB);

export const allTopicNames: string[] = quizDB.map(
	(topic: Topic): string => topic.text
);

export const getTopicData = (topicName: string): Topic => {
	return quizDB.filter(
		(topic: Topic): boolean =>
			topic.text.toLowerCase() === topicName.toLowerCase()
	)[0];
};

export const getUniqueStringArray = (array: string[]): Set<string> => {
	return new Set(array.flat());
};
// const allCategoriesByTopic: string[] = viewData.map(
// 	(topic: TopicViewData): string => {
// 		const flatArr: string[] = topic.categories.flat();
// 		return;
// 	}
// );

//
