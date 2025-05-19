import type { Meta, StoryObj } from "@storybook/react";
import {
	AudioWaveform,
	BookOpen,
	Bot,
	Command,
	Frame,
	GalleryVerticalEnd,
	Home,
	Map as MapIcon,
	PieChart,
	PlusCircle,
	Search,
	Settings2,
	SquareTerminal,
	Users,
} from "lucide-react";
import React from "react";

import { SidebarProvider } from "../../app/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import "./AppSidebar.css";

// Define the interface for story props
interface AppSidebarStoryProps {
	className?: string;
}

// Create a meta object for the AppSidebar stories
const meta = {
	title: "Components/AppSidebar",
	component: AppSidebar,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [
		(Story) => (
			<SidebarProvider>
				<Story />
			</SidebarProvider>
		),
	],
} satisfies Meta<AppSidebarStoryProps>;

export default meta;
type Story = StoryObj<typeof AppSidebar>;

// Default AppSidebar
export const Default: Story = {
	render: () => (
		<div className="app-sidebar-story-container">
			<div className="app-sidebar-story-section">
				<h3>Default AppSidebar</h3>
				<div className="app-sidebar-story-description">
					The primary navigation sidebar for the application, combining team
					switching, main navigation, project selection, and user profile.
				</div>

				<div className="app-sidebar-story-card">
					<div className="app-sidebar-story-demo">
						<div className="app-sidebar-story-showcase">
							<AppSidebar className="h-full" />
							<div className="app-sidebar-story-content">
								<div className="app-sidebar-story-page-header">
									<h2 className="app-sidebar-story-page-title">Dashboard</h2>
									<div className="flex items-center gap-2">
										<Search className="h-5 w-5 text-muted-foreground" />
										<PlusCircle className="h-5 w-5 text-muted-foreground" />
									</div>
								</div>
								<div className="app-sidebar-story-page-content">
									{[
										"Project A",
										"Project B",
										"Project C",
										"Project D",
										"Project E",
										"Project F",
									].map((project) => (
										<div className="app-sidebar-story-card-item" key={project}>
											<div className="app-sidebar-story-card-title">
												{project}
											</div>
											<div className="app-sidebar-story-card-description">
												This is a sample project card to demonstrate the sidebar
												layout.
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<p className="app-sidebar-story-info">
						The AppSidebar component combines several sub-components:
						TeamSwitcher, NavMain, NavProjects, and NavUser to create a complete
						navigation experience. It uses the collapsible sidebar from the UI
						library.
					</p>
				</div>
			</div>
		</div>
	),
};

// Collapsed AppSidebar
export const Collapsed: Story = {
	render: () => {
		// Create a wrapper component that controls the sidebar state
		const CollapsedSidebarWrapper = () => {
			return (
				<SidebarProvider defaultOpen={false}>
					<div className="app-sidebar-story-container">
						<div className="app-sidebar-story-section">
							<h3>Collapsed AppSidebar</h3>
							<div className="app-sidebar-story-description">
								The sidebar can be collapsed to an icon-only view to maximize
								screen space.
							</div>

							<div className="app-sidebar-story-card">
								<div className="app-sidebar-story-demo">
									<div className="app-sidebar-story-showcase">
										<AppSidebar className="h-full" />
										<div className="app-sidebar-story-content">
											<div className="app-sidebar-story-page-header">
												<h2 className="app-sidebar-story-page-title">
													Dashboard
												</h2>
												<div className="flex items-center gap-2">
													<Search className="h-5 w-5 text-muted-foreground" />
													<PlusCircle className="h-5 w-5 text-muted-foreground" />
												</div>
											</div>
											<div className="app-sidebar-story-page-content">
												{["Project A", "Project B", "Project C"].map(
													(project) => (
														<div
															className="app-sidebar-story-card-item"
															key={project}
														>
															<div className="app-sidebar-story-card-title">
																{project}
															</div>
															<div className="app-sidebar-story-card-description">
																This is a sample project card to demonstrate the
																sidebar layout.
															</div>
														</div>
													),
												)}
											</div>
										</div>
									</div>
								</div>
								<p className="app-sidebar-story-info">
									The sidebar can be collapsed by clicking the toggle button or
									using the keyboard shortcut (Cmd/Ctrl + B). This behavior is
									managed by the SidebarProvider context.
								</p>
							</div>
						</div>
					</div>
				</SidebarProvider>
			);
		};

		return <CollapsedSidebarWrapper />;
	},
};

// Dashboard Layout with AppSidebar
export const DashboardLayout: Story = {
	render: () => (
		<div className="app-sidebar-story-container">
			<div className="app-sidebar-story-section">
				<h3>Dashboard Layout with AppSidebar</h3>
				<div className="app-sidebar-story-description">
					Showing how the sidebar integrates with a typical dashboard layout.
				</div>

				<div className="app-sidebar-story-card">
					<div className="app-sidebar-story-demo">
						<div className="app-sidebar-story-showcase">
							<AppSidebar className="h-full" />
							<div className="app-sidebar-story-content">
								<div className="app-sidebar-story-page-header">
									<h2 className="app-sidebar-story-page-title">Dashboard</h2>
								</div>
								<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
									{[
										{
											title: "Total Users",
											value: "10,284",
											icon: <Users className="h-4 w-4" />,
											id: "users",
										},
										{
											title: "Active Projects",
											value: "25",
											icon: <Frame className="h-4 w-4" />,
											id: "projects",
										},
										{
											title: "Completed Tasks",
											value: "1,429",
											icon: <Command className="h-4 w-4" />,
											id: "tasks",
										},
										{
											title: "Revenue",
											value: "$42,380",
											icon: <PieChart className="h-4 w-4" />,
											id: "revenue",
										},
									].map((item) => (
										<div
											key={item.id}
											className="rounded-lg border bg-card p-3 shadow-sm"
										>
											<div className="flex items-center justify-between">
												<span className="text-sm font-medium">
													{item.title}
												</span>
												{item.icon}
											</div>
											<div className="mt-2 text-2xl font-bold">
												{item.value}
											</div>
										</div>
									))}
								</div>

								<div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
									<div className="rounded-lg border bg-card p-4 shadow-sm">
										<h3 className="mb-3 text-sm font-medium">
											Recent Activity
										</h3>
										<div className="space-y-3">
											{[
												{
													id: "activity-1",
													title: "Project created",
													time: "2 hours ago",
												},
												{
													id: "activity-2",
													title: "Task completed",
													time: "4 hours ago",
												},
												{
													id: "activity-3",
													title: "New team member",
													time: "Yesterday",
												},
												{
													id: "activity-4",
													title: "Report generated",
													time: "2 days ago",
												},
											].map((activity) => (
												<div
													key={activity.id}
													className="flex items-center gap-2 rounded-md p-2 hover:bg-muted/50"
												>
													<div className="h-8 w-8 rounded-full bg-muted" />
													<div>
														<p className="text-sm font-medium">
															{activity.title}
														</p>
														<p className="text-xs text-muted-foreground">
															Updated {activity.time}
														</p>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className="rounded-lg border bg-card p-4 shadow-sm">
										<h3 className="mb-3 text-sm font-medium">Quick Actions</h3>
										<div className="grid grid-cols-2 gap-2">
											{[
												{
													title: "New Project",
													icon: <PlusCircle className="h-4 w-4" />,
													id: "new-project",
												},
												{
													title: "View Reports",
													icon: <PieChart className="h-4 w-4" />,
													id: "view-reports",
												},
												{
													title: "Team Members",
													icon: <Users className="h-4 w-4" />,
													id: "team-members",
												},
												{
													title: "Settings",
													icon: <Settings2 className="h-4 w-4" />,
													id: "settings",
												},
											].map((action) => (
												<div
													key={action.id}
													className="flex items-center gap-2 rounded-md bg-muted/30 p-2 hover:bg-muted"
												>
													{action.icon}
													<span className="text-sm">{action.title}</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<p className="app-sidebar-story-info">
						This example shows how the AppSidebar can be used in a typical
						dashboard layout with statistics, recent activity, and quick
						actions. The sidebar provides easy navigation between different
						sections of the application.
					</p>
				</div>
			</div>
		</div>
	),
};

// Dark Theme AppSidebar
export const DarkTheme: Story = {
	render: () => (
		<div className="app-sidebar-story-container app-sidebar-story-dark">
			<div className="app-sidebar-story-section">
				<h3>Dark Theme AppSidebar</h3>
				<div className="app-sidebar-story-description">
					The AppSidebar component with dark theme styling.
				</div>

				<div className="app-sidebar-story-card">
					<div className="app-sidebar-story-demo">
						<div className="app-sidebar-story-showcase">
							<AppSidebar className="h-full" />
							<div className="app-sidebar-story-content">
								<div className="app-sidebar-story-page-header">
									<h2 className="app-sidebar-story-page-title">Projects</h2>
									<div className="flex items-center gap-2">
										<Search className="h-5 w-5 text-muted-foreground" />
										<PlusCircle className="h-5 w-5 text-muted-foreground" />
									</div>
								</div>
								<div className="app-sidebar-story-page-content">
									{[
										"Project Alpha",
										"Project Beta",
										"Project Gamma",
										"Project Delta",
										"Project Epsilon",
										"Project Zeta",
									].map((project) => (
										<div className="app-sidebar-story-card-item" key={project}>
											<div className="app-sidebar-story-card-title">
												{project}
											</div>
											<div className="app-sidebar-story-card-description">
												This is a sample project card to demonstrate the sidebar
												layout.
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
					<p className="app-sidebar-story-info">
						The dark theme version of the sidebar adapts all sub-components to
						use the appropriate colors and styling for dark mode. This provides
						a consistent experience for users who prefer dark mode.
					</p>
				</div>
			</div>
		</div>
	),
	parameters: {
		backgrounds: { default: "dark" },
	},
};
