type Topic = {
	text: string;
	questions: Question[];
};
type Question = {
	category: string;
	text: string;
	answers: Answer[];
};
type Answer = {
	text: string;
	isCorrect: boolean;
};

type ViewData = {
	topicName: string;
	questionsLength: number;
	categories: string[];
	questions: Question[];
};
