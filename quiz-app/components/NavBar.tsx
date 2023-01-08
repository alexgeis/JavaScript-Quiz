import { useState } from "react";
import styles from "./NavBar.module.css";

import Link from "next/link";

type Answer = {
	answerTxt: string;
	correct: boolean;
};
type Question = {
	technology: string;
	questionTxt: string;
	answers: Answer[];
};

export function NavBar() {
	const [hamOpen, setHamOpen] = useState(false);

	//TODO: update with better type
	const navLinkHandler = ({ currentTarget }: any) => {
		currentTarget.classList.add("active");
		// const tag: HTMLElement = e.currentTarget
		// if (!filter.includes(tag)) {
		//     setFilter([...filter, tag]);
		// } else {
		//     const filteredArray = filter.filter((item) => item !== tag);
		//     setFilter([...filteredArray]);
		// }
	};

	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	const questions: Question[] = [
		{
			technology: "JavaScript",
			questionTxt: "Who developed Javascript?",
			answers: [
				{
					answerTxt: "Brenden Eich",
					correct: true,
				},
				{
					answerTxt: "Bill Gates",
					correct: false,
				},
				{
					answerTxt: "Linus Torvald",
					correct: false,
				},
				{
					answerTxt: "Ada Lovelace",
					correct: false,
				},
			],
		},
	];

	return (
		<div className={styles.wrapper}>
			<div className={styles.logoWrapper}>
				<a
					href="/"
					className={styles.logo}
				>
					DevTrain
				</a>
			</div>
			<div className={styles.nav}>
				<Link
					href="/javascript"
					className={styles.navLink}
				>
					SUBMIT A QUESTION
				</Link>
			</div>
		</div>
	);
}
