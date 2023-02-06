import { useContext, useEffect } from "react";
// import { TopicContext } from "../../components/TopicContext";
import { useTopic } from "../../context/TopicContext";
import { getTopicData } from "../../data/helpers/extractViewData";
import Questions from "../../components/Questions";

function JavascriptPage() {
	const { topic, setTopic, setSubText, topicQuestions, setTopicQuestions } =
		useTopic();

	useEffect((): void => {
		const getTopicDataAsync = async () => {
			const { text, questions } = await getTopicData(topic);
			setTopic(text);
			setTopicQuestions(questions);
			setSubText("Choose an answer below");
		};
		getTopicDataAsync();
	});

	console.log("questions", topicQuestions[0]);
	return (
		<>
			<div>Welcome to the Javascript Quiz Page!</div>
			{/* <Questions
				questionTxt={"question text"}
				answers={[
					{ text: "Answer 1", isCorrect: false },
					{ text: "Answer 2", isCorrect: true },
				]}
			/> */}
			<Questions
				questionTxt={topicQuestions[0].text}
				answers={topicQuestions[0].answers}
			/>
		</>
	);
}

export default JavascriptPage;
