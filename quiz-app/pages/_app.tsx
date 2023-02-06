import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { TopicProvider } from "../components/TopicContext";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<TopicProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</TopicProvider>
	);
}
