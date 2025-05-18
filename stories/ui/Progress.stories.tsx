import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Progress } from "./Progress";
import "./Progress.css";

const meta = {
	title: "UI/Progress",
	component: Progress,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: 40,
	},
	render: (args) => (
		<div className="progress-demo">
			<Progress className="w-full" value={args.value} />
		</div>
	),
};

export const WithLabel: Story = {
	args: {
		value: 60,
	},
	render: (args) => (
		<div className="progress-demo">
			<div className="progress-section">
				<div className="progress-label">
					<div className="progress-title">Uploading files...</div>
					<div className="progress-value">{Math.round(args.value || 0)}%</div>
				</div>
				<Progress className="w-full" value={args.value} />
			</div>
		</div>
	),
};

export const Stages: Story = {
	render: () => (
		<div className="progress-demo">
			<div className="progress-container">
				<div className="progress-section">
					<div className="progress-label">
						<div className="progress-title">Not Started</div>
						<div className="progress-value">0%</div>
					</div>
					<Progress className="w-full" value={0} />
				</div>

				<div className="progress-section">
					<div className="progress-label">
						<div className="progress-title">In Progress</div>
						<div className="progress-value">25%</div>
					</div>
					<Progress className="w-full" value={25} />
				</div>

				<div className="progress-section">
					<div className="progress-label">
						<div className="progress-title">Halfway</div>
						<div className="progress-value">50%</div>
					</div>
					<Progress className="w-full" value={50} />
				</div>

				<div className="progress-section">
					<div className="progress-label">
						<div className="progress-title">Almost Done</div>
						<div className="progress-value">75%</div>
					</div>
					<Progress className="w-full" value={75} />
				</div>

				<div className="progress-section">
					<div className="progress-label">
						<div className="progress-title">Completed</div>
						<div className="progress-value">100%</div>
					</div>
					<Progress className="w-full" value={100} />
				</div>
			</div>
		</div>
	),
};

export const Animated: Story = {
	render: () => {
		const [progress, setProgress] = useState(0);
		const [isLoading, setIsLoading] = useState(false);

		useEffect(() => {
			if (isLoading) {
				const interval = setInterval(() => {
					setProgress((prev) => {
						if (prev >= 100) {
							clearInterval(interval);
							setIsLoading(false);
							return 100;
						}
						return prev + 5;
					});
				}, 200);

				return () => clearInterval(interval);
			}

			if (progress === 100) {
				const timeout = setTimeout(() => {
					setProgress(0);
				}, 2000);

				return () => clearTimeout(timeout);
			}
		}, [isLoading, progress]);

		const startLoading = () => {
			setProgress(0);
			setIsLoading(true);
		};

		return (
			<div className="progress-demo">
				<div className="progress-container animated">
					<div className="progress-section">
						<div className="progress-label">
							<div className="progress-title">Loading Status</div>
							<div className="progress-value">{Math.round(progress)}%</div>
						</div>
						<Progress className="w-full progress" value={progress} />
					</div>

					<div className="flex justify-center mt-4">
						<Button onClick={startLoading} disabled={isLoading}>
							{isLoading ? "Loading..." : "Start Loading"}
						</Button>
					</div>
				</div>
			</div>
		);
	},
};
