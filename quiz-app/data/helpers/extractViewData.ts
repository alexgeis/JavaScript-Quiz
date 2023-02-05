import { quizDB } from "../_quizDB";

const extractViewData: (quizDB: Topic[]) => ViewData[] = (quizDB) => {
	return quizDB.map((topic) => {
		const questions = topic.questions;
		const categories = topic.questions.map((question) => {
			return question.category;
		});

		return {
			topicName: topic.text,
			categories: categories,
			questions: topic.questions,
			questionsLength: topic.questions.length,
		};
	});
};

export const viewData: ViewData[] = extractViewData(quizDB);
