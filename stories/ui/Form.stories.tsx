import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../app/components/ui/button";
import { Checkbox } from "../../app/components/ui/checkbox";
import { Input } from "../../app/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../app/components/ui/select";
import { Form } from "./Form";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./Form";

import "./Form.css";

// Simple textarea component for stories
const Textarea = ({
	className,
	...props
}: React.ComponentProps<"textarea">) => (
	<textarea
		className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
		{...props}
	/>
);

// Simple switch component for stories
const Switch = ({
	checked,
	onCheckedChange,
	...props
}: { checked: boolean; onCheckedChange: (checked: boolean) => void }) => (
	<button
		type="button"
		role="switch"
		aria-checked={checked}
		className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${checked ? "bg-primary" : "bg-input"}`}
		onClick={() => onCheckedChange(!checked)}
		{...props}
	>
		<span
			className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`}
		/>
	</button>
);

// Simple radio group components for stories
const RadioGroup = ({
	onValueChange,
	defaultValue,
	className,
	children,
}: {
	onValueChange: (value: string) => void;
	defaultValue?: string;
	className?: string;
	children: React.ReactNode;
}) => <div className={`flex flex-col space-y-2 ${className}`}>{children}</div>;

const RadioGroupItem = ({ value }: { value: string }) => (
	<div className="h-4 w-4 rounded-full border border-primary" />
);

const meta = {
	title: "UI/Form",
	component: Form,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

// Demo handler
const onSubmit = (data: any) => {
	console.log("Form submitted", data);
	alert(JSON.stringify(data, null, 2));
};

export const LoginForm: Story = {
	name: "Login Form",
	render: () => {
		// Use any to avoid TypeScript errors in Storybook context
		const form = useForm<any>({
			defaultValues: {
				email: "",
				password: "",
				rememberMe: false,
			},
		});

		return (
			<div className="form-story-container">
				<h2>Sign In</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Email</FormLabel>
									<FormControl>
										<Input placeholder="hello@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="rememberMe"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel>Remember me</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<div className="form-story-actions">
							<Button type="submit">Sign In</Button>
						</div>
					</form>
				</Form>
			</div>
		);
	},
};

export const RegistrationForm: Story = {
	name: "Registration Form",
	render: () => {
		const form = useForm<any>({
			defaultValues: {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				confirmPassword: "",
				acceptTerms: false,
			},
		});

		return (
			<div className="form-story-container">
				<h2>Create an account</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<div className="form-story-grid">
							<FormField
								control={form.control}
								name="firstName"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="required-field">First name</FormLabel>
										<FormControl>
											<Input placeholder="John" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="lastName"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="required-field">Last name</FormLabel>
										<FormControl>
											<Input placeholder="Doe" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Email</FormLabel>
									<FormControl>
										<Input placeholder="hello@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="********" {...field} />
									</FormControl>
									<FormDescription>At least 8 characters</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">
										Confirm password
									</FormLabel>
									<FormControl>
										<Input type="password" placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="acceptTerms"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0">
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<div className="space-y-1 leading-none">
										<FormLabel className="required-field">
											I accept the terms and conditions
										</FormLabel>
									</div>
								</FormItem>
							)}
						/>
						<div className="form-story-actions">
							<Button type="submit">Create account</Button>
						</div>
					</form>
				</Form>
			</div>
		);
	},
};

