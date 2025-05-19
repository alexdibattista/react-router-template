import type { Meta, StoryObj } from "@storybook/react";
import { Monitor, Moon, Palette, Sun } from "lucide-react";
import { useEffect, useState } from "react";

import { ThemeProvider } from "../../app/components/theme-provider";
import { Button } from "../../app/components/ui/button";

import { ModeToggle } from "./ModeToggle";
import "./ModeToggle.css";

// Define the interface for story props
interface ModeToggleStoryProps {
	className?: string;
}

// Create a meta object for the ModeToggle stories
const meta = {
	title: "Components/ModeToggle",
	component: ModeToggle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<ThemeProvider defaultTheme="light" storageKey="storybook-theme">
				<Story />
			</ThemeProvider>
		),
	],
} satisfies Meta<ModeToggleStoryProps>;

export default meta;
type Story = StoryObj<typeof ModeToggle>;

// Default ModeToggle
export const Default: Story = {
	render: () => (
		<div className="mode-toggle-story-container">
			<div className="mode-toggle-story-section">
				<h3>Default Mode Toggle</h3>
				<div className="mode-toggle-story-description">
					A simple theme toggle component for switching between light, dark, and
					system themes.
				</div>

				<div className="mode-toggle-story-card">
					<div className="mode-toggle-story-demo">
						<div className="mode-toggle-story-row">
							<ModeToggle />
						</div>
					</div>
					<p className="mode-toggle-story-info">
						The default mode toggle provides a dropdown menu with options for
						light, dark, and system themes. The icon changes based on the
						currently selected theme.
					</p>
				</div>
			</div>
		</div>
	),
};

// ModeToggle in Navigation
export const InNavigation: Story = {
	render: () => (
		<div className="mode-toggle-story-container">
			<div className="mode-toggle-story-section">
				<h3>Mode Toggle in Navigation</h3>
				<div className="mode-toggle-story-description">
					A common pattern of using the mode toggle in a navigation bar.
				</div>

				<div className="mode-toggle-story-card">
					<div className="mode-toggle-story-demo">
						<div className="mode-toggle-story-navbar">
							<div className="mode-toggle-story-navbar-brand">Company Name</div>
							<div className="mode-toggle-story-navbar-actions">
								<Button variant="ghost" size="sm">
									Dashboard
								</Button>
								<Button variant="ghost" size="sm">
									Projects
								</Button>
								<Button variant="ghost" size="sm">
									Settings
								</Button>
								<ModeToggle />
							</div>
						</div>
					</div>
					<p className="mode-toggle-story-info">
						The mode toggle is commonly placed in the navigation bar, allowing
						users to easily change the theme from anywhere in the application.
					</p>
				</div>
			</div>
		</div>
	),
};

// ModeToggle with Custom Styling
export const CustomStyling: Story = {
	render: () => (
		<div className="mode-toggle-story-container">
			<div className="mode-toggle-story-section">
				<h3>Mode Toggle with Custom Styling</h3>
				<div className="mode-toggle-story-description">
					Customizing the appearance of the mode toggle with inline styles.
				</div>

				<div className="mode-toggle-story-card">
					<div className="mode-toggle-story-demo">
						<div className="mode-toggle-story-row">
							<ModeToggle
								style={{
									backgroundColor: "var(--primary)",
									borderColor: "transparent",
									color: "var(--primary-foreground)",
								}}
							/>
						</div>
					</div>
					<p className="mode-toggle-story-info">
						The mode toggle can be customized using the style prop to match your
						application's design system. This example shows a toggle with a
						primary color background.
					</p>
				</div>
			</div>
		</div>
	),
};

// ModeToggle Positioned in Different Corners
export const PositionedToggle: Story = {
	render: () => (
		<div className="mode-toggle-story-container">
			<div className="mode-toggle-story-section">
				<h3>Positioned Mode Toggle</h3>
				<div className="mode-toggle-story-description">
					Demonstrating different positioning options for the mode toggle.
				</div>

				<div className="mode-toggle-story-card">
					<div className="mode-toggle-story-demo">
						<div className="mode-toggle-story-position-container">
							<div className="mode-toggle-story-position">
								<span className="mode-toggle-story-position-label">
									Different Positions
								</span>
								<ModeToggle
									style={{ position: "absolute", top: "1rem", left: "1rem" }}
								/>
								<ModeToggle
									style={{ position: "absolute", top: "1rem", right: "1rem" }}
								/>
								<ModeToggle
									style={{ position: "absolute", bottom: "1rem", left: "1rem" }}
								/>
								<ModeToggle
									style={{
										position: "absolute",
										bottom: "1rem",
										right: "1rem",
									}}
								/>
							</div>
						</div>
					</div>
					<p className="mode-toggle-story-info">
						The mode toggle can be positioned in different corners of the
						interface depending on your design requirements. This example shows
						the toggle in all four corners of a container.
					</p>
				</div>
			</div>
		</div>
	),
};

