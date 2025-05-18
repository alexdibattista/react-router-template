import type { Meta, StoryObj } from "@storybook/react";
import { CalendarDays, Mail } from "lucide-react";
import React from "react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";
import "./HoverCard.css";

const meta = {
	title: "UI/HoverCard",
	component: HoverCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="hover-card-demo">
			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="link">Hover over me</Button>
				</HoverCardTrigger>
				<HoverCardContent className="hover-card-content">
					<div className="space-y-2">
						<h4 className="text-sm font-semibold">Hover Card</h4>
						<p className="text-sm">
							This is a basic hover card component that appears when you hover
							over the trigger element.
						</p>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	),
};

export const UserProfile: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="hover-card-demo">
			<HoverCard>
				<HoverCardTrigger asChild>
					<a href="https://example.com/profile" className="hover-card-trigger">
						<span className="text-blue-600 underline hover:text-blue-800">
							John Smith
						</span>
					</a>
				</HoverCardTrigger>
				<HoverCardContent className="hover-card-content">
					<div className="user-hover-card">
						<div className="user-avatar">
							<img
								src="https://avatars.githubusercontent.com/u/12345678?v=4"
								alt="John Smith avatar"
							/>
						</div>
						<div className="user-info">
							<div className="user-name">John Smith</div>
							<div className="user-title">Software Engineer</div>
							<div className="user-description">
								Full-stack developer specializing in React, Node.js, and
								TypeScript. Based in San Francisco, CA.
							</div>
							<div className="user-stats">
								<div className="user-stat">
									<div className="user-stat-value">52</div>
									<div className="user-stat-label">Projects</div>
								</div>
								<div className="user-stat">
									<div className="user-stat-value">128</div>
									<div className="user-stat-label">Followers</div>
								</div>
								<div className="user-stat">
									<div className="user-stat-value">64</div>
									<div className="user-stat-label">Following</div>
								</div>
							</div>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	),
};

export const WithFooter: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="hover-card-demo">
			<HoverCard>
				<HoverCardTrigger asChild>
					<Button variant="link">
						<Mail className="mr-2 h-4 w-4" />
						johndoe@example.com
					</Button>
				</HoverCardTrigger>
				<HoverCardContent className="hover-card-content">
					<div className="space-y-4">
						<div className="space-y-1">
							<h4 className="text-sm font-semibold">John Doe</h4>
							<p className="text-sm">Product Manager</p>
							<div className="flex items-center pt-2">
								<CalendarDays className="mr-2 h-4 w-4 opacity-70" />
								<span className="text-xs text-muted-foreground">
									Joined December 2021
								</span>
							</div>
						</div>
						<div className="border-t pt-3">
							<Button variant="outline" size="sm" className="w-full">
								View Profile
							</Button>
						</div>
					</div>
				</HoverCardContent>
			</HoverCard>
		</div>
	),
};
