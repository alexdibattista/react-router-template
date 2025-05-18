import { zodResolver } from "@hookform/resolvers/zod";
import type { Meta, StoryObj } from "@storybook/react";
import { useEffect, useState } from "react";
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
import { InputOTP, InputOTPGroup, InputOTPSlot } from "./InputOTP";

import "./InputOTP.css";

const meta = {
	title: "UI/InputOTP",
	component: InputOTP,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic InputOTP
export const Default: Story = {
	render: () => {
		const [value, setValue] = useState<string>("");

		return (
			<div className="otp-story-container">
				<div className="otp-story-section">
					<h3>Basic OTP Input</h3>
					<InputOTP maxLength={6} value={value} onChange={setValue}>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
					<div className="mt-4 text-sm text-muted-foreground">
						Value: {value ? value : "No code entered"}
					</div>
				</div>
			</div>
		);
	},
};

// Phone Verification Flow
export const PhoneVerification: Story = {
	render: () => {
		const [otp, setOtp] = useState<string>("");
		const [isVerifying, setIsVerifying] = useState<boolean>(false);
		const [verified, setVerified] = useState<boolean | null>(null);
		const [countdown, setCountdown] = useState<number>(0);

		const handleVerify = () => {
			setIsVerifying(true);

			// Simulate verification with a delay
			setTimeout(() => {
				setIsVerifying(false);
				// For story purpose, verify if OTP is "123456"
				setVerified(otp === "123456");
			}, 1500);
		};

		const startResendCountdown = () => {
			setCountdown(30);
		};

		const handleResend = () => {
			startResendCountdown();
			// Reset verification status
			setVerified(null);
			setOtp("");

			// Alert for demo purposes
			alert("A new code has been sent to your phone.");
		};

		// Countdown timer
		useEffect(() => {
			if (countdown > 0) {
				const timer = setTimeout(() => {
					setCountdown(countdown - 1);
				}, 1000);

				return () => clearTimeout(timer);
			}
		}, [countdown]);

		return (
			<div className="otp-story-container">
				<div className="otp-story-card">
					<div className="otp-story-title">Verify your phone number</div>
					<div className="otp-story-description">
						We've sent a 6-digit code to +1 (555) 123-4567. Enter it below to
						confirm your phone number.
					</div>

					<div className="otp-story-form">
						<InputOTP
							maxLength={6}
							value={otp}
							onChange={setOtp}
							disabled={isVerifying}
						>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
								<InputOTPSlot index={3} />
								<InputOTPSlot index={4} />
								<InputOTPSlot index={5} />
							</InputOTPGroup>
						</InputOTP>

						{verified === true && (
							<div className="otp-story-verification-status otp-story-verification-success">
								<div className="otp-story-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										aria-hidden="true"
									>
										<title>Success icon</title>
										<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
										<polyline points="22 4 12 14.01 9 11.01"></polyline>
									</svg>
								</div>
								<span>Phone number verified successfully!</span>
							</div>
						)}

						{verified === false && (
							<div className="otp-story-verification-status otp-story-verification-error">
								<div className="otp-story-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										aria-hidden="true"
									>
										<title>Error icon</title>
										<circle cx="12" cy="12" r="10"></circle>
										<line x1="15" y1="9" x2="9" y2="15"></line>
										<line x1="9" y1="9" x2="15" y2="15"></line>
									</svg>
								</div>
								<span>Invalid verification code. Please try again.</span>
							</div>
						)}

						<button
							className="otp-story-button otp-story-primary-button w-full"
							disabled={otp.length !== 6 || isVerifying}
							onClick={handleVerify}
						>
							{isVerifying ? "Verifying..." : "Verify Code"}
						</button>

						<div className="otp-story-footer">
							<div className="otp-story-link">Didn't receive the code?</div>
							{countdown > 0 ? (
								<div className="otp-story-countdown">
									Resend in {countdown}s
								</div>
							) : (
								<button className="otp-story-resend" onClick={handleResend}>
									Resend Code
								</button>
							)}
						</div>
					</div>
				</div>

				<div className="text-sm text-center text-muted-foreground mt-4">
					Hint: The correct code for this demo is "123456"
				</div>
			</div>
		);
	},
};

// Different Pattern Format (4-digit code)
export const ShortCode: Story = {
	render: () => {
		const [value, setValue] = useState<string>("");

		return (
			<div className="otp-story-container">
				<div className="otp-story-section">
					<h3>4-Digit Code</h3>
					<div className="otp-story-card">
						<div className="otp-story-title">Enter security code</div>
						<div className="otp-story-description">
							Please enter the 4-digit security code we sent to your email
							address.
						</div>

						<InputOTP
							maxLength={4}
							value={value}
							onChange={setValue}
							pattern="^[0-9]+$"
						>
							<InputOTPGroup>
								<InputOTPSlot index={0} />
								<InputOTPSlot index={1} />
								<InputOTPSlot index={2} />
								<InputOTPSlot index={3} />
							</InputOTPGroup>
						</InputOTP>

						<div className="otp-story-footer mt-4">
							<button
								className="otp-story-button otp-story-primary-button w-full"
								disabled={value.length !== 4}
							>
								Submit
							</button>
						</div>
					</div>

					<div className="mt-4 text-sm text-muted-foreground">
						Value: {value ? value : "No code entered"}
					</div>
				</div>
			</div>
		);
	},
};

// Custom Separator
export const WithSeparator: Story = {
	render: () => {
		const [value, setValue] = useState<string>("");

		return (
			<div className="otp-story-container">
				<div className="otp-story-section">
					<h3>With Separator</h3>
					<InputOTP
						maxLength={6}
						value={value}
						onChange={setValue}
						separator={<span className="px-1 text-muted-foreground">-</span>}
					>
						<InputOTPGroup className="gap-2">
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
					<div className="mt-4 text-sm text-muted-foreground">
						Value: {value ? value : "No code entered"}
					</div>
				</div>
			</div>
		);
	},
};

// Different OTP Types
export const DifferentTypes: Story = {
	render: () => {
		const [activeTab, setActiveTab] = useState<string>("numeric");
		const [numericValue, setNumericValue] = useState<string>("");
		const [alphaValue, setAlphaValue] = useState<string>("");
		const [alphaNumericValue, setAlphaNumericValue] = useState<string>("");

		return (
			<div className="otp-story-container">
				<div className="otp-story-section">
					<h3>Different OTP Type Patterns</h3>

					<div className="otp-story-tabs">
						<div
							className="otp-story-tab"
							data-active={activeTab === "numeric"}
							onClick={() => setActiveTab("numeric")}
						>
							Numeric
						</div>
						<div
							className="otp-story-tab"
							data-active={activeTab === "alpha"}
							onClick={() => setActiveTab("alpha")}
						>
							Alphabetic
						</div>
						<div
							className="otp-story-tab"
							data-active={activeTab === "alphanumeric"}
							onClick={() => setActiveTab("alphanumeric")}
						>
							Alphanumeric
						</div>
					</div>

					{activeTab === "numeric" && (
						<div>
							<p className="mb-4 text-sm text-muted-foreground">
								Numbers only (0-9)
							</p>
							<InputOTP
								maxLength={4}
								value={numericValue}
								onChange={setNumericValue}
								pattern="^[0-9]+$"
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
						</div>
					)}

					{activeTab === "alpha" && (
						<div>
							<p className="mb-4 text-sm text-muted-foreground">
								Letters only (A-Z)
							</p>
							<InputOTP
								maxLength={4}
								value={alphaValue}
								onChange={setAlphaValue}
								pattern="^[A-Za-z]+$"
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
						</div>
					)}

					{activeTab === "alphanumeric" && (
						<div>
							<p className="mb-4 text-sm text-muted-foreground">
								Letters and numbers (A-Z, 0-9)
							</p>
							<InputOTP
								maxLength={4}
								value={alphaNumericValue}
								onChange={setAlphaNumericValue}
								pattern="^[A-Za-z0-9]+$"
							>
								<InputOTPGroup>
									<InputOTPSlot index={0} />
									<InputOTPSlot index={1} />
									<InputOTPSlot index={2} />
									<InputOTPSlot index={3} />
								</InputOTPGroup>
							</InputOTP>
						</div>
					)}

					<div className="mt-4 text-sm text-muted-foreground">
						Value:{" "}
						{activeTab === "numeric"
							? numericValue || "No code entered"
							: activeTab === "alpha"
								? alphaValue || "No code entered"
								: alphaNumericValue || "No code entered"}
					</div>
				</div>
			</div>
		);
	},
};

// Form Integration
export const FormIntegration: Story = {
	render: () => {
		// Define form schema
		const formSchema = z.object({
			otp: z.string().min(6, "Code must be 6 digits"),
		});

		// Initialize form
		const form = useForm<z.infer<typeof formSchema>>({
			resolver: zodResolver(formSchema),
			defaultValues: {
				otp: "",
			},
		});

		// Handle form submission
		const onSubmit = (values: z.infer<typeof formSchema>) => {
			alert(`Submitted code: ${values.otp}`);
		};

		return (
			<div className="otp-story-container">
				<div className="otp-story-section">
					<h3>Form Integration with Validation</h3>
					<div className="otp-story-card">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-4"
							>
								<FormField
									control={form.control}
									name="otp"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="font-medium">
												Verification Code
											</FormLabel>
											<FormDescription>
												Enter the 6-digit code sent to your device.
											</FormDescription>
											<FormControl>
												<InputOTP
													maxLength={6}
													value={field.value}
													onChange={field.onChange}
												>
													<InputOTPGroup>
														<InputOTPSlot index={0} />
														<InputOTPSlot index={1} />
														<InputOTPSlot index={2} />
														<InputOTPSlot index={3} />
														<InputOTPSlot index={4} />
														<InputOTPSlot index={5} />
													</InputOTPGroup>
												</InputOTP>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex justify-end">
									<Button type="submit">Verify</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
		);
	},
};
