import { useContext, useEffect } from "react";
// import { TopicContext } from "../../components/TopicContext";
import { useTopic } from "../../components/TopicContext";
import { getTopicData } from "../../data/helpers/extractViewData";

function JavascriptPage() {
	const { topic, setTopic, subText, setSubText } = useTopic();
	useEffect(() => {
		setTopic("JavaScript");
		setSubText("Choose an answer below");
	}, [setTopic, setSubText]);

	const javascriptData = getTopicData(topic);

	return <div>Welcome to the Javascript Quiz Page!</div>;
}

export default JavascriptPage;
