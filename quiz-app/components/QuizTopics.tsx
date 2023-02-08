import styles from "./QuizTopics.module.css";
import Link from "next/link";
import { allTopicNames } from "../data/helpers/extractViewData";
// import { useTopic } from "../context/TopicContext";

function QuizTopics() {
	// const { setTopic } = useTopic();

	return (
		<section className={styles.wrapper}>
			{allTopicNames.map((name, index) => {
				return (
					<Link
						key={index}
						href={`/${name.toLowerCase()}`}
						// onClick={() => setTopic(name)}
					>
						<p className={styles.topicName}>{name}</p>
					</Link>
				);
			})}
		</section>
	);
}

export { QuizTopics };
