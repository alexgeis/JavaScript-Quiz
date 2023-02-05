import styles from "./QuizTopics.module.css";
import Link from "next/link";

const data: string[] = ["aws", "JavaScript", "http", "Python", "Java"];

function QuizTopics() {
	return (
		<main className={styles.wrapper}>
			{data.map((data, index) => {
				return (
					<Link
						key={index}
						href={`/${data}`}
					>
						<p className={styles.topicName}>{data}</p>
					</Link>
				);
			})}
		</main>
	);
}

export { QuizTopics };
