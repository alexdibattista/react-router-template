import type { Meta, StoryObj } from "@storybook/react";
import {
	AlertCircleIcon,
	BellIcon,
	CheckCircleIcon,
	InfoIcon,
	MessageSquareIcon,
	SettingsIcon,
	ThumbsUpIcon,
	UserIcon,
	XCircleIcon,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

import { Button } from "../../app/components/ui/button";
import { Input } from "../../app/components/ui/input";
import { Label } from "../../app/components/ui/label";
import { Switch } from "../../app/components/ui/switch";
import { cn } from "../../app/lib/utils";

import { Toaster } from "./Sonner";
import "./Sonner.css";

// Define the interface for story props
interface SonnerStoryProps {
	className?: string;
}

// Create a meta object for the Sonner stories
const meta = {
	title: "UI/Sonner",
	component: Toaster,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<SonnerStoryProps>;

export default meta;
type Story = StoryObj<typeof Toaster>;

// Default Toaster
export const Default: Story = {
	render: () => (
		<div className="sonner-story-container">
			<div className="sonner-story-section">
				<h3>Default Toast</h3>
				<div className="sonner-story-description">
					A simple toast notification.
				</div>

				<div className="sonner-story-card">
					<div className="sonner-story-demo">
						<div className="sonner-story-row">
							<Button
								onClick={() =>
									toast("Event has been created", {
										description: "Sunday, December 03, 2023 at 9:00 AM",
									})
								}
							>
								Show Toast
							</Button>
						</div>
					</div>
					<p className="sonner-story-info">
						The default toast provides a clean, accessible way to show
						non-disruptive notifications to users. It includes a title with
						optional description text.
					</p>
				</div>

				<div className="sonner-story-preview">
					<div className="sonner-story-preview-title">Preview:</div>
					<div className="sonner-story-custom">
						<div className="sonner-story-custom-content">
							<div className="sonner-story-custom-title">
								Event has been created
							</div>
							<div className="sonner-story-custom-description">
								Sunday, December 03, 2023 at 9:00 AM
							</div>
						</div>
					</div>
				</div>
			</div>

			<Toaster position="bottom-right" />
		</div>
	),
};

// Toast Types
export const ToastTypes: Story = {
	render: () => (
		<div className="sonner-story-container">
			<div className="sonner-story-section">
				<h3>Toast Types</h3>
				<div className="sonner-story-description">
					Different types of toast notifications for various states.
				</div>

				<div className="sonner-story-card">
					<div className="sonner-story-demo">
						<div className="sonner-story-row">
							<Button
								variant="outline"
								onClick={() =>
									toast("Event has been created", {
										description: "Sunday, December 03, 2023 at 9:00 AM",
									})
								}
							>
								Default
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.success("Successfully created event", {
										description: "Sunday, December 03, 2023 at 9:00 AM",
									})
								}
							>
								Success
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.error("Failed to create event", {
										description: "Please try again later",
									})
								}
							>
								Error
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.warning("Invalid date selected", {
										description: "Please select a date in the future",
									})
								}
							>
								Warning
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.info("Update available", {
										description: "A new version is available for download",
									})
								}
							>
								Info
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.loading("Creating event...", {
										description: "Please wait while we process your request",
									})
								}
							>
								Loading
							</Button>
						</div>
					</div>
					<p className="sonner-story-info">
						Different toast types provide visual cues about the nature of the
						notification. Success, error, warning, info, and loading states help
						users quickly understand the context of the notification.
					</p>
				</div>

				<div className="sonner-story-preview">
					<div className="sonner-story-preview-title">Preview:</div>
					<div className="grid grid-cols-1 gap-4">
						<div className="sonner-story-custom">
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">
									Event has been created
								</div>
								<div className="sonner-story-custom-description">
									Sunday, December 03, 2023 at 9:00 AM
								</div>
							</div>
						</div>

						<div className="sonner-story-custom">
							<div className="sonner-story-custom-icon text-green-500">
								<CheckCircleIcon className="h-4 w-4" />
							</div>
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">
									Successfully created event
								</div>
								<div className="sonner-story-custom-description">
									Sunday, December 03, 2023 at 9:00 AM
								</div>
							</div>
						</div>

						<div className="sonner-story-custom">
							<div className="sonner-story-custom-icon text-red-500">
								<XCircleIcon className="h-4 w-4" />
							</div>
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">
									Failed to create event
								</div>
								<div className="sonner-story-custom-description">
									Please try again later
								</div>
							</div>
						</div>

						<div className="sonner-story-custom">
							<div className="sonner-story-custom-icon text-yellow-500">
								<AlertCircleIcon className="h-4 w-4" />
							</div>
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">
									Invalid date selected
								</div>
								<div className="sonner-story-custom-description">
									Please select a date in the future
								</div>
							</div>
						</div>

						<div className="sonner-story-custom">
							<div className="sonner-story-custom-icon text-blue-500">
								<InfoIcon className="h-4 w-4" />
							</div>
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">
									Update available
								</div>
								<div className="sonner-story-custom-description">
									A new version is available for download
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Toaster position="bottom-right" />
		</div>
	),
};

