import { About, Jumbotron, Navbar, Article } from "@/components";
import { Fragment } from "react";

export default function Home() {
	return (
		<Fragment>
			<Navbar />
			<Jumbotron />
			<About />
			<Article />
		</Fragment>
	);
}
