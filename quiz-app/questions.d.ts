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
	questionIds: string[];
	currQuesIndex: number;
};

type QuestionRef = {
	id: string;
	answered: number;
	answeredCorrect: number;
};

type TopicProgress = {
	topicName: string;
	questionRefs: QuestionRef[];
	currQuesIndex: number;
};
// PastQuizProgress = TopicProgress[]
