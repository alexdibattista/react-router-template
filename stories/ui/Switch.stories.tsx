import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Label } from "../../app/components/ui/label";
import { Switch } from "./Switch";

import "./Switch.css";

const meta = {
	title: "UI/Switch",
	component: Switch,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Switch
export const Default: Story = {
	render: () => {
		const [checked, setChecked] = useState(false);
		return (
			<div className="switch-story-container">
				<div className="switch-story-section">
					<h3>Basic Usage</h3>
					<div className="flex items-center space-x-2">
						<Switch
							id="default-switch"
							checked={checked}
							onCheckedChange={setChecked}
						/>
						<Label htmlFor="default-switch">{checked ? "On" : "Off"}</Label>
					</div>
				</div>
			</div>
		);
	},
};

// Switch with Label
export const WithLabel: Story = {
	render: () => {
		const [enabled, setEnabled] = useState(false);
		const [notifications, setNotifications] = useState(true);
		const [darkMode, setDarkMode] = useState(false);

		return (
			<div className="switch-story-container">
				<div className="switch-story-section">
					<h3>Switch with Label</h3>

					<div className="switch-row">
						<div className="switch-row-label">
							<div className="switch-row-title">Enable Feature</div>
							<div className="switch-row-description">
								Enable this experimental feature
							</div>
						</div>
						<Switch checked={enabled} onCheckedChange={setEnabled} />
					</div>

					<div className="switch-row">
						<div className="switch-row-label">
							<div className="switch-row-title">Notifications</div>
							<div className="switch-row-description">
								Receive push notifications
							</div>
						</div>
						<Switch
							checked={notifications}
							onCheckedChange={setNotifications}
						/>
					</div>

					<div className="switch-row">
						<div className="switch-row-label">
							<div className="switch-row-title">Dark Mode</div>
							<div className="switch-row-description">
								Switch between light and dark theme
							</div>
						</div>
						<Switch checked={darkMode} onCheckedChange={setDarkMode} />
					</div>
				</div>
			</div>
		);
	},
};

// Disabled Switch
export const Disabled: Story = {
	render: () => {
		return (
			<div className="switch-story-container">
				<div className="switch-story-section">
					<h3>Disabled States</h3>
					<div className="flex flex-col gap-4">
						<div className="flex items-center space-x-2">
							<Switch
								id="disabled-unchecked"
								disabled={true}
								checked={false}
								onCheckedChange={() => {}}
							/>
							<Label htmlFor="disabled-unchecked" className="opacity-50">
								Disabled (Off)
							</Label>
						</div>

						<div className="flex items-center space-x-2">
							<Switch
								id="disabled-checked"
								disabled={true}
								checked={true}
								onCheckedChange={() => {}}
							/>
							<Label htmlFor="disabled-checked" className="opacity-50">
								Disabled (On)
							</Label>
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Switch with Icons
export const WithIcons: Story = {
	render: () => {
		const [airplane, setAirplane] = useState(false);
		const [wifi, setWifi] = useState(true);
		const [bluetooth, setBluetooth] = useState(false);

		return (
			<div className="switch-story-container">
				<div className="switch-story-section">
					<h3>Switch with Icons</h3>
					<div className="flex flex-col gap-4">
						<div className="switch-row">
							<div className="switch-row-label">
								<div className="switch-with-icon">
									<svg
										className="switch-icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										role="img"
										aria-hidden="true"
									>
										<title>Phone icon</title>
										<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
										<path d="M14.05 2a9 9 0 0 1 8 7.94" />
										<path d="M14.05 6A5 5 0 0 1 18 10" />
									</svg>
									<span>Airplane Mode</span>
								</div>
							</div>
							<Switch checked={airplane} onCheckedChange={setAirplane} />
						</div>

						<div className="switch-row">
							<div className="switch-row-label">
								<div className="switch-with-icon">
									<svg
										className="switch-icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										role="img"
										aria-hidden="true"
									>
										<title>Wi-Fi icon</title>
										<path d="M5 12.55a11 11 0 0 1 14.08 0" />
										<path d="M1.42 9a16 16 0 0 1 21.16 0" />
										<path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
										<circle cx="12" cy="20" r="1" />
									</svg>
									<span>Wi-Fi</span>
								</div>
							</div>
							<Switch checked={wifi} onCheckedChange={setWifi} />
						</div>

						<div className="switch-row">
							<div className="switch-row-label">
								<div className="switch-with-icon">
									<svg
										className="switch-icon"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										role="img"
										aria-hidden="true"
									>
										<title>Bluetooth icon</title>
										<path d="M14.5 11V8.5c0-1.5-1-2.5-2.5-2.5H8.5c-1.5 0-2.5 1-2.5 2.5v5c0 1.5 1 2.5 2.5 2.5H11" />
										<path d="M16 11l2-2-2-2" />
										<path d="M14 15v-2.5a2.5 2.5 0 0 1 5 0V15" />
										<path d="M14 13h5" />
									</svg>
									<span>Bluetooth</span>
								</div>
							</div>
							<Switch checked={bluetooth} onCheckedChange={setBluetooth} />
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Form Integration
export const FormIntegration: Story = {
	render: () => {
		const [formData, setFormData] = useState({
			marketingEmails: true,
			securityUpdates: true,
			productNews: false,
		});

		const handleToggle = (key: keyof typeof formData) => (checked: boolean) => {
			setFormData((prev) => ({ ...prev, [key]: checked }));
		};

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			alert(JSON.stringify(formData, null, 2));
		};

		return (
			<div className="switch-story-container">
				<div className="switch-story-section">
					<h3>Form Integration</h3>
					<form onSubmit={handleSubmit}>
						<div className="space-y-4">
							<div className="switch-row">
								<div className="switch-row-label">
									<div className="switch-row-title">Marketing Emails</div>
									<div className="switch-row-description">
										Receive marketing emails about our products
									</div>
								</div>
								<Switch
									checked={formData.marketingEmails}
									onCheckedChange={handleToggle("marketingEmails")}
								/>
							</div>

							<div className="switch-row">
								<div className="switch-row-label">
									<div className="switch-row-title">Security Updates</div>
									<div className="switch-row-description">
										Get notified about security updates
									</div>
								</div>
								<Switch
									checked={formData.securityUpdates}
									onCheckedChange={handleToggle("securityUpdates")}
								/>
							</div>

							<div className="switch-row">
								<div className="switch-row-label">
									<div className="switch-row-title">Product News</div>
									<div className="switch-row-description">
										Stay updated with new product features
									</div>
								</div>
								<Switch
									checked={formData.productNews}
									onCheckedChange={handleToggle("productNews")}
								/>
							</div>

							<div className="mt-4 flex justify-end">
								<button
									className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
									type="submit"
								>
									Save Preferences
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	},
};
