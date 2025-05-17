import { Moon, Sun } from "lucide-react";

import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle({ style }: { style?: React.CSSProperties }) {
	const { setTheme } = useTheme();

	const handleThemeChange = (theme: "light" | "dark" | "system") => {
		setTheme(theme);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					style={style}
					aria-label="Toggle theme"
				>
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem
					onClick={() => handleThemeChange("light")}
					onKeyDown={(e) => e.key === "Enter" && handleThemeChange("light")}
					role="menuitem"
					tabIndex={0}
				>
					<Sun className="mr-2 h-4 w-4" />
					Light
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleThemeChange("dark")}
					onKeyDown={(e) => e.key === "Enter" && handleThemeChange("dark")}
					role="menuitem"
					tabIndex={0}
				>
					<Moon className="mr-2 h-4 w-4" />
					Dark
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleThemeChange("system")}
					onKeyDown={(e) => e.key === "Enter" && handleThemeChange("system")}
					role="menuitem"
					tabIndex={0}
				>
					<span className="mr-2">🖥️</span>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
