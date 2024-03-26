import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
	const buffer = await readFile(
		path.join(process.cwd(), "/assets/documents", "a-mulqy.pdf")
	);

	const headers = new Headers();
	headers.append("Content-Disposition", 'attachment; filename="a-mulqy.pdf"');
	headers.append("Content-Type", "application/pdf");

	return new Response(buffer, {
		headers,
	});
}
