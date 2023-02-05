import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export default function Layout({ children }: any) {
	return (
		<>
			<NavBar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
