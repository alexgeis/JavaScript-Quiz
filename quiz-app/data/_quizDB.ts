import { javascriptQs } from "./topics/javascript";
import { cssQs } from "./topics/css";
// import { awsQs } from "./aws";
// import { nodeQs } from "./node";
// import { reactQs } from "./react";

export const quizDB: Topic[] = [
	{ text: "JavaScript", questions: [...javascriptQs] },
	{ text: "CSS", questions: [...cssQs] },
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
