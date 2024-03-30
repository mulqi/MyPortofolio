import {
	About,
	Article,
	Contact,
	Footer,
	Jumbotron,
	Navbar,
	Squib,
} from "@/components";

export default function Home() {
	return (
		<>
			<Squib />
			<Navbar />
			<Jumbotron />
			<About />
			<Article />
			<Contact />
			<Footer />
		</>
	);
}
