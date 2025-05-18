import type { Meta, StoryObj } from "@storybook/react";
import {
	BellRing,
	Check,
	ExternalLink,
	MoreHorizontal,
	Plus,
	User,
} from "lucide-react";
import React from "react";
import { Button } from "../../app/components/ui/button";
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../../app/components/ui/card";
import { Card } from "./Card";
import "./Card.css";

const meta = {
	title: "UI/Card",
	component: Card,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Card Title",
		description: "Card Description",
		content: "This is the card content area.",
		footer: (
			<Button variant="outline" size="sm">
				Cancel
			</Button>
		),
	},
};

export const WithAction: Story = {
	args: {
		title: "Notifications",
		description: "You have 3 unread messages.",
		action: <div className="card-notification-count">3</div>,
		content: "View and manage your notifications here.",
		footer: <Button size="sm">View all</Button>,
	},
};

export const CardExample: Story = {
	render: () => (
		<div className="card-container">
			<Card
				className="card-demo"
				title="Account Settings"
				description="Manage your account settings and preferences."
				content={
					<div className="grid gap-4">
						<div className="flex items-center gap-4">
							<User className="h-5 w-5 text-muted-foreground" />
							<div>
								<p className="text-sm font-medium">Personal Information</p>
								<p className="text-xs text-muted-foreground">
									Update your personal details
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<BellRing className="h-5 w-5 text-muted-foreground" />
							<div>
								<p className="text-sm font-medium">Notifications</p>
								<p className="text-xs text-muted-foreground">
									Configure notification settings
								</p>
							</div>
						</div>
					</div>
				}
				footer={
					<div className="flex justify-between w-full">
						<Button variant="outline" size="sm">
							Cancel
						</Button>
						<Button size="sm">Save Changes</Button>
					</div>
				}
			/>

			<Card
				className="card-demo"
				title="Subscription Plan"
				description="You are currently on the Pro plan."
				content={
					<div className="space-y-2">
						<div className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" />
							<span className="text-sm">Unlimited projects</span>
						</div>
						<div className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" />
							<span className="text-sm">Team collaboration</span>
						</div>
						<div className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" />
							<span className="text-sm">API access</span>
						</div>
					</div>
				}
				footer={
					<Button className="w-full" size="sm">
						Upgrade Plan
					</Button>
				}
			/>

			<Card
				className="card-demo"
				title="Activity"
				action={
					<Button variant="ghost" size="icon" className="h-8 w-8">
						<MoreHorizontal className="h-4 w-4" />
					</Button>
				}
				content={
					<div className="space-y-4">
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<p className="text-sm font-medium">Project created</p>
								<span className="text-xs text-muted-foreground">2h ago</span>
							</div>
							<p className="text-xs text-muted-foreground">
								You created a new project "Dashboard UI"
							</p>
						</div>
						<div className="space-y-1">
							<div className="flex items-center justify-between">
								<p className="text-sm font-medium">File uploaded</p>
								<span className="text-xs text-muted-foreground">5h ago</span>
							</div>
							<p className="text-xs text-muted-foreground">
								You uploaded design-final.fig
							</p>
						</div>
					</div>
				}
			/>
		</div>
	),
};

export const MediaCard: Story = {
	render: () => (
		<div className="card-container">
			<Card className="card-demo card-large py-0">
				<img
					src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800&h=500"
					alt="Media card"
					className="card-media"
				/>
				<CardHeader className="card-header-demo">
					<div className="flex items-center justify-between">
						<CardTitle className="card-title-demo">Media Card Title</CardTitle>
						<span className="card-badge">Featured</span>
					</div>
					<CardDescription className="card-description-demo">
						This card contains a media element at the top
					</CardDescription>
				</CardHeader>
				<CardContent className="card-content-demo">
					<p className="text-sm">
						Cards can contain media elements such as images or videos. This
						example shows an image at the top of the card with a title,
						description, and content below.
					</p>
				</CardContent>
				<CardFooter className="card-footer-demo">
					<Button variant="outline" size="sm">
						Read More
					</Button>
					<Button size="sm">
						<ExternalLink className="mr-2 h-4 w-4" />
						Visit
					</Button>
				</CardFooter>
			</Card>
		</div>
	),
};
