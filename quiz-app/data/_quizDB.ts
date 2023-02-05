import { javascriptQs } from "./topics/javascript";
// import { awsQs } from "./aws";
// import { cssQs } from "./css";
// import { nodeQs } from "./node";
// import { reactQs } from "./react";

export const quizDB: Topic[] = [
	{ text: "JavaScript", questions: [...javascriptQs] },
];

// TOPIC OBJECT
// {
// 	text: string;
// 	questions: [
// 		{
// 			categories: string[];
// 			text: string;
// 			answers: [
// 				{
// 					text: string;
// 					isCorrect: boolean;
// 				}
// 			]
// 		}
// 	]
// }
