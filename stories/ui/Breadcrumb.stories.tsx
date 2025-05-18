import type { Meta, StoryObj } from "@storybook/react";
import {
	ChevronRight,
	FileText,
	Folder,
	Home,
	Settings,
	Slash,
} from "lucide-react";
import React from "react";
import { Breadcrumb } from "./Breadcrumb";
import "./Breadcrumb.css";

const meta = {
	title: "UI/Breadcrumb",
	component: Breadcrumb,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{ label: "Home", href: "/" },
			{ label: "Documents", href: "/documents" },
			{ label: "Projects", href: "/documents/projects" },
			{ label: "Project 1", isCurrent: true },
		],
	},
};

export const WithCustomSeparator: Story = {
	args: {
		items: [
			{ label: "Home", href: "/" },
			{ label: "Documents", href: "/documents" },
			{ label: "Projects", href: "/documents/projects" },
			{ label: "Project 1", isCurrent: true },
		],
		separator: <Slash className="h-4 w-4" />,
	},
};

export const WithMaxItems: Story = {
	args: {
		items: [
			{ label: "Home", href: "/" },
			{ label: "Documents", href: "/documents" },
			{ label: "Projects", href: "/documents/projects" },
			{ label: "Development", href: "/documents/projects/dev" },
			{ label: "Frontend", href: "/documents/projects/dev/frontend" },
			{
				label: "Components",
				href: "/documents/projects/dev/frontend/components",
			},
			{ label: "Breadcrumb", isCurrent: true },
		],
		maxItems: 4,
	},
};

export const BreadcrumbExamples: Story = {
	render: () => (
		<div className="breadcrumb-container">
			<div className="breadcrumb-demo">
				<p className="breadcrumb-label">Basic Breadcrumb</p>
				<Breadcrumb
					items={[
						{ label: "Home", href: "/" },
						{ label: "Products", href: "/products" },
						{ label: "Categories", href: "/products/categories" },
						{ label: "Electronics", isCurrent: true },
					]}
				/>
			</div>

			<div className="breadcrumb-demo breadcrumb-with-icons">
				<p className="breadcrumb-label">With Icons</p>
				<Breadcrumb
					items={[
						{
							label: (
								<>
									<span className="breadcrumb-icon">
										<Home className="h-3 w-3" />
									</span>
									Home
								</>
							) as unknown as string,
							href: "/",
						},
						{
							label: (
								<>
									<span className="breadcrumb-icon">
										<Folder className="h-3 w-3" />
									</span>
									Documents
								</>
							) as unknown as string,
							href: "/documents",
						},
						{
							label: (
								<>
									<span className="breadcrumb-icon">
										<FileText className="h-3 w-3" />
									</span>
									Report.pdf
								</>
							) as unknown as string,
							isCurrent: true,
						},
					]}
				/>
			</div>

			<div className="breadcrumb-demo">
				<p className="breadcrumb-label">Custom Separator</p>
				<Breadcrumb
					items={[
						{ label: "Settings", href: "/settings" },
						{ label: "Account", href: "/settings/account" },
						{ label: "Profile", isCurrent: true },
					]}
					separator={<span className="breadcrumb-custom-separator">/</span>}
				/>
			</div>

			<div className="breadcrumb-demo">
				<p className="breadcrumb-label">Truncated with Ellipsis</p>
				<Breadcrumb
					items={[
						{ label: "Home", href: "/" },
						{ label: "User", href: "/user" },
						{ label: "Settings", href: "/user/settings" },
						{ label: "Account", href: "/user/settings/account" },
						{ label: "Profile", href: "/user/settings/account/profile" },
						{ label: "Personal Information", isCurrent: true },
					]}
					maxItems={3}
				/>
			</div>
		</div>
	),
};
