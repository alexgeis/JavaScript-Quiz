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

	const handleNext = () => {
		setIndex(index + 1);
	};
	const handlePrevious = () => {
		setIndex(index - 1);
	};

	// PSEUDO
	// topic change
	// if new topic, generate the randomized question array and localStorage.setItem(randomArray)
	// if old topic, fetch previous array
	// use state index variable to navigate through array
	// handleCorrect and handleIncorrect should affect index AND total score (correct / total)
	// store current state (index, score, and question array being used) in localStorage prevTopics data
	// 		store by id for each question, not the full question
	// prevTopics - each question should have parameter/status for tracking user getting the question right or wrong
	// answer order should be randomized (each time question comes up? - I think preferable to with each new shuffle of the question array)

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
