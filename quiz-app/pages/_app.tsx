import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { TopicProvider } from "../context/TopicContext";
import { DarkModeContextProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TopicProvider>
			<DarkModeContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</DarkModeContextProvider>
		</TopicProvider>
	);
}
