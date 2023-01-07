import styles from "./QuizTopics.module.css";

const data: string[] = ["aws", "JavaScript", "http", "Python", "Java"];
function QuizTopics() {
	return (
		<main className={styles.wrapper}>
			{data.map((data, index) => {
				return <p key={index}>{data}</p>;
			})}
		</main>
	);
}

export { QuizTopics };
