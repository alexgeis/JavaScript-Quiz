import styles from "./Questions.module.css";

type QuestionProps = {
	questionTxt: string;
	answers: Answer[];
	index: number;
	questionsLength: number;
};

export default function Questions({
	questionTxt,
	answers,
	index,
	questionsLength,
}: QuestionProps) {
	const handleCorrect = () => {
		alert("Correct!");
	};
	const handleIncorrect = () => {
		alert("Incorrect!");
	};

	const progressPercent: number = (index / questionsLength) * 100;

	return (
		<section>
			<div>
				<p>
					Question {index} of {questionsLength}
				</p>
				<div className={styles.questionProgress}>
					<div
						className={styles.questionProgressCurrent}
						style={{
							width: `${progressPercent}%`,
						}}
					></div>
					<div className={styles.questionProgressTotal}></div>
				</div>
			</div>
			<div>
				<p>{questionTxt}</p>
				{answers.map((answer: Answer, i: number) => {
					if (answer.isCorrect) {
						return (
							<div
								className={styles.correct}
								key={i}
								onClick={handleCorrect}
							>
								<p>{answer.text}</p>
							</div>
						);
					} else
						return (
							<div
								className={""}
								key={i}
								onClick={handleIncorrect}
							>
								<p>{answer.text}</p>
							</div>
						);
				})}
			</div>
			<div>
				<button>Previous</button>
				<button>Next</button>
			</div>
			<div>
				<button>See All Categories</button>
			</div>
		</section>
	);
}
