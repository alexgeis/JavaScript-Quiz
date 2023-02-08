"use client";
import { useEffect } from "react";
import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useTopic } from "../context/TopicContext";

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const { topic, setTopic, subText, setSubText } = useTopic();

	const router: NextRouter = useRouter();
	const currentUrlPath: string = router.pathname.replace(/\//, "");

	console.log(currentUrlPath);
	useEffect(() => {
		if (currentUrlPath !== "") {
			setTopic(currentUrlPath);
		} else {
			setTopic("Take a quiz - test your knowledge");
		}
	}, [currentUrlPath, setTopic, setSubText]);

	useEffect(() => {
		if (currentUrlPath !== "") setSubText("Choose an answer below");
		else setSubText("Questions are sorted by category");
	}, [topic]);

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
			<main>
				{children}
				{/* <TopicContext.Provider value={topic}>{children}</TopicContext.Provider> */}
			</main>
			<Footer />
		</>
	);
}
