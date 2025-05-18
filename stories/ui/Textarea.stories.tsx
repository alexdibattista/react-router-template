import type { Meta, StoryObj } from "@storybook/react";
import type React from "react";
import { useEffect, useState } from "react";

import { Label } from "../../app/components/ui/label";
import { cn } from "../../app/lib/utils";

import { Textarea } from "./Textarea";
import "./Textarea.css";

// Define the interface for story props
interface TextareaStoryProps {
	className?: string;
}

// Create a meta object for the Textarea stories
const meta = {
	title: "UI/Textarea",
	component: Textarea,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<TextareaStoryProps>;

export default meta;
type Story = StoryObj<typeof Textarea>;

// Default Textarea
export const Default: Story = {
	render: () => (
		<div className="textarea-story-container">
			<div className="textarea-story-section">
				<h3>Default Textarea</h3>
				<div className="textarea-story-description">
					A simple textarea component for multiline text input.
				</div>

				<div className="textarea-story-card">
					<div className="textarea-story-demo">
						<Textarea placeholder="Type your message here." />
					</div>
					<p className="textarea-story-info">
						The default textarea provides a clean, accessible way for users to
						input multi-line text. It's commonly used for longer form responses,
						comments, or descriptions.
					</p>
				</div>
			</div>
		</div>
	),
};

// Textarea with Label
export const WithLabel: Story = {
	render: () => (
		<div className="textarea-story-container">
			<div className="textarea-story-section">
				<h3>Textarea with Label</h3>
				<div className="textarea-story-description">
					A textarea component with an associated label for better
					accessibility.
				</div>

				<div className="textarea-story-card">
					<div className="textarea-story-demo">
						<div className="textarea-story-label-row">
							<Label htmlFor="message">Your message</Label>
							<Textarea id="message" placeholder="Type your message here." />
						</div>

						<div className="textarea-story-label-row">
							<Label htmlFor="feedback">Feedback</Label>
							<Textarea
								id="feedback"
								placeholder="Please provide your feedback about our service."
							/>
						</div>
					</div>
					<p className="textarea-story-info">
						Adding a label to a textarea improves accessibility and provides
						context to users about what information should be entered.
					</p>
				</div>
			</div>
		</div>
	),
};

// Disabled Textarea
export const Disabled: Story = {
	render: () => (
		<div className="textarea-story-container">
			<div className="textarea-story-section">
				<h3>Disabled Textarea</h3>
				<div className="textarea-story-description">
					A textarea in the disabled state.
				</div>

				<div className="textarea-story-card">
					<div className="textarea-story-demo">
						<Textarea
							disabled
							placeholder="This textarea is disabled."
							defaultValue="You cannot edit this content."
						/>
					</div>
					<p className="textarea-story-info">
						Disabled textareas are used to indicate that a field is not
						available for interaction. They maintain the same visual appearance
						as regular textareas but with reduced opacity.
					</p>
				</div>
			</div>
		</div>
	),
};

// Textarea with Default Value
export const WithDefaultValue: Story = {
	render: () => (
		<div className="textarea-story-container">
			<div className="textarea-story-section">
				<h3>Textarea with Default Value</h3>
				<div className="textarea-story-description">
					A textarea pre-populated with a default value.
				</div>

				<div className="textarea-story-card">
					<div className="textarea-story-demo">
						<Textarea defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
					</div>
					<p className="textarea-story-info">
						Pre-populating a textarea with a default value is useful for editing
						existing content, providing examples, or suggesting the type of
						information that should be entered.
					</p>
				</div>
			</div>
		</div>
	),
};

// Textarea with Character Count
export const WithCharacterCount: Story = {
	render: () => {
		const [value, setValue] = useState("");
		const [count, setCount] = useState(0);
		const maxLength = 280;

		useEffect(() => {
			setCount(value.length);
		}, [value]);

		return (
			<div className="textarea-story-container">
				<div className="textarea-story-section">
					<h3>Textarea with Character Count</h3>
					<div className="textarea-story-description">
						A textarea that displays the current character count.
					</div>

					<div className="textarea-story-card">
						<div className="textarea-story-demo">
							<div className="textarea-with-counter">
								<Label htmlFor="tweet" className="mb-2">
									What's happening?
								</Label>
								<Textarea
									id="tweet"
									placeholder="Type your tweet here."
									maxLength={maxLength}
									value={value}
									onChange={(e) => setValue(e.target.value)}
									className={count > maxLength ? "border-destructive" : ""}
								/>
								<div
									className={cn(
										"textarea-story-character-count",
										count > maxLength && "textarea-counter-limit",
									)}
								>
									{count}/{maxLength}
								</div>
							</div>
						</div>
						<p className="textarea-story-info">
							Adding a character counter to a textarea provides immediate
							feedback about the length of the text and helps users stay within
							character limits for platforms like Twitter or other
							character-restricted inputs.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Textarea Sizes
export const Sizes: Story = {
	render: () => (
		<div className="textarea-story-container">
			<div className="textarea-story-section">
				<h3>Textarea Sizes</h3>
				<div className="textarea-story-description">
					Textareas with different heights for various use cases.
				</div>

				<div className="textarea-story-card">
					<div className="textarea-story-demo">
						<div className="textarea-story-variants">
							<div className="textarea-story-variant-row">
								<span className="textarea-story-variant-label">
									Small (2 rows)
								</span>
								<Textarea
									placeholder="A small textarea..."
									className="min-h-[60px]"
								/>
							</div>

							<div className="textarea-story-variant-row">
								<span className="textarea-story-variant-label">
									Medium (default)
								</span>
								<Textarea placeholder="A default size textarea..." />
							</div>

							<div className="textarea-story-variant-row">
								<span className="textarea-story-variant-label">
									Large (8 rows)
								</span>
								<Textarea
									placeholder="A large textarea for longer content..."
									className="min-h-[160px]"
								/>
							</div>
						</div>
					</div>
					<p className="textarea-story-info">
						Adjusting the height of textareas can help indicate to users the
						expected length of input. Smaller textareas are suitable for brief
						responses, while larger ones encourage more detailed input.
					</p>
				</div>
			</div>
		</div>
	),
};

// Textarea with Validation
export const WithValidation: Story = {
	render: () => {
		const [value, setValue] = useState("");
		const [error, setError] = useState<string | null>(null);

		const validateInput = (input: string) => {
			if (!input.trim()) {
				setError("This field cannot be empty");
			} else if (input.length < 20) {
				setError("Please provide at least 20 characters");
			} else {
				setError(null);
			}
		};

		const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			const newValue = e.target.value;
			setValue(newValue);
			validateInput(newValue);
		};

		const handleBlur = () => {
			validateInput(value);
		};

		return (
			<div className="textarea-story-container">
				<div className="textarea-story-section">
					<h3>Textarea with Validation</h3>
					<div className="textarea-story-description">
						A textarea with basic validation logic.
					</div>

					<div className="textarea-story-card">
						<div className="textarea-story-demo">
							<div className="textarea-story-input-group">
								<Label htmlFor="feedback-required" className="mb-2">
									Your Feedback (min 20 characters)
								</Label>
								<Textarea
									id="feedback-required"
									placeholder="Please provide detailed feedback..."
									value={value}
									onChange={handleChange}
									onBlur={handleBlur}
									aria-invalid={!!error}
									className={error ? "border-destructive" : ""}
								/>
								{error && (
									<p className="text-destructive text-sm mt-1">{error}</p>
								)}
							</div>
						</div>
						<p className="textarea-story-info">
							Adding validation to textareas helps ensure that users provide the
							required information in the correct format. This example shows
							basic validation for a minimum character count.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Dark Theme Textarea
export const DarkTheme: Story = {
	render: () => (
		<div className="textarea-story-container textarea-story-dark">
			<div className="textarea-story-section">
				<h3>Dark Theme Textarea</h3>
				<div className="textarea-story-description">
					Textarea components styled for dark mode interfaces.
				</div>

				<div className="textarea-story-card">
					<div className="textarea-story-demo">
						<div className="textarea-story-label-row">
							<Label htmlFor="message-dark">Your message</Label>
							<Textarea
								id="message-dark"
								placeholder="Type your message here."
							/>
						</div>

						<div className="textarea-story-label-row">
							<Label htmlFor="disabled-dark">Disabled</Label>
							<Textarea
								id="disabled-dark"
								placeholder="This textarea is disabled."
								disabled
							/>
						</div>
					</div>
					<p className="textarea-story-info">
						Dark theme textareas provide the same functionality as light theme
						textareas but are styled to match dark mode interfaces. This ensures
						a consistent user experience across different color schemes.
					</p>
				</div>
			</div>
		</div>
	),
};
