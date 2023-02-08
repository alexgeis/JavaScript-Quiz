import { useState } from "react";
import styles from "./NavBar.module.css";
import trainLogo from "../assets/icons/nav/train-logo.png";
import Image from "next/image";
import Link from "next/link";
import { useTopic } from "../context/TopicContext";

export function NavBar() {
	const [hamOpen, setHamOpen] = useState(false);
	const hamburgerMenuToggle = () => {
		setHamOpen(!hamOpen);
	};
	const closeMenu = () => {
		setHamOpen(false);
	};

	const { setTopic } = useTopic();

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
	return (
		<div className={styles.wrapper}>
			<div className={styles.logoWrapper}>
				<Link
					href="/"
					className={styles.logo}
					onClick={() => setTopic("")}
				>
					<Image
						src={trainLogo}
						alt="train logo"
						className={styles.logoImage}
					/>
					DevTrain
				</Link>
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
