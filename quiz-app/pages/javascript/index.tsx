import { useContext, useEffect, useState } from "react";
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

	const [index, setIndex] = useState<number>(0);

	return (
		<>
			<Questions
				questionTxt={topicQuestions[index].text}
				answers={topicQuestions[index].answers}
			/>
		</>
	);
}

export default JavascriptPage;
