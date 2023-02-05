"use client";
import { ReactNode, useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "Layout.module.css";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Footer } from "./Footer";

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const [topic, setTopic] = useState<string>(
		"Take a quiz - test your knowledge"
	);
	const [subText, setSubText] = useState<string>(
		"Questions are sorted by category"
	);

	const router = useRouter();
	const currentUrlPath = router.pathname.replace(/\//, "");

	useEffect(() => {
		if (currentUrlPath !== "") setTopic(currentUrlPath);
		else {
			setTopic("Take a quiz - test your knowledge");
			setSubText("Questions are sorted by category");
		}
	}, [currentUrlPath]);

	return (
		<>
			<Head>
				<title>DevTrain</title>
				<meta
					name="DevTrain"
					content="Quiz application for programmers"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
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
