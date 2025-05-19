import type { Meta, StoryObj } from "@storybook/react";
import {
	BookmarkIcon,
	ClipboardIcon,
	ClipboardPasteIcon,
	CopyIcon,
	FileIcon,
	FileTextIcon,
	FilmIcon,
	FolderIcon,
	ImageIcon,
	LinkIcon,
	Loader2Icon,
	PencilIcon,
	RefreshCwIcon,
	SaveIcon,
	ScissorsIcon,
	Share2Icon,
	Trash2Icon,
	UndoIcon,
	UserIcon,
} from "lucide-react";
import { useState } from "react";

import { Button } from "../../app/components/ui/button";
import { Input } from "../../app/components/ui/input";
import { Label } from "../../app/components/ui/label";
import { Switch } from "../../app/components/ui/switch";

import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuGroup,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuPortal,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from "./ContextMenu";
import "./ContextMenu.css";

// Define the interface for story props
interface ContextMenuStoryProps {
	className?: string;
}

// Create a meta object for the ContextMenu stories
const meta = {
	title: "UI/ContextMenu",
	component: ContextMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<ContextMenuStoryProps>;

export default meta;
type Story = StoryObj<typeof ContextMenu>;

// Default/Basic ContextMenu
export const Default: Story = {
	render: () => {
		const handleAction = (action: string) => {
			console.log(`Action: ${action}`);
		};

		return (
			<div className="context-menu-story-container">
				<div className="context-menu-story-section">
					<h3>Default Context Menu</h3>
					<div className="context-menu-story-description">
						A basic context menu with various options and shortcuts. Right-click
						on the area below to open the menu.
					</div>

					<div className="context-menu-story-card">
						<div className="context-menu-story-demo">
							<ContextMenu>
								<ContextMenuTrigger className="context-menu-story-trigger">
									Right-click here to open context menu
								</ContextMenuTrigger>
								<ContextMenuContent>
									<ContextMenuItem onClick={() => handleAction("Back")}>
										<UndoIcon className="h-4 w-4 mr-2" />
										Back
										<ContextMenuShortcut>⌘[</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuItem
										onClick={() => handleAction("Forward")}
										disabled
									>
										Reload
										<ContextMenuShortcut>⌘R</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuItem onClick={() => handleAction("Save")}>
										<SaveIcon className="h-4 w-4 mr-2" />
										Save
										<ContextMenuShortcut>⌘S</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Save As")}>
										Save As...
										<ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuCheckboxItem
										checked={true}
										onClick={() => handleAction("Show Bookmarks")}
									>
										Show Bookmarks
										<ContextMenuShortcut>⌘B</ContextMenuShortcut>
									</ContextMenuCheckboxItem>
									<ContextMenuCheckboxItem
										checked={false}
										onClick={() => handleAction("Show Full URLs")}
									>
										Show Full URLs
									</ContextMenuCheckboxItem>
									<ContextMenuSeparator />
									<ContextMenuRadioGroup value="pedro">
										<ContextMenuLabel>People</ContextMenuLabel>
										<ContextMenuRadioItem value="pedro">
											Pedro Duarte
										</ContextMenuRadioItem>
										<ContextMenuRadioItem value="sanders">
											Sanders Sanderson
										</ContextMenuRadioItem>
									</ContextMenuRadioGroup>
								</ContextMenuContent>
							</ContextMenu>
						</div>
						<p className="context-menu-story-info">
							Context menus provide convenient access to actions related to the
							element they're triggered from. They can contain simple items,
							checkboxes, radio buttons, separators, and nested submenus.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Text Editor Context Menu
export const TextEditor: Story = {
	render: () => {
		const [text, setText] = useState(
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at justo vel nisi finibus efficitur. Right-click on this text to access formatting options.",
		);

		const handleAction = (action: string) => {
			console.log(`Text editor action: ${action}`);
		};

		return (
			<div className="context-menu-story-container">
				<div className="context-menu-story-section">
					<h3>Text Editor Context Menu</h3>
					<div className="context-menu-story-description">
						A context menu with text editing options. Right-click on the text
						area below.
					</div>

					<div className="context-menu-story-card">
						<div className="context-menu-story-demo">
							<ContextMenu>
								<ContextMenuTrigger className="context-menu-story-text-area">
									{text}
								</ContextMenuTrigger>
								<ContextMenuContent>
									<ContextMenuItem onClick={() => handleAction("Cut")}>
										<ScissorsIcon className="h-4 w-4 mr-2" />
										Cut
										<ContextMenuShortcut>⌘X</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Copy")}>
										<CopyIcon className="h-4 w-4 mr-2" />
										Copy
										<ContextMenuShortcut>⌘C</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Paste")}>
										<ClipboardPasteIcon className="h-4 w-4 mr-2" />
										Paste
										<ContextMenuShortcut>⌘V</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuSub>
										<ContextMenuSubTrigger>
											<PencilIcon className="h-4 w-4 mr-2" />
											Format
										</ContextMenuSubTrigger>
										<ContextMenuSubContent className="w-48">
											<ContextMenuCheckboxItem
												checked={true}
												onClick={() => handleAction("Bold")}
											>
												Bold
												<ContextMenuShortcut>⌘B</ContextMenuShortcut>
											</ContextMenuCheckboxItem>
											<ContextMenuCheckboxItem
												checked={false}
												onClick={() => handleAction("Italic")}
											>
												Italic
												<ContextMenuShortcut>⌘I</ContextMenuShortcut>
											</ContextMenuCheckboxItem>
											<ContextMenuCheckboxItem
												checked={false}
												onClick={() => handleAction("Underline")}
											>
												Underline
												<ContextMenuShortcut>⌘U</ContextMenuShortcut>
											</ContextMenuCheckboxItem>
											<ContextMenuSeparator />
											<ContextMenuRadioGroup value="normal">
												<ContextMenuLabel>Font Size</ContextMenuLabel>
												<ContextMenuRadioItem value="small">
													Small
												</ContextMenuRadioItem>
												<ContextMenuRadioItem value="normal">
													Normal
												</ContextMenuRadioItem>
												<ContextMenuRadioItem value="large">
													Large
												</ContextMenuRadioItem>
											</ContextMenuRadioGroup>
										</ContextMenuSubContent>
									</ContextMenuSub>
									<ContextMenuItem onClick={() => handleAction("Create Link")}>
										<LinkIcon className="h-4 w-4 mr-2" />
										Create Link
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuItem onClick={() => handleAction("Select All")}>
										Select All
										<ContextMenuShortcut>⌘A</ContextMenuShortcut>
									</ContextMenuItem>
								</ContextMenuContent>
							</ContextMenu>
						</div>
						<p className="context-menu-story-info">
							Text editor context menus provide quick access to common text
							manipulation and formatting operations. They often include
							clipboard operations (cut, copy, paste), formatting options, and
							text selection commands.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Image Editing Context Menu
export const ImageEditing: Story = {
	render: () => {
		const handleAction = (action: string) => {
			console.log(`Image action: ${action}`);
		};

		return (
			<div className="context-menu-story-container">
				<div className="context-menu-story-section">
					<h3>Image Context Menu</h3>
					<div className="context-menu-story-description">
						A context menu for image manipulation. Right-click on the image
						below.
					</div>

					<div className="context-menu-story-card">
						<div className="context-menu-story-demo">
							<ContextMenu>
								<ContextMenuTrigger>
									<div className="context-menu-story-image">
										<img
											src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6?q=80&w=1470&auto=format&fit=crop"
											alt="Sample landscape"
										/>
									</div>
								</ContextMenuTrigger>
								<ContextMenuContent>
									<ContextMenuItem onClick={() => handleAction("View Image")}>
										<ImageIcon className="h-4 w-4 mr-2" />
										View Image
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Save Image")}>
										<SaveIcon className="h-4 w-4 mr-2" />
										Save Image
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Copy Image")}>
										<CopyIcon className="h-4 w-4 mr-2" />
										Copy Image
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuSub>
										<ContextMenuSubTrigger>
											<PencilIcon className="h-4 w-4 mr-2" />
											Edit Image
										</ContextMenuSubTrigger>
										<ContextMenuSubContent className="w-48">
											<ContextMenuItem
												onClick={() => handleAction("Rotate Left")}
											>
												Rotate Left
											</ContextMenuItem>
											<ContextMenuItem
												onClick={() => handleAction("Rotate Right")}
											>
												Rotate Right
											</ContextMenuItem>
											<ContextMenuItem
												onClick={() => handleAction("Flip Horizontal")}
											>
												Flip Horizontal
											</ContextMenuItem>
											<ContextMenuItem
												onClick={() => handleAction("Flip Vertical")}
											>
												Flip Vertical
											</ContextMenuItem>
											<ContextMenuSeparator />
											<ContextMenuItem onClick={() => handleAction("Crop")}>
												Crop
											</ContextMenuItem>
											<ContextMenuItem onClick={() => handleAction("Resize")}>
												Resize
											</ContextMenuItem>
										</ContextMenuSubContent>
									</ContextMenuSub>
									<ContextMenuItem onClick={() => handleAction("Share Image")}>
										<Share2Icon className="h-4 w-4 mr-2" />
										Share Image
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuItem
										onClick={() => handleAction("Delete Image")}
										variant="destructive"
									>
										<Trash2Icon className="h-4 w-4 mr-2" />
										Delete Image
									</ContextMenuItem>
								</ContextMenuContent>
							</ContextMenu>
						</div>
						<p className="context-menu-story-info">
							Image context menus provide operations specific to image handling,
							such as saving, copying, editing, sharing, and deleting. They
							often include image-specific manipulations like rotation,
							flipping, cropping, and resizing.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// File System Context Menu
export const FileSystem: Story = {
	render: () => {
		const handleAction = (action: string, file?: string) => {
			console.log(`File action: ${action}`, file ? `on ${file}` : "");
		};

		const files = [
			{ name: "Document.pdf", icon: <FileTextIcon className="h-8 w-8" /> },
			{ name: "Image.jpg", icon: <ImageIcon className="h-8 w-8" /> },
			{ name: "Video.mp4", icon: <FilmIcon className="h-8 w-8" /> },
			{ name: "Project", icon: <FolderIcon className="h-8 w-8" /> },
			{ name: "Notes.txt", icon: <FileIcon className="h-8 w-8" /> },
			{ name: "Backup", icon: <FolderIcon className="h-8 w-8" /> },
		];

		return (
			<div className="context-menu-story-container">
				<div className="context-menu-story-section">
					<h3>File System Context Menu</h3>
					<div className="context-menu-story-description">
						A context menu for file management. Right-click on any file or
						folder below.
					</div>

					<div className="context-menu-story-card">
						<div className="context-menu-story-grid">
							{files.map((file) => (
								<ContextMenu key={`file-${file.name}`}>
									<ContextMenuTrigger>
										<div className="context-menu-story-file">
											<div className="context-menu-story-file-icon">
												{file.icon}
											</div>
											<div className="context-menu-story-file-name">
												{file.name}
											</div>
										</div>
									</ContextMenuTrigger>
									<ContextMenuContent>
										<ContextMenuItem
											onClick={() => handleAction("Open", file.name)}
										>
											Open
										</ContextMenuItem>
										<ContextMenuItem
											onClick={() => handleAction("Open with...", file.name)}
										>
											Open with...
										</ContextMenuItem>
										<ContextMenuSeparator />
										<ContextMenuItem
											onClick={() => handleAction("Copy", file.name)}
										>
											<CopyIcon className="h-4 w-4 mr-2" />
											Copy
											<ContextMenuShortcut>⌘C</ContextMenuShortcut>
										</ContextMenuItem>
										<ContextMenuItem
											onClick={() => handleAction("Cut", file.name)}
										>
											<ScissorsIcon className="h-4 w-4 mr-2" />
											Cut
											<ContextMenuShortcut>⌘X</ContextMenuShortcut>
										</ContextMenuItem>
										<ContextMenuSub>
											<ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
											<ContextMenuSubContent>
												<ContextMenuItem
													onClick={() =>
														handleAction("Share via Email", file.name)
													}
												>
													Email
												</ContextMenuItem>
												<ContextMenuItem
													onClick={() =>
														handleAction("Share via Link", file.name)
													}
												>
													Get Link
												</ContextMenuItem>
												<ContextMenuItem
													onClick={() =>
														handleAction("Share via User", file.name)
													}
												>
													<UserIcon className="h-4 w-4 mr-2" />
													Share with User
												</ContextMenuItem>
											</ContextMenuSubContent>
										</ContextMenuSub>
										<ContextMenuSeparator />
										<ContextMenuItem
											onClick={() => handleAction("Rename", file.name)}
										>
											Rename
										</ContextMenuItem>
										<ContextMenuItem
											onClick={() => handleAction("Properties", file.name)}
										>
											Properties
										</ContextMenuItem>
										<ContextMenuSeparator />
										<ContextMenuItem
											onClick={() => handleAction("Delete", file.name)}
											variant="destructive"
										>
											<Trash2Icon className="h-4 w-4 mr-2" />
											Delete
											<ContextMenuShortcut>⌫</ContextMenuShortcut>
										</ContextMenuItem>
									</ContextMenuContent>
								</ContextMenu>
							))}
						</div>
						<p className="context-menu-story-info">
							File system context menus provide operations for managing files
							and folders, such as opening, sharing, copying, moving, renaming,
							and deleting. These menus adapt to the type of item selected (file
							or folder).
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Nested Context Menu
export const NestedMenu: Story = {
	render: () => {
		const handleAction = (action: string) => {
			console.log(`Action: ${action}`);
		};

		return (
			<div className="context-menu-story-container">
				<div className="context-menu-story-section">
					<h3>Nested Context Menu</h3>
					<div className="context-menu-story-description">
						A complex context menu with multiple levels of nesting. Right-click
						on the area below.
					</div>

					<div className="context-menu-story-card">
						<div className="context-menu-story-demo">
							<ContextMenu>
								<ContextMenuTrigger className="context-menu-story-markdown">
									<h4>Markdown Document</h4>
									<p>This is a sample markdown document.</p>
									<p>
										You can use <code>inline code</code> and other formatting
										options.
									</p>
									<p>Right-click anywhere to see the context menu options.</p>
								</ContextMenuTrigger>
								<ContextMenuContent>
									<ContextMenuLabel>Document</ContextMenuLabel>
									<ContextMenuSeparator />
									<ContextMenuItem onClick={() => handleAction("New Document")}>
										New Document
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Save")}>
										<SaveIcon className="h-4 w-4 mr-2" />
										Save
										<ContextMenuShortcut>⌘S</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuSub>
										<ContextMenuSubTrigger>
											<ClipboardIcon className="h-4 w-4 mr-2" />
											Clipboard
										</ContextMenuSubTrigger>
										<ContextMenuSubContent>
											<ContextMenuItem onClick={() => handleAction("Cut")}>
												<ScissorsIcon className="h-4 w-4 mr-2" />
												Cut
												<ContextMenuShortcut>⌘X</ContextMenuShortcut>
											</ContextMenuItem>
											<ContextMenuItem onClick={() => handleAction("Copy")}>
												<CopyIcon className="h-4 w-4 mr-2" />
												Copy
												<ContextMenuShortcut>⌘C</ContextMenuShortcut>
											</ContextMenuItem>
											<ContextMenuItem onClick={() => handleAction("Paste")}>
												<ClipboardPasteIcon className="h-4 w-4 mr-2" />
												Paste
												<ContextMenuShortcut>⌘V</ContextMenuShortcut>
											</ContextMenuItem>
										</ContextMenuSubContent>
									</ContextMenuSub>
									<ContextMenuSub>
										<ContextMenuSubTrigger>
											<PencilIcon className="h-4 w-4 mr-2" />
											Edit
										</ContextMenuSubTrigger>
										<ContextMenuSubContent>
											<ContextMenuItem onClick={() => handleAction("Undo")}>
												<UndoIcon className="h-4 w-4 mr-2" />
												Undo
												<ContextMenuShortcut>⌘Z</ContextMenuShortcut>
											</ContextMenuItem>
											<ContextMenuItem onClick={() => handleAction("Redo")}>
												<RefreshCwIcon className="h-4 w-4 mr-2" />
												Redo
												<ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
											</ContextMenuItem>
											<ContextMenuSeparator />
											<ContextMenuSub>
												<ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
												<ContextMenuSubContent>
													<ContextMenuCheckboxItem
														checked={true}
														onClick={() => handleAction("Bold")}
													>
														Bold
														<ContextMenuShortcut>⌘B</ContextMenuShortcut>
													</ContextMenuCheckboxItem>
													<ContextMenuCheckboxItem
														checked={false}
														onClick={() => handleAction("Italic")}
													>
														Italic
														<ContextMenuShortcut>⌘I</ContextMenuShortcut>
													</ContextMenuCheckboxItem>
													<ContextMenuSeparator />
													<ContextMenuSub>
														<ContextMenuSubTrigger>
															Heading Level
														</ContextMenuSubTrigger>
														<ContextMenuSubContent>
															<ContextMenuRadioGroup value="h2">
																<ContextMenuRadioItem value="h1">
																	Heading 1
																</ContextMenuRadioItem>
																<ContextMenuRadioItem value="h2">
																	Heading 2
																</ContextMenuRadioItem>
																<ContextMenuRadioItem value="h3">
																	Heading 3
																</ContextMenuRadioItem>
																<ContextMenuRadioItem value="h4">
																	Heading 4
																</ContextMenuRadioItem>
															</ContextMenuRadioGroup>
														</ContextMenuSubContent>
													</ContextMenuSub>
												</ContextMenuSubContent>
											</ContextMenuSub>
										</ContextMenuSubContent>
									</ContextMenuSub>
									<ContextMenuSeparator />
									<ContextMenuGroup>
										<ContextMenuItem onClick={() => handleAction("View Mode")}>
											<BookmarkIcon className="h-4 w-4 mr-2" />
											View Mode
										</ContextMenuItem>
										<ContextMenuItem onClick={() => handleAction("Share")}>
											<Share2Icon className="h-4 w-4 mr-2" />
											Share
										</ContextMenuItem>
									</ContextMenuGroup>
								</ContextMenuContent>
							</ContextMenu>
						</div>
						<p className="context-menu-story-info">
							Nested context menus allow for hierarchical organization of
							options, reducing clutter in the main menu while still providing
							access to a large number of actions. They're particularly useful
							for complex applications with many related operations.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Dark Theme Context Menu
export const DarkTheme: Story = {
	render: () => {
		const handleAction = (action: string) => {
			console.log(`Action: ${action}`);
		};

		return (
			<div className="context-menu-story-container context-menu-story-dark">
				<div className="context-menu-story-section">
					<h3>Dark Theme Context Menu</h3>
					<div className="context-menu-story-description">
						A context menu styled for dark mode interfaces. Right-click on the
						area below.
					</div>

					<div className="context-menu-story-card">
						<div className="context-menu-story-demo">
							<ContextMenu>
								<ContextMenuTrigger className="context-menu-story-trigger">
									Right-click here to open context menu (Dark Theme)
								</ContextMenuTrigger>
								<ContextMenuContent>
									<ContextMenuItem onClick={() => handleAction("New")}>
										New
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Open")}>
										Open
										<ContextMenuShortcut>⌘O</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuItem onClick={() => handleAction("Save")}>
										Save
										<ContextMenuShortcut>⌘S</ContextMenuShortcut>
									</ContextMenuItem>
									<ContextMenuSeparator />
									<ContextMenuCheckboxItem
										checked={true}
										onClick={() => handleAction("Show Status Bar")}
									>
										Show Status Bar
									</ContextMenuCheckboxItem>
									<ContextMenuCheckboxItem
										checked={false}
										onClick={() => handleAction("Show Path Bar")}
									>
										Show Path Bar
									</ContextMenuCheckboxItem>
									<ContextMenuSeparator />
									<ContextMenuRadioGroup value="list">
										<ContextMenuLabel>View</ContextMenuLabel>
										<ContextMenuRadioItem value="list">
											List View
										</ContextMenuRadioItem>
										<ContextMenuRadioItem value="grid">
											Grid View
										</ContextMenuRadioItem>
										<ContextMenuRadioItem value="column">
											Column View
										</ContextMenuRadioItem>
									</ContextMenuRadioGroup>
								</ContextMenuContent>
							</ContextMenu>
						</div>
						<p className="context-menu-story-info">
							Dark theme context menus provide the same functionality as their
							light counterparts but are styled for dark mode interfaces. They
							typically use darker background colors and lighter text colors to
							reduce eye strain in low-light environments.
						</p>
					</div>
				</div>
			</div>
		);
	},
};
