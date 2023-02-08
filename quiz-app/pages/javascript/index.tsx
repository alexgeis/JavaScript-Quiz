import { useContext, useEffect, useState } from "react";
import { useTopic } from "../../context/TopicContext";
import { getTopicData } from "../../data/helpers/extractViewData";
import { shuffleArray } from "../../data/helpers/shuffleArray";
import Questions from "../../components/Questions";

function JavascriptPage() {
	const { topic, setTopic, setSubText, topicQuestions, setTopicQuestions } =
		useTopic();

	useEffect((): void => {
		setTopic("JavaScript");
	});

	useEffect((): void => {
		const getTopicDataAsync = () => {
			try {
				const { questions } = getTopicData(topic);
				// setTopic(text);

				// const shuffledArray = shuffleArray(questions);
				// console.log(shuffledArray);
				// setTopicQuestions(shuffledArray);

				setTopicQuestions(questions);
				setSubText("Choose an answer below");
			} catch (error) {
				console.error(error);
			}
		};
		getTopicDataAsync();
	});

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
