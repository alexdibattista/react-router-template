import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Label } from "../../app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "./RadioGroup";

import "./RadioGroup.css";

const meta = {
	title: "UI/RadioGroup",
	component: RadioGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic RadioGroup
export const Default: Story = {
	render: () => {
		const [value, setValue] = useState("option-one");

		return (
			<div className="radio-story-container">
				<div className="radio-story-section">
					<h3>Basic Radio Group</h3>
					<RadioGroup value={value} onValueChange={setValue}>
						<div className="flex flex-col gap-3">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-one" id="option-one" />
								<Label htmlFor="option-one">Option One</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-two" id="option-two" />
								<Label htmlFor="option-two">Option Two</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-three" id="option-three" />
								<Label htmlFor="option-three">Option Three</Label>
							</div>
						</div>
					</RadioGroup>
					<div className="mt-4 text-sm text-muted-foreground">
						Selected value: {value}
					</div>
				</div>
			</div>
		);
	},
};

// RadioGroup with descriptions
export const WithDescriptions: Story = {
	render: () => {
		const [plan, setPlan] = useState("personal");

		return (
			<div className="radio-story-container">
				<div className="radio-story-section">
					<h3>Radio Group with Descriptions</h3>
					<div className="radio-group-card">
						<div className="radio-group-card-title">Select your plan</div>
						<RadioGroup value={plan} onValueChange={setPlan}>
							<div className="flex flex-col gap-4">
								<div className="radio-story-option">
									<RadioGroupItem value="personal" id="personal" />
									<div className="radio-story-option-label">
										<Label
											htmlFor="personal"
											className="radio-story-option-title"
										>
											Personal
										</Label>
										<div className="radio-story-option-description">
											Perfect for individuals. Includes 10GB storage and basic
											features.
										</div>
									</div>
								</div>
								<div className="radio-story-option">
									<RadioGroupItem value="team" id="team" />
									<div className="radio-story-option-label">
										<Label htmlFor="team" className="radio-story-option-title">
											Team
										</Label>
										<div className="radio-story-option-description">
											For small teams. Includes 100GB storage and collaboration
											tools.
										</div>
									</div>
								</div>
								<div className="radio-story-option">
									<RadioGroupItem value="enterprise" id="enterprise" />
									<div className="radio-story-option-label">
										<Label
											htmlFor="enterprise"
											className="radio-story-option-title"
										>
											Enterprise
										</Label>
										<div className="radio-story-option-description">
											For large organizations. Unlimited storage and premium
											support.
										</div>
									</div>
								</div>
							</div>
						</RadioGroup>
					</div>
				</div>
			</div>
		);
	},
};

// Disabled RadioGroup
export const Disabled: Story = {
	render: () => {
		return (
			<div className="radio-story-container">
				<div className="radio-story-section">
					<h3>Disabled Radio Items</h3>
					<RadioGroup defaultValue="option-one">
						<div className="flex flex-col gap-3">
							<div className="flex items-center space-x-2">
								<RadioGroupItem value="option-one" id="disabled-option-one" />
								<Label htmlFor="disabled-option-one">Available Option</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-two"
									id="disabled-option-two"
									disabled
								/>
								<Label htmlFor="disabled-option-two" className="opacity-50">
									Disabled Option
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-three"
									id="disabled-option-three"
									disabled
								/>
								<Label htmlFor="disabled-option-three" className="opacity-50">
									Another Disabled Option
								</Label>
							</div>
						</div>
					</RadioGroup>
				</div>

				<div className="radio-story-section">
					<h3>Fully Disabled Radio Group</h3>
					<RadioGroup defaultValue="option-one" disabled>
						<div className="flex flex-col gap-3">
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-one"
									id="all-disabled-option-one"
								/>
								<Label htmlFor="all-disabled-option-one" className="opacity-50">
									Option One (Disabled)
								</Label>
							</div>
							<div className="flex items-center space-x-2">
								<RadioGroupItem
									value="option-two"
									id="all-disabled-option-two"
								/>
								<Label htmlFor="all-disabled-option-two" className="opacity-50">
									Option Two (Disabled)
								</Label>
							</div>
						</div>
					</RadioGroup>
				</div>
			</div>
		);
	},
};

// Grid layout RadioGroup
export const GridLayout: Story = {
	render: () => {
		const [delivery, setDelivery] = useState("standard");

		const handleDeliveryChange = (value: string) => {
			setDelivery(value);
		};

		const handleKeyDown = (value: string) => (e: React.KeyboardEvent) => {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault();
				setDelivery(value);
			}
		};

		return (
			<div className="radio-story-container">
				<div className="radio-story-section">
					<h3>Grid Layout with Icons</h3>

					<div className="radio-group-card">
						<div className="radio-group-card-title">Select Delivery Option</div>
						<RadioGroup value={delivery} onValueChange={setDelivery}>
							<div className="radio-story-grid">
								<div
									className="radio-story-grid-option"
									data-selected={delivery === "standard"}
									onClick={() => handleDeliveryChange("standard")}
									onKeyDown={handleKeyDown("standard")}
									tabIndex={0}
									role="radio"
									aria-checked={delivery === "standard"}
								>
									<div className="radio-story-grid-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden="true"
											role="img"
										>
											<title>Truck delivery icon</title>
											<path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
											<path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
											<circle cx="7" cy="18" r="2" />
											<circle cx="17" cy="18" r="2" />
										</svg>
									</div>
									<div>
										<RadioGroupItem
											value="standard"
											id="standard-delivery"
											className="sr-only"
										/>
										<div className="radio-story-grid-title">
											Standard Delivery
										</div>
										<div className="radio-story-grid-description">
											Delivery in 3-5 business days
										</div>
									</div>
								</div>

								<div
									className="radio-story-grid-option"
									data-selected={delivery === "express"}
									onClick={() => handleDeliveryChange("express")}
									onKeyDown={handleKeyDown("express")}
									tabIndex={0}
									role="radio"
									aria-checked={delivery === "express"}
								>
									<div className="radio-story-grid-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden="true"
											role="img"
										>
											<title>Lightning fast delivery icon</title>
											<path d="M13 3v10h5l-7 8v-10H6l7-8Z" />
										</svg>
									</div>
									<div>
										<RadioGroupItem
											value="express"
											id="express-delivery"
											className="sr-only"
										/>
										<div className="radio-story-grid-title">
											Express Delivery
										</div>
										<div className="radio-story-grid-description">
											Delivery in 1-2 business days
										</div>
									</div>
								</div>

								<div
									className="radio-story-grid-option"
									data-selected={delivery === "overnight"}
									onClick={() => handleDeliveryChange("overnight")}
									onKeyDown={handleKeyDown("overnight")}
									tabIndex={0}
									role="radio"
									aria-checked={delivery === "overnight"}
								>
									<div className="radio-story-grid-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden="true"
											role="img"
										>
											<title>Clock overnight delivery icon</title>
											<circle cx="12" cy="12" r="10" />
											<polyline points="12 6 12 12 16 14" />
										</svg>
									</div>
									<div>
										<RadioGroupItem
											value="overnight"
											id="overnight-delivery"
											className="sr-only"
										/>
										<div className="radio-story-grid-title">
											Overnight Delivery
										</div>
										<div className="radio-story-grid-description">
											Delivery next business day
										</div>
									</div>
								</div>

								<div
									className="radio-story-grid-option"
									data-selected={delivery === "pickup"}
									onClick={() => handleDeliveryChange("pickup")}
									onKeyDown={handleKeyDown("pickup")}
									tabIndex={0}
									role="radio"
									aria-checked={delivery === "pickup"}
								>
									<div className="radio-story-grid-icon">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											aria-hidden="true"
											role="img"
										>
											<title>Store pickup icon</title>
											<path d="M3 9v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
											<path d="M3 9h18" />
											<path d="M15 5V1H9v4" />
										</svg>
									</div>
									<div>
										<RadioGroupItem
											value="pickup"
											id="store-pickup"
											className="sr-only"
										/>
										<div className="radio-story-grid-title">Store Pickup</div>
										<div className="radio-story-grid-description">
											Ready for pickup in 24 hours
										</div>
									</div>
								</div>
							</div>
						</RadioGroup>
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
			experience: "beginner",
			contactPreference: "email",
		});

		const handleSubmit = (e: React.FormEvent) => {
			e.preventDefault();
			alert(JSON.stringify(formData, null, 2));
		};

		return (
			<div className="radio-story-container">
				<div className="radio-story-section">
					<h3>Form Integration</h3>

					<form className="radio-story-form" onSubmit={handleSubmit}>
						<div className="radio-story-form-title">User Preferences</div>

						<div className="space-y-6">
							<div>
								<Label className="required block mb-2">Experience Level</Label>
								<RadioGroup
									value={formData.experience}
									onValueChange={(value) =>
										setFormData({ ...formData, experience: value })
									}
								>
									<div className="flex flex-col gap-3">
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="beginner"
												id="experience-beginner"
											/>
											<Label htmlFor="experience-beginner">Beginner</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="intermediate"
												id="experience-intermediate"
											/>
											<Label htmlFor="experience-intermediate">
												Intermediate
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem
												value="advanced"
												id="experience-advanced"
											/>
											<Label htmlFor="experience-advanced">Advanced</Label>
										</div>
									</div>
								</RadioGroup>
							</div>

							<div>
								<Label className="required block mb-2">
									Contact Preference
								</Label>
								<RadioGroup
									value={formData.contactPreference}
									onValueChange={(value) =>
										setFormData({ ...formData, contactPreference: value })
									}
								>
									<div className="flex flex-col gap-3">
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="email" id="contact-email" />
											<Label htmlFor="contact-email">Email</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="phone" id="contact-phone" />
											<Label htmlFor="contact-phone">Phone</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="sms" id="contact-sms" />
											<Label htmlFor="contact-sms">SMS</Label>
										</div>
									</div>
								</RadioGroup>
							</div>
						</div>

						<div className="radio-story-form-footer">
							<button
								type="button"
								className="radio-story-form-button radio-story-form-button-cancel"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="radio-story-form-button radio-story-form-button-submit"
							>
								Save Preferences
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	},
};