// ModeToggle with Theme Indicator
export const WithThemeIndicator: Story = {
	render: () => {
		const ThemeExample = () => {
			const [currentTheme, setCurrentTheme] = useState("light");

			useEffect(() => {
				const checkTheme = () => {
					const isDark = document.documentElement.classList.contains("dark");
					setCurrentTheme(isDark ? "dark" : "light");
				};

				// Check initially
				checkTheme();

				// Set up a mutation observer to watch for theme changes
				const observer = new MutationObserver((mutations) => {
					for (const mutation of mutations) {
						if (
							mutation.attributeName === "class" &&
							mutation.target === document.documentElement
						) {
							checkTheme();
						}
					}
				});

				observer.observe(document.documentElement, { attributes: true });

				return () => {
					observer.disconnect();
				};
			}, []);

			return (
				<div className="mode-toggle-story-example">
					<h4>Current Theme: {currentTheme}</h4>
					<p>
						Toggle the theme using the dropdown menu to see this indicator
						update.
					</p>
					<ModeToggle />
					<div className="mode-toggle-story-theme-display">
						{`document.documentElement.classList = "${document.documentElement.className}"`}
					</div>
				</div>
			);
		};

		return (
			<div className="mode-toggle-story-container">
				<div className="mode-toggle-story-section">
					<h3>Mode Toggle with Theme Indicator</h3>
					<div className="mode-toggle-story-description">
						Displaying the current theme state along with the toggle.
					</div>

					<div className="mode-toggle-story-card">
						<div className="mode-toggle-story-demo">
							<ThemeExample />
						</div>
						<p className="mode-toggle-story-info">
							This example shows how to create a theme indicator that updates in
							real-time when the theme changes. It uses a MutationObserver to
							detect changes to the document's class list.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// ModeToggle in Dark Theme
export const DarkTheme: Story = {
	render: () => (
		<div className="mode-toggle-story-container mode-toggle-story-container-dark">
			<div className="mode-toggle-story-section">
				<h3>Mode Toggle in Dark Theme</h3>
				<div className="mode-toggle-story-description">
					The appearance of the mode toggle in a dark theme environment.
				</div>

				<div className="mode-toggle-story-card">
					<div className="mode-toggle-story-demo">
						<div className="mode-toggle-story-row">
							<ModeToggle />
						</div>
					</div>
					<p className="mode-toggle-story-info">
						This shows how the mode toggle looks when rendered in a dark theme
						context. The component adapts its styling to maintain good contrast
						and visibility.
					</p>
				</div>
			</div>
		</div>
	),
	parameters: {
		backgrounds: { default: "dark" },
	},
};

// Custom Theme Toggle with Additional Options
export const CustomThemeToggle: Story = {
	render: () => {
		// Custom implementation of the theme toggle with more options
		const CustomModeToggle = () => {
			const themes = [
				{ name: "Light", icon: <Sun className="h-4 w-4" /> },
				{ name: "Dark", icon: <Moon className="h-4 w-4" /> },
				{ name: "System", icon: <Monitor className="h-4 w-4" /> },
				{ name: "High Contrast", icon: <Palette className="h-4 w-4" /> },
			];

			const [activeTheme, setActiveTheme] = useState("Light");

			const handleThemeChange = (theme: string) => {
				setActiveTheme(theme);
				// In a real implementation, this would call setTheme from useTheme
			};

			return (
				<div className="flex flex-col items-center gap-4">
					<div className="flex items-center gap-2">
						<span className="text-sm font-medium">Current theme:</span>
						<span className="text-sm">{activeTheme}</span>
					</div>
					<div className="flex gap-2">
						{themes.map((theme) => (
							<Button
								key={theme.name}
								variant={activeTheme === theme.name ? "default" : "outline"}
								size="sm"
								onClick={() => handleThemeChange(theme.name)}
								className="flex items-center gap-1.5"
							>
								{theme.icon}
								{theme.name}
							</Button>
						))}
					</div>
				</div>
			);
		};

		return (
			<div className="mode-toggle-story-container">
				<div className="mode-toggle-story-section">
					<h3>Custom Theme Toggle</h3>
					<div className="mode-toggle-story-description">
						A custom implementation of the theme toggle with additional options.
					</div>

					<div className="mode-toggle-story-card">
						<div className="mode-toggle-story-demo">
							<div className="mode-toggle-story-row">
								<CustomModeToggle />
							</div>
						</div>
						<p className="mode-toggle-story-info">
							This example shows a custom theme toggle with additional theme
							options. Instead of using a dropdown, it displays all options as
							buttons, allowing users to see all available themes at once.
						</p>
					</div>
				</div>
			</div>
		);
	},
};
