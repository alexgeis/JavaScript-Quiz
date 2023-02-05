import styles from "./QuizTopics.module.css";
import Link from "next/link";
import { allTopicNames } from "../data/helpers/extractViewData";

function QuizTopics() {
	return (
		<section className={styles.wrapper}>
			{allTopicNames.map((name, index) => {
				return (
					<Link
						key={index}
						href={`/${name.toLowerCase()}`}
					>
						<p className={styles.topicName}>{name}</p>
					</Link>
				);
			})}
		</section>
	);
}

export { QuizTopics };
