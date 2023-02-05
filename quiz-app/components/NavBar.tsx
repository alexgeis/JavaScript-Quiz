import { useState } from "react";
import styles from "./NavBar.module.css";

import Link from "next/link";

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
