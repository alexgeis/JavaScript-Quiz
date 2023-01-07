import styles from "./Header.module.css";

function Header() {
	return (
		<header className={styles.wrapper}>
			<h1>Main text element</h1>
			<h2>subheader</h2>
		</header>
	);
}

export { Header };
