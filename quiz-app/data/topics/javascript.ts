export const javascriptQs: Question[] = [
	{
		id: self.crypto.randomUUID(),
		categories: ["History"],
		text: "Who developed Javascript?",
		answers: [
			{
				text: "Brenden Eich",
				isCorrect: true,
			},
			{
				text: "Bill Gates",
				isCorrect: false,
			},
			{
				text: "Linus Torvald",
				isCorrect: false,
			},
			{
				text: "Ada Lovelace",
				isCorrect: false,
			},
		],
	},
	{
		id: self.crypto.randomUUID(),
		categories: ["Assignment"],
		text: "Which of these is an assignment operator?",
		answers: [
			{
				text: "!==",
				isCorrect: false,
			},
			{
				text: "===",
				isCorrect: false,
			},
			{
				text: "==",
				isCorrect: false,
			},
			{
				text: "=",
				isCorrect: true,
			},
		],
	},
];
