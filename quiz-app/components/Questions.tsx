import styles from "./Questions.module.css";

type QuestionProps = {
	questionTxt: string;
	answers: Answer[];
};

export default function Questions({ questionTxt, answers }: QuestionProps) {
	const handleCorrect = () => {
		alert("Correct!");
	};
	const handleIncorrect = () => {
		alert("Incorrect!");
	};
	return (
		<section>
			<div>
				<p>question progress</p>
				<div>progress bar visual</div>
			</div>
			<div>
				<p>{questionTxt}</p>
				{/* map through answers */}
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
