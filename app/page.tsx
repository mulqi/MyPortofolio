import {
	About,
	Article,
	Contact,
	Footer,
	Jumbotron,
	Navbar,
} from "@/components";

export default function Home() {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<About />
			<Article />
			<Contact />
			<Footer />
		</>
	);
}