// Toast with Actions
export const ToastWithActions: Story = {
	render: () => (
		<div className="sonner-story-container">
			<div className="sonner-story-section">
				<h3>Toast with Actions</h3>
				<div className="sonner-story-description">
					Toast notifications with interactive action buttons.
				</div>

				<div className="sonner-story-card">
					<div className="sonner-story-demo">
						<div className="sonner-story-row">
							<Button
								onClick={() => {
									toast("File uploaded", {
										description: "document.pdf has been uploaded successfully.",
										action: {
											label: "View",
											onClick: () => console.log("View file"),
										},
									});
								}}
							>
								Single Action
							</Button>

							<Button
								onClick={() => {
									toast("Friend request", {
										description: "Jane Smith wants to be your friend",
										action: {
											label: "Accept",
											onClick: () => console.log("Accepted friend request"),
										},
										cancel: {
											label: "Decline",
											onClick: () => console.log("Declined friend request"),
										},
									});
								}}
							>
								Multiple Actions
							</Button>

							<Button
								onClick={() => {
									const toastId = toast.loading("Uploading file...", {
										description: "0% complete",
									});

									let progress = 0;
									const interval = setInterval(() => {
										progress += 10;
										if (progress >= 100) {
											toast.success("File uploaded", {
												description:
													"document.pdf has been uploaded successfully.",
												id: toastId,
											});
											clearInterval(interval);
										} else {
											toast.loading("Uploading file...", {
												description: `${progress}% complete`,
												id: toastId,
											});
										}
									}, 1000);
								}}
							>
								Progress Toast
							</Button>
						</div>
					</div>
					<p className="sonner-story-info">
						Action toasts allow users to respond directly to notifications
						without navigating away from their current context. They can include
						buttons for common actions like "Undo", "View", or "Dismiss".
					</p>
				</div>

				<div className="sonner-story-preview">
					<div className="sonner-story-preview-title">Preview:</div>
					<div className="grid grid-cols-1 gap-4">
						<div className="sonner-story-custom">
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">File uploaded</div>
								<div className="sonner-story-custom-description">
									document.pdf has been uploaded successfully.
								</div>
							</div>
							<div className="sonner-story-custom-actions">
								<Button variant="outline" size="sm">
									View
								</Button>
							</div>
						</div>

						<div className="sonner-story-custom">
							<div className="sonner-story-custom-content">
								<div className="sonner-story-custom-title">Friend request</div>
								<div className="sonner-story-custom-description">
									Jane Smith wants to be your friend
								</div>
							</div>
							<div className="sonner-story-custom-actions">
								<Button variant="outline" size="sm">
									Decline
								</Button>
								<Button size="sm">Accept</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Toaster position="bottom-right" />
		</div>
	),
};

