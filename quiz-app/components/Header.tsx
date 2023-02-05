import styles from "./Header.module.css";

type HeaderProps = {
	mainText: string;
	subText: string;
};

function Header({ mainText, subText }: HeaderProps) {
	return (
		<header className={styles.wrapper}>
			<h1>{mainText}</h1>
			<h2>{subText}</h2>
		</header>
	);
}

export { Header };
