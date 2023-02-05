type Topic = {
	text: string;
	questions: Question[];
};
type Question = {
	categories: string[];
	text: string;
	answers: Answer[];
};
type Answer = {
	text: string;
	isCorrect: boolean;
};