// Custom Toast
export const CustomToast: Story = {
	render: () => (
		<div className="sonner-story-container">
			<div className="sonner-story-section">
				<h3>Custom Toast</h3>
				<div className="sonner-story-description">
					Customized toast notifications with rich content.
				</div>

				<div className="sonner-story-card">
					<div className="sonner-story-demo">
						<div className="sonner-story-row">
							<Button
								onClick={() => {
									toast.custom((id) => (
										<div className={cn("sonner-story-custom")}>
											<div className="sonner-story-avatar bg-muted-foreground">
												<UserIcon className="h-4 w-4 text-background" />
											</div>
											<div className="sonner-story-custom-content">
												<div className="sonner-story-custom-title">
													New message from Jane
												</div>
												<div className="sonner-story-custom-description">
													Hey, how's it going? Are we still meeting today?
												</div>
											</div>
											<div className="sonner-story-custom-actions">
												<Button variant="outline" size="sm">
													Reply
												</Button>
											</div>
										</div>
									));
								}}
							>
								Message Toast
							</Button>

							<Button
								onClick={() => {
									toast.custom((id) => (
										<div className={cn("sonner-story-custom")}>
											<div className="sonner-story-custom-icon text-blue-500">
												<BellIcon className="h-4 w-4" />
											</div>
											<div className="sonner-story-custom-content">
												<div className="sonner-story-custom-title">
													Meeting Reminder
												</div>
												<div className="sonner-story-custom-description">
													Team standup in 15 minutes
												</div>
											</div>
											<div className="sonner-story-custom-actions">
												<Button size="sm" variant="outline">
													Dismiss
												</Button>
												<Button size="sm">Join now</Button>
											</div>
										</div>
									));
								}}
							>
								Reminder Toast
							</Button>

							<Button
								onClick={() => {
									toast.custom((id) => (
										<div className={cn("sonner-story-custom")}>
											<div className="sonner-story-custom-icon text-amber-500">
												<ThumbsUpIcon className="h-4 w-4" />
											</div>
											<div className="sonner-story-custom-content">
												<div className="sonner-story-custom-title">
													New reaction
												</div>
												<div className="sonner-story-custom-description">
													Sarah liked your post "Launching our new product!"
												</div>
											</div>
										</div>
									));
								}}
							>
								Reaction Toast
							</Button>
						</div>
					</div>
					<p className="sonner-story-info">
						Custom toasts allow for complete control over the appearance and
						content of notifications. This is useful for creating branded
						notifications or including complex interactive elements.
					</p>
				</div>
			</div>

			<Toaster position="bottom-right" />
		</div>
	),
};

// Toast Positions
export const ToastPositions: Story = {
	render: () => {
		const [position, setPosition] = useState<
			| "top-left"
			| "top-center"
			| "top-right"
			| "bottom-left"
			| "bottom-center"
			| "bottom-right"
		>("bottom-right");

		const positions = [
			"top-left",
			"top-center",
			"top-right",
			"bottom-left",
			"bottom-center",
			"bottom-right",
		];

		return (
			<div className="sonner-story-container">
				<div className="sonner-story-section">
					<h3>Toast Positions</h3>
					<div className="sonner-story-description">
						Toast notifications can appear in different positions on the screen.
					</div>

					<div className="sonner-story-card">
						<div className="sonner-story-demo">
							<div className="sonner-story-row">
								<Button
									onClick={() =>
										toast(`Toast position: ${position}`, {
											description:
												"This toast appears in the selected position",
										})
									}
								>
									Show Toast
								</Button>
							</div>

							<div className="sonner-story-position-options">
								{positions.map((pos) => (
									<button
										key={pos}
										type="button"
										className={cn(
											"sonner-story-position-option",
											position === pos && "active",
										)}
										onClick={() =>
											setPosition(
												pos as
													| "top-left"
													| "top-center"
													| "top-right"
													| "bottom-left"
													| "bottom-center"
													| "bottom-right",
											)
										}
									>
										{pos}
									</button>
								))}
							</div>
						</div>
						<p className="sonner-story-info">
							Toast positions can be customized to appear in different areas of
							the screen. This allows for flexibility in designing the
							notification experience based on the application's layout and user
							preferences.
						</p>
					</div>
				</div>

				<Toaster position={position} />
			</div>
		);
	},
};

