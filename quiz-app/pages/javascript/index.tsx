import { useEffect, useState } from "react";
import { useTopic } from "../../context/TopicContext";
import { getTopicData } from "../../data/helpers/extractViewData";
import { shuffleArray } from "../../data/helpers/shuffleArray";
import Questions from "../../components/Questions";

function JavascriptPage() {
	const { topic, setTopic, setSubText, topicQuestions, setTopicQuestions } =
		useTopic();

	// useEffect((): void => {
	// 	setTopic(pageTopic);
	// setSubText("Choose an answer below");
	// });

	// useEffect((): void => {
	// 	const fetchTopicData = async () => {
	// 		try {
	// 			const { questions } = await getTopicData(topic);

	// 			const shuffledArray = shuffleArray(questions);

	// 			setTopicQuestions(shuffledArray);
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	};
	// 	fetchTopicData();
	// }, [topic]);

	const [index, setIndex] = useState<number>(0);

	return (
		<>
			<Questions
				questionTxt={topicQuestions[index]?.text || "No question text"}
				answers={topicQuestions[index]?.answers || []}
				index={index + 1}
				questionsLength={topicQuestions.length || 1}
			/>
		</>
	);
}

export default JavascriptPage;
