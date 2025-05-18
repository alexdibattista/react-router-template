import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { CalendarIcon, CheckIcon, GlobeIcon, UserIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../app/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../../app/components/ui/form";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectSeparator,
	SelectTrigger,
	SelectValue,
} from "./Select";

import "./Select.css";

const meta = {
	title: "UI/Select",
	component: Select,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		disabled: {
			control: "boolean",
			defaultValue: false,
		},
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Select
export const Default: Story = {
	args: {
		disabled: false,
	},
	render: (args) => {
		const [value, setValue] = useState("");

		return (
			<div className="select-story-container">
				<div className="select-story-section">
					<h3>Default Select</h3>
					<div className="select-story-description">
						A basic select component with a list of options.
					</div>

					<div className="select-story-demo">
						<Select
							value={value}
							onValueChange={setValue}
							disabled={args.disabled}
						>
							<SelectTrigger className="w-[220px]">
								<SelectValue placeholder="Select a fruit" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>Fruits</SelectLabel>
									<SelectItem value="apple">Apple</SelectItem>
									<SelectItem value="banana">Banana</SelectItem>
									<SelectItem value="orange">Orange</SelectItem>
									<SelectItem value="pear">Pear</SelectItem>
									<SelectItem value="strawberry">Strawberry</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<div className="select-story-value-display">
							Selected value: {value ? value : "none"}
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Select with Grouped Options
export const GroupedOptions: Story = {
	args: {
		disabled: false,
	},
	render: (args) => {
		const [value, setValue] = useState("");

		return (
			<div className="select-story-container">
				<div className="select-story-section">
					<h3>Grouped Options</h3>
					<div className="select-story-description">
						A select component with options organized into groups.
					</div>

					<div className="select-story-demo">
						<Select
							value={value}
							onValueChange={setValue}
							disabled={args.disabled}
						>
							<SelectTrigger className="w-[220px]">
								<SelectValue placeholder="Select a timezone" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectLabel>North America</SelectLabel>
									<SelectItem value="est">
										Eastern Standard Time (EST)
									</SelectItem>
									<SelectItem value="cst">
										Central Standard Time (CST)
									</SelectItem>
									<SelectItem value="mst">
										Mountain Standard Time (MST)
									</SelectItem>
									<SelectItem value="pst">
										Pacific Standard Time (PST)
									</SelectItem>
								</SelectGroup>
								<SelectSeparator />
								<SelectGroup>
									<SelectLabel>Europe</SelectLabel>
									<SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
									<SelectItem value="cet">
										Central European Time (CET)
									</SelectItem>
									<SelectItem value="eet">
										Eastern European Time (EET)
									</SelectItem>
								</SelectGroup>
								<SelectSeparator />
								<SelectGroup>
									<SelectLabel>Asia/Pacific</SelectLabel>
									<SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
									<SelectItem value="aest">
										Australian Eastern Standard Time (AEST)
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<div className="select-story-value-display">
							Selected timezone: {value ? value : "none"}
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Select Sizes
export const SelectSizes: Story = {
	args: {
		disabled: false,
	},
	render: (args) => (
		<div className="select-story-container">
			<div className="select-story-section">
				<h3>Select Sizes</h3>
				<div className="select-story-description">
					The select component is available in different sizes.
				</div>

				<div className="select-story-demo">
					<div className="select-story-grid">
						<div className="select-story-grid-item">
							<div className="select-story-option-label">Default Size</div>
							<Select defaultValue="default" disabled={args.disabled}>
								<SelectTrigger>
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="default">Default</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="select-story-grid-item">
							<div className="select-story-option-label">Small Size</div>
							<Select defaultValue="small" disabled={args.disabled}>
								<SelectTrigger size="sm">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="small">Small</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
			</div>
		</div>
	),
};

// Select with Icons
export const WithIcons: Story = {
	args: {
		disabled: false,
	},
	render: (args) => {
		const [value, setValue] = useState("");

		return (
			<div className="select-story-container">
				<div className="select-story-section">
					<h3>Select with Icons</h3>
					<div className="select-story-description">
						A select component with icons in the options.
					</div>

					<div className="select-story-demo">
						<Select
							value={value}
							onValueChange={setValue}
							disabled={args.disabled}
						>
							<SelectTrigger className="w-[220px]">
								<SelectValue placeholder="Select a language" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="en">
									<div className="flex items-center">
										<GlobeIcon className="mr-2 size-4" />
										<span>English</span>
									</div>
								</SelectItem>
								<SelectItem value="fr">
									<div className="flex items-center">
										<GlobeIcon className="mr-2 size-4" />
										<span>French</span>
									</div>
								</SelectItem>
								<SelectItem value="de">
									<div className="flex items-center">
										<GlobeIcon className="mr-2 size-4" />
										<span>German</span>
									</div>
								</SelectItem>
								<SelectItem value="es">
									<div className="flex items-center">
										<GlobeIcon className="mr-2 size-4" />
										<span>Spanish</span>
									</div>
								</SelectItem>
								<SelectItem value="it">
									<div className="flex items-center">
										<GlobeIcon className="mr-2 size-4" />
										<span>Italian</span>
									</div>
								</SelectItem>
							</SelectContent>
						</Select>

						<div className="select-story-value-display">
							Selected language: {value ? value : "none"}
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Form Integration
export const FormIntegration: Story = {
	args: {
		disabled: false,
	},
	render: (args) => {
		// Define the form schema
		const formSchema = z.object({
			accountType: z.string({
				required_error: "Please select an account type.",
			}),
			language: z.string({
				required_error: "Please select a language.",
			}),
		});

		// Define form
		const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
		});

		// Handle form submission
		function onSubmit(values: z.infer<typeof formSchema>) {
			alert(JSON.stringify(values, null, 2));
		}

		return (
			<div className="select-story-container">
				<div className="select-story-section">
					<h3>Form Integration</h3>
					<div className="select-story-description">
						A select component integrated with React Hook Form and Zod for
						validation.
					</div>

					<div className="select-story-demo">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="select-story-form"
							>
								<FormField
									control={form.control}
									name="accountType"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Account Type</FormLabel>
											<Select
												disabled={args.disabled}
												onValueChange={field.onChange}
												value={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select account type" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="personal">
														<div className="flex items-center">
															<UserIcon className="mr-2 size-4" />
															<span>Personal</span>
														</div>
													</SelectItem>
													<SelectItem value="business">
														<div className="flex items-center">
															<UserIcon className="mr-2 size-4" />
															<span>Business</span>
														</div>
													</SelectItem>
												</SelectContent>
											</Select>
											<FormDescription>
												Select the type of account you want to create.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="language"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Language</FormLabel>
											<Select
												disabled={args.disabled}
												onValueChange={field.onChange}
												value={field.value}
											>
												<FormControl>
													<SelectTrigger>
														<SelectValue placeholder="Select language" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem value="en">English</SelectItem>
													<SelectItem value="fr">French</SelectItem>
													<SelectItem value="de">German</SelectItem>
													<SelectItem value="es">Spanish</SelectItem>
													<SelectItem value="it">Italian</SelectItem>
												</SelectContent>
											</Select>
											<FormDescription>
												This is the language that will be used in the
												application.
											</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type="submit">Submit</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>
		);
	},
};

// Custom Styled Select
export const CustomStyled: Story = {
	args: {
		disabled: false,
	},
	render: (args) => {
		const [value, setValue] = useState("");

		return (
			<div className="select-story-container">
				<div className="select-story-section">
					<h3>Custom Styled Select</h3>
					<div className="select-story-description">
						A select component with custom styling and a dark theme.
					</div>

					<div className="select-story-demo bg-zinc-900 p-6 text-white">
						<Select
							value={value}
							onValueChange={setValue}
							disabled={args.disabled}
						>
							<SelectTrigger className="w-[220px] bg-zinc-800 border-zinc-700 text-zinc-200">
								<SelectValue placeholder="Select a theme" />
							</SelectTrigger>
							<SelectContent className="bg-zinc-800 border-zinc-700 text-zinc-200">
								<SelectGroup>
									<SelectLabel className="text-zinc-400">Themes</SelectLabel>
									<SelectItem
										className="focus:bg-zinc-700 focus:text-zinc-200"
										value="dark"
									>
										Dark
									</SelectItem>
									<SelectItem
										className="focus:bg-zinc-700 focus:text-zinc-200"
										value="light"
									>
										Light
									</SelectItem>
									<SelectItem
										className="focus:bg-zinc-700 focus:text-zinc-200"
										value="system"
									>
										System
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<div className="mt-4 p-3 rounded bg-zinc-800 text-zinc-300 font-mono text-xs">
							Selected theme: {value ? value : "none"}
						</div>
					</div>
				</div>
			</div>
		);
	},
};
