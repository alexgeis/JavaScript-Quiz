type Topic = {
	name: string;
	questions: Question[];
};
type Question = {
	id: string;
	categories: string[];
	text: string;
	answers: Answer[];
	userCorrect: boolean;
};
type Answer = {
	text: string;
	isCorrect: boolean;
};

type PrevTopic = {
	name: string;
	questions: string[];
	currQuesIndex: number;
};