export const ProfileForm: Story = {
	name: "Profile Form",
	render: () => {
		const form = useForm<any>({
			defaultValues: {
				username: "",
				bio: "",
				urls: {
					twitter: "",
					github: "",
					website: "",
				},
				notifications: {
					email: false,
					push: false,
					sms: false,
				},
			},
		});

		return (
			<div className="form-story-container">
				<h2>Edit Profile</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Username</FormLabel>
									<FormControl>
										<Input placeholder="username" {...field} />
									</FormControl>
									<FormDescription>Your public display name.</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="bio"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bio</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us about yourself"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Brief description for your profile. Max 160 characters.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="space-y-4">
							<FormLabel>Social Links</FormLabel>
							<FormDescription>Add your social media profiles.</FormDescription>
							<div className="space-y-3">
								<FormField
									control={form.control}
									name="urls.twitter"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Twitter</FormLabel>
											<FormControl>
												<Input
													placeholder="https://twitter.com/username"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="urls.github"
									render={({ field }) => (
										<FormItem>
											<FormLabel>GitHub</FormLabel>
											<FormControl>
												<Input
													placeholder="https://github.com/username"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="urls.website"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Website</FormLabel>
											<FormControl>
												<Input placeholder="https://example.com" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>
						</div>
						<div className="space-y-4">
							<FormLabel>Notification Preferences</FormLabel>
							<FormField
								control={form.control}
								name="notifications.email"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
										<div className="space-y-0.5">
											<FormLabel>Email Notifications</FormLabel>
											<FormDescription>
												Receive emails about your account activity.
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="notifications.push"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
										<div className="space-y-0.5">
											<FormLabel>Push Notifications</FormLabel>
											<FormDescription>
												Receive push notifications in-app.
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name="notifications.sms"
								render={({ field }) => (
									<FormItem className="flex flex-row items-center justify-between rounded-lg border p-3">
										<div className="space-y-0.5">
											<FormLabel>SMS Notifications</FormLabel>
											<FormDescription>
												Receive text messages for important updates.
											</FormDescription>
										</div>
										<FormControl>
											<Switch
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
						</div>
						<div className="form-story-actions">
							<Button type="submit">Save Changes</Button>
						</div>
					</form>
				</Form>
			</div>
		);
	},
};

export const FormWithServerErrors: Story = {
	name: "Form With Server Errors",
	render: () => {
		const [serverError, setServerError] = useState<string | null>(
			"Invalid email or password. Please try again.",
		);

		const form = useForm<any>({
			defaultValues: {
				email: "error@example.com",
				password: "password123",
			},
		});

		return (
			<div className="form-story-container">
				<h2>Sign In</h2>
				{serverError && (
					<div className="form-story-server-error">{serverError}</div>
				)}
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Email</FormLabel>
									<FormControl>
										<Input placeholder="email@example.com" {...field} />
									</FormControl>
									<FormDescription>
										This shows a server-side error example
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Password</FormLabel>
									<FormControl>
										<Input type="password" placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="form-story-actions">
							<Button type="submit">Sign In</Button>
						</div>
					</form>
				</Form>
			</div>
		);
	},
};

export const DarkThemeForm: Story = {
	name: "Dark Theme Form",
	render: () => {
		const form = useForm<any>({
			defaultValues: {
				role: "user",
				bio: "I'm a UI/UX designer with 5+ years of experience in creating user-centered digital products.",
				notifications: "mentions",
			},
		});

		return (
			<div className="form-story-container form-story-dark">
				<h2>User Preferences</h2>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Role</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Select a role" />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											<SelectItem value="admin">Admin</SelectItem>
											<SelectItem value="user">User</SelectItem>
											<SelectItem value="editor">Editor</SelectItem>
										</SelectContent>
									</Select>
									<FormDescription>
										Select your account privileges.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="bio"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="required-field">Bio</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Tell us about yourself"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										This will appear on your public profile
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="notifications"
							render={({ field }) => (
								<FormItem className="space-y-3">
									<FormLabel className="required-field">
										Notification Preferences
									</FormLabel>
									<FormControl>
										<RadioGroup
											onValueChange={field.onChange}
											defaultValue={field.value}
											className="flex flex-col space-y-1"
										>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="all" />
												</FormControl>
												<FormLabel className="font-normal">
													All notifications
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="mentions" />
												</FormControl>
												<FormLabel className="font-normal">
													Mentions only
												</FormLabel>
											</FormItem>
											<FormItem className="flex items-center space-x-3 space-y-0">
												<FormControl>
													<RadioGroupItem value="none" />
												</FormControl>
												<FormLabel className="font-normal">
													No notifications
												</FormLabel>
											</FormItem>
										</RadioGroup>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div className="form-story-actions">
							<Button variant="outline" type="button">
								Cancel
							</Button>
							<Button type="submit">Save Preferences</Button>
						</div>
					</form>
				</Form>
			</div>
		);
	},
};
