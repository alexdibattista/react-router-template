import { Button } from "~/components/ui/button";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<Button>Click me</Button>
		</main>
	);
}