// Toast Configuration
export const ToastConfiguration: Story = {
	render: () => {
		const [duration, setDuration] = useState(5000);
		const [closeButton, setCloseButton] = useState(false);
		const [pauseOnHover, setPauseOnHover] = useState(true);

		return (
			<div className="sonner-story-container">
				<div className="sonner-story-section">
					<h3>Toast Configuration</h3>
					<div className="sonner-story-description">
						Customizable toast notification behavior and appearance.
					</div>

					<div className="sonner-story-card">
						<div className="sonner-story-demo">
							<div className="sonner-story-row">
								<Button
									onClick={() =>
										toast("Configured Toast", {
											description: "This toast uses the configured settings",
											duration: duration,
										})
									}
								>
									Show Toast
								</Button>
							</div>

							<div className="sonner-story-controls">
								<div className="sonner-story-control flex-col items-start">
									<Label htmlFor="duration" className="mb-2">
										Duration: {duration}ms
									</Label>
									<Input
										id="duration"
										type="range"
										min="1000"
										max="10000"
										step="1000"
										value={duration}
										onChange={(e) => setDuration(Number(e.target.value))}
										className="w-[200px]"
									/>
								</div>

								<div className="sonner-story-control">
									<Switch
										id="close-button"
										checked={closeButton}
										onCheckedChange={setCloseButton}
									/>
									<Label htmlFor="close-button" className="ml-2">
										Show close button
									</Label>
								</div>

								<div className="sonner-story-control">
									<Switch
										id="pause-on-hover"
										checked={pauseOnHover}
										onCheckedChange={setPauseOnHover}
									/>
									<Label htmlFor="pause-on-hover" className="ml-2">
										Pause on hover
									</Label>
								</div>
							</div>
						</div>
						<p className="sonner-story-info">
							Toast notifications can be configured with various options like
							duration, close button visibility, and whether they pause when
							hovered. These settings allow for fine-tuning the notification
							experience to match user preferences and application needs.
						</p>
					</div>
				</div>

				<Toaster
					position="bottom-right"
					duration={duration}
					closeButton={closeButton}
				/>
			</div>
		);
	},
};

// Dark Theme Toast
export const DarkTheme: Story = {
	render: () => (
		<div className="sonner-story-container sonner-story-dark">
			<div className="sonner-story-section">
				<h3>Dark Theme Toast</h3>
				<div className="sonner-story-description">
					Toast notifications styled for dark mode interfaces.
				</div>

				<div className="sonner-story-card">
					<div className="sonner-story-demo">
						<div className="sonner-story-row">
							<Button
								variant="outline"
								onClick={() =>
									toast("Dark theme notification", {
										description:
											"This toast is styled for dark mode interfaces",
									})
								}
							>
								Default
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.success("Operation successful", {
										description: "Your changes have been saved",
									})
								}
							>
								Success
							</Button>

							<Button
								variant="outline"
								onClick={() =>
									toast.error("Operation failed", {
										description: "Please try again later",
									})
								}
							>
								Error
							</Button>
						</div>
					</div>
					<p className="sonner-story-info">
						Dark theme toasts provide the same functionality as light theme
						toasts but are styled to match dark mode interfaces. This ensures a
						consistent user experience across different color schemes.
					</p>
				</div>
			</div>

			<Toaster theme="dark" position="bottom-right" />
		</div>
	),
};
