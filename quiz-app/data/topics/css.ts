export const cssQs: Question[] = [
	{
		id: self.crypto.randomUUID(),
		categories: ["History"],
		text: "Who developed CSS?",
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
		userCorrect: false,
	},
];
