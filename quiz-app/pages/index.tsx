import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { QuizTopics } from "../components/QuizTopics";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<QuizTopics />
		</>
	);
}
