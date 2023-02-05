"use client";
import { useState } from "react";
import styles from "Layout.module.css";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }: any) {
	const [topic, setTopic] = useState<string>(
		"Take a quiz - test your knowledge"
	);
	const [subText, setSubText] = useState<string>(
		"Questions are sorted by category"
	);

	return (
		<>
			<NavBar />
			<Header
				mainText={topic}
				subText={subText}
			/>
			<main>{children}</main>
			<Footer />
		</>
	);
}
