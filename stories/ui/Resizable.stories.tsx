import type { Meta, StoryObj } from "@storybook/react";
import {
	FileIcon,
	FolderIcon,
	LayoutPanelLeftIcon,
	LayoutPanelRightIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../../app/components/ui/button";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "./Resizable";

import "./Resizable.css";

// Generate sample data for the stories
const generateParagraphs = (count: number, prefix = "") => {
	return Array.from({ length: count }, (_, i) => (
		<p key={`${prefix}para-${i}`}>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod,
			nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
			nunc quis nisl.
		</p>
	));
};

const mockFiles = [
	{
		name: "src",
		type: "folder",
		children: [
			{
				name: "components",
				type: "folder",
				children: [
					{ name: "Button.tsx", type: "file" },
					{ name: "Card.tsx", type: "file" },
					{ name: "Input.tsx", type: "file" },
				],
			},
			{
				name: "pages",
				type: "folder",
				children: [
					{ name: "index.tsx", type: "file" },
					{ name: "about.tsx", type: "file" },
					{ name: "contact.tsx", type: "file" },
				],
			},
			{ name: "app.tsx", type: "file" },
			{ name: "main.tsx", type: "file" },
		],
	},
	{
		name: "public",
		type: "folder",
		children: [
			{ name: "index.html", type: "file" },
			{ name: "favicon.ico", type: "file" },
		],
	},
	{ name: "package.json", type: "file" },
	{ name: "tsconfig.json", type: "file" },
];

const FileTree = ({ files, level = 0, onSelect, activeFile }) => {
	return (
		<div style={{ paddingLeft: level > 0 ? "1rem" : "0" }}>
			{files.map((file, index) => (
				<div key={`file-${level}-${index}`}>
					<div
						className={`resizable-file-tree-item ${activeFile === file.name ? "active" : ""}`}
						onClick={() => onSelect(file.name)}
					>
						{file.type === "folder" ? (
							<FolderIcon className="resizable-file-tree-icon" />
						) : (
							<FileIcon className="resizable-file-tree-icon" />
						)}
						{file.name}
					</div>
					{file.type === "folder" && file.children && (
						<FileTree
							files={file.children}
							level={level + 1}
							onSelect={onSelect}
							activeFile={activeFile}
						/>
					)}
				</div>
			))}
		</div>
	);
};

const meta = {
	title: "UI/Resizable",
	component: ResizablePanelGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		direction: {
			options: ["horizontal", "vertical"],
			control: { type: "radio" },
			defaultValue: "horizontal",
		},
	},
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Horizontal Resizable Panels
export const HorizontalPanels: Story = {
	args: {
		direction: "horizontal",
	},
	render: (args) => (
		<div className="resizable-story-container">
			<div className="resizable-story-section">
				<h3>Horizontal Resizable Panels</h3>
				<div className="resizable-story-description">
					Two horizontally arranged panels with a draggable resize handle
					between them.
				</div>

				<div className="resizable-demo resizable-demo-horizontal">
					<ResizablePanelGroup direction={args.direction} className="h-full">
						<ResizablePanel defaultSize={50}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Panel 1</div>
								<div className="resizable-panel-content">
									<h4>Left Panel Content</h4>
									{generateParagraphs(3, "left")}
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={50}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Panel 2</div>
								<div className="resizable-panel-content">
									<h4>Right Panel Content</h4>
									{generateParagraphs(3, "right")}
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

// Vertical Resizable Panels
export const VerticalPanels: Story = {
	args: {
		direction: "vertical",
	},
	render: (args) => (
		<div className="resizable-story-container">
			<div className="resizable-story-section">
				<h3>Vertical Resizable Panels</h3>
				<div className="resizable-story-description">
					Two vertically arranged panels with a draggable resize handle between
					them.
				</div>

				<div className="resizable-demo resizable-demo-vertical">
					<ResizablePanelGroup direction={args.direction} className="h-full">
						<ResizablePanel defaultSize={40}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Top Panel</div>
								<div className="resizable-panel-content">
									<h4>Top Panel Content</h4>
									{generateParagraphs(2, "top")}
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={60}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Bottom Panel</div>
								<div className="resizable-panel-content">
									<h4>Bottom Panel Content</h4>
									{generateParagraphs(3, "bottom")}
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

// Multiple Resizable Panels
export const MultiplePanels: Story = {
	args: {
		direction: "horizontal",
	},
	render: (args) => (
		<div className="resizable-story-container">
			<div className="resizable-story-section">
				<h3>Multiple Resizable Panels</h3>
				<div className="resizable-story-description">
					Three or more panels with resize handles between them.
				</div>

				<div className="resizable-demo resizable-demo-horizontal">
					<ResizablePanelGroup direction={args.direction} className="h-full">
						<ResizablePanel defaultSize={25} minSize={15}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Navigation</div>
								<div className="resizable-panel-content">
									<h4>Navigation Menu</h4>
									<ul className="mt-4 space-y-2">
										{[
											"Dashboard",
											"Projects",
											"Team",
											"Calendar",
											"Reports",
											"Settings",
										].map((item) => (
											<li
												key={`nav-${item}`}
												className="cursor-pointer rounded-md px-3 py-2 hover:bg-muted"
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={50}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Content</div>
								<div className="resizable-panel-content">
									<h4>Main Content Area</h4>
									{generateParagraphs(3, "main")}
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={25} minSize={15}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Details</div>
								<div className="resizable-panel-content">
									<h4>Item Details</h4>
									<div className="mt-4 space-y-3">
										<div>
											<strong>Name:</strong> Example Item
										</div>
										<div>
											<strong>Created:</strong> Jan 10, 2023
										</div>
										<div>
											<strong>Status:</strong> Active
										</div>
										<div>
											<strong>Owner:</strong> John Doe
										</div>
									</div>
								</div>
							</div>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

// Nested Resizable Panels
export const NestedPanels: Story = {
	args: {},
	render: (args) => (
		<div className="resizable-story-container">
			<div className="resizable-story-section">
				<h3>Nested Resizable Panels</h3>
				<div className="resizable-story-description">
					Complex layout with nested resizable panels for advanced UI layouts.
				</div>

				<div className="resizable-demo resizable-demo-nested">
					<ResizablePanelGroup direction="horizontal" className="h-full">
						<ResizablePanel defaultSize={25} minSize={15}>
							<div className="resizable-panel-container">
								<div className="resizable-panel-label">Explorer</div>
								<div className="resizable-file-tree">
									<FileTree
										files={mockFiles}
										onSelect={() => {}}
										activeFile=""
									/>
								</div>
							</div>
						</ResizablePanel>
						<ResizableHandle withHandle />
						<ResizablePanel defaultSize={75}>
							<ResizablePanelGroup direction="vertical">
								<ResizablePanel defaultSize={70}>
									<div className="resizable-panel-container">
										<div className="resizable-panel-label">Editor</div>
										<div className="resizable-code-editor">
											<pre>{`import React from 'react';

function ExampleComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="example">
      <h2>Example Component</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent;`}</pre>
										</div>
									</div>
								</ResizablePanel>
								<ResizableHandle withHandle />
								<ResizablePanel defaultSize={30}>
									<ResizablePanelGroup direction="horizontal">
										<ResizablePanel defaultSize={50}>
											<div className="resizable-panel-container">
												<div className="resizable-panel-label">Terminal</div>
												<div
													className="resizable-code-editor"
													style={{ backgroundColor: "black", color: "white" }}
												>
													<pre>{`$ npm start
> example@1.0.0 start
> react-scripts start

Starting development server...
Compiled successfully!

You can now view example in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.4:3000`}</pre>
												</div>
											</div>
										</ResizablePanel>
										<ResizableHandle />
										<ResizablePanel defaultSize={50}>
											<div className="resizable-panel-container">
												<div className="resizable-panel-label">Problems</div>
												<div className="resizable-panel-content">
													<div className="text-sm text-muted-foreground p-4">
														No problems detected.
													</div>
												</div>
											</div>
										</ResizablePanel>
									</ResizablePanelGroup>
								</ResizablePanel>
							</ResizablePanelGroup>
						</ResizablePanel>
					</ResizablePanelGroup>
				</div>
			</div>
		</div>
	),
};

// Interactive Code Editor with Preview
export const CodeEditorWithPreview: Story = {
	args: {},
	render: (args) => {
		const [code, setCode] = useState(`<div class="example">
  <h2>Example Component</h2>
  <p>This is a live preview.</p>
  <button class="resizable-button">
    Click me
  </button>
</div>`);

		return (
			<div className="resizable-story-container">
				<div className="resizable-story-section">
					<h3>Code Editor with Preview</h3>
					<div className="resizable-story-description">
						A resizable layout for code editing with live preview - common in
						development environments.
					</div>

					<div className="resizable-demo resizable-demo-code">
						<ResizablePanelGroup direction="horizontal" className="h-full">
							<ResizablePanel defaultSize={50} minSize={30}>
								<div className="resizable-panel-container">
									<div className="resizable-panel-label">HTML Editor</div>
									<textarea
										className="resizable-code-editor w-full h-full border-0 focus:outline-none"
										value={code}
										onChange={(e) => setCode(e.target.value)}
										spellCheck={false}
									/>
								</div>
							</ResizablePanel>
							<ResizableHandle withHandle />
							<ResizablePanel defaultSize={50} minSize={30}>
								<div className="resizable-panel-container">
									<div className="resizable-panel-label">Preview</div>
									<div className="resizable-code-preview">
										<div dangerouslySetInnerHTML={{ __html: code }} />
									</div>
								</div>
							</ResizablePanel>
						</ResizablePanelGroup>
					</div>
				</div>
			</div>
		);
	},
};

// Responsive Layout (Desktop vs Mobile)
export const ResponsiveLayout: Story = {
	args: {},
	render: (args) => {
		const [layout, setLayout] = useState("desktop");

		return (
			<div className="resizable-story-container">
				<div className="resizable-story-section">
					<h3>Responsive Layout</h3>
					<div className="resizable-story-description">
						A demonstration of using resizable panels to create responsive
						layouts for different viewports.
					</div>

					<div className="resizable-layout-direction">
						<div
							className="resizable-direction-option"
							data-active={layout === "desktop"}
							onClick={() => setLayout("desktop")}
						>
							<LayoutPanelLeftIcon size={16} />
							Desktop Layout
						</div>
						<div
							className="resizable-direction-option"
							data-active={layout === "mobile"}
							onClick={() => setLayout("mobile")}
						>
							<LayoutPanelRightIcon size={16} />
							Mobile Layout
						</div>
					</div>

					<div className="resizable-demo resizable-demo-horizontal">
						{layout === "desktop" ? (
							<ResizablePanelGroup direction="horizontal" className="h-full">
								<ResizablePanel defaultSize={25} minSize={15}>
									<div className="resizable-card">
										<div className="resizable-card-header">Conversations</div>
										<div className="resizable-card-content">
											<div className="space-y-2">
												{[
													"John Doe",
													"Jane Smith",
													"Team Chat",
													"Project X",
													"Support",
												].map((name) => (
													<div
														key={`chat-${name}`}
														className="rounded p-2 cursor-pointer hover:bg-muted"
													>
														{name}
													</div>
												))}
											</div>
										</div>
									</div>
								</ResizablePanel>
								<ResizableHandle />
								<ResizablePanel defaultSize={75}>
									<div className="resizable-chat-container">
										<div className="resizable-card-header">
											Chat with John Doe
										</div>
										<div className="resizable-chat-messages">
											{generateParagraphs(6, "chat")}
										</div>
										<div className="resizable-chat-input">
											<input
												type="text"
												className="resizable-input"
												placeholder="Type your message..."
											/>
											<button className="resizable-button">Send</button>
										</div>
									</div>
								</ResizablePanel>
							</ResizablePanelGroup>
						) : (
							<div className="resizable-mobile-view">
								<div className="resizable-mobile-header">
									<button className="text-sm">Back</button>
									<div className="font-medium">Chat</div>
									<div className="w-10"></div>
								</div>
								<div className="resizable-mobile-content">
									<div className="resizable-chat-container">
										<div className="resizable-chat-messages">
											{generateParagraphs(6, "mobile-chat")}
										</div>
										<div className="resizable-chat-input">
											<input
												type="text"
												className="resizable-input"
												placeholder="Type your message..."
											/>
											<button className="resizable-button">Send</button>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		);
	},
};
