type Topic = {
	name: string;
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

type PrevTopic = {
	name: string;
	questions: Question[];
	currQuesIndex: number;
};
