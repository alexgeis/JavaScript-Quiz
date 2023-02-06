import { useContext } from "react";
// import { TopicContext } from "../../components/TopicContext";
import { useTopic } from "../../components/TopicContext";
import { getTopicData } from "../../data/helpers/extractViewData";

function JavascriptPage() {
	const { topic, setTopic, subText, setSubText } = useTopic();
	setTopic("JavaScript");

	const javascriptData = getTopicData("javascript");
	console.log(javascriptData);

	return <div>Welcome to the Javascript Quiz Page!</div>;
}

export default JavascriptPage;
