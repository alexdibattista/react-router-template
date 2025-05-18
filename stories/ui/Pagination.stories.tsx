import type { Meta, StoryObj } from "@storybook/react";
import {
	ArrowLeftIcon,
	ArrowRightIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	LoaderIcon,
} from "lucide-react";
import React, { useState } from "react";

import { Button } from "../../app/components/ui/button";
import { Label } from "../../app/components/ui/label";
import { Skeleton } from "../../app/components/ui/skeleton";
import { Switch } from "../../app/components/ui/switch";
import { cn } from "../../app/lib/utils";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./Pagination";
import "./Pagination.css";

// Define the interface for story props
interface PaginationStoryProps {
	className?: string;
}

// Create a meta object for the Pagination stories
const meta = {
	title: "UI/Pagination",
	component: Pagination,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<PaginationStoryProps>;

export default meta;
type Story = StoryObj<typeof Pagination>;

// Default Pagination
export const Default: Story = {
	render: () => (
		<div className="pagination-story-container">
			<div className="pagination-story-section">
				<h3>Default Pagination</h3>
				<div className="pagination-story-description">
					A basic pagination component with numbered pages.
				</div>

				<div className="pagination-story-card">
					<div className="pagination-story-demo">
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious href="#" />
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">1</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#" isActive>
										2
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">3</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
								<PaginationItem>
									<PaginationNext href="#" />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
					<p className="pagination-story-info">
						The default pagination component provides a clean, accessible way to
						navigate through multi-page content, with previous/next buttons and
						numbered page indicators.
					</p>
				</div>
			</div>
		</div>
	),
};

// Interactive Pagination
export const Interactive: Story = {
	render: () => {
		const [currentPage, setCurrentPage] = useState(1);
		const totalPages = 10;

		const goToPage = (page: number) => {
			if (page >= 1 && page <= totalPages) {
				setCurrentPage(page);
			}
		};

		const generatePageNumbers = () => {
			const pages = [];
			const maxVisiblePages = 5;

			if (totalPages <= maxVisiblePages) {
				// If we have few pages, show all of them
				for (let i = 1; i <= totalPages; i++) {
					pages.push(i);
				}
			} else {
				// Always show first page
				pages.push(1);

				// Calculate the range of pages to show around the current page
				const leftBoundary = Math.max(2, currentPage - 1);
				const rightBoundary = Math.min(totalPages - 1, currentPage + 1);

				// Add ellipsis after first page if needed
				if (leftBoundary > 2) {
					pages.push("ellipsis-start");
				}

				// Add pages around current page
				for (let i = leftBoundary; i <= rightBoundary; i++) {
					pages.push(i);
				}

				// Add ellipsis before last page if needed
				if (rightBoundary < totalPages - 1) {
					pages.push("ellipsis-end");
				}

				// Always show last page
				pages.push(totalPages);
			}

			return pages;
		};

		const pageItems = generatePageNumbers();

		return (
			<div className="pagination-story-container">
				<div className="pagination-story-section">
					<h3>Interactive Pagination</h3>
					<div className="pagination-story-description">
						A functional pagination component with page navigation.
					</div>

					<div className="pagination-story-card">
						<div className="pagination-story-demo">
							<div className="pagination-story-demo-content">
								<h4 className="text-lg font-semibold mb-2">
									Current Page: {currentPage}
								</h4>
								<p className="text-sm text-muted-foreground mb-4">
									Click on the pagination controls to navigate between pages.
								</p>
							</div>

							<Pagination>
								<PaginationContent>
									<PaginationItem>
										<PaginationPrevious
											href="#"
											onClick={(e) => {
												e.preventDefault();
												goToPage(currentPage - 1);
											}}
											className={cn(
												currentPage === 1 && "pointer-events-none opacity-50",
											)}
										/>
									</PaginationItem>

									{pageItems.map((page, i) =>
										page === "ellipsis-start" || page === "ellipsis-end" ? (
											<PaginationItem key={`ellipsis-${i}`}>
												<PaginationEllipsis />
											</PaginationItem>
										) : (
											<PaginationItem key={page}>
												<PaginationLink
													href="#"
													isActive={page === currentPage}
													onClick={(e) => {
														e.preventDefault();
														goToPage(page as number);
													}}
												>
													{page}
												</PaginationLink>
											</PaginationItem>
										),
									)}

									<PaginationItem>
										<PaginationNext
											href="#"
											onClick={(e) => {
												e.preventDefault();
												goToPage(currentPage + 1);
											}}
											className={cn(
												currentPage === totalPages &&
													"pointer-events-none opacity-50",
											)}
										/>
									</PaginationItem>
								</PaginationContent>
							</Pagination>
						</div>
						<p className="pagination-story-info">
							This interactive pagination component demonstrates how to
							implement functional page navigation. It intelligently manages the
							display of page numbers and ellipses based on the current page and
							total pages.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Table Pagination
export const TablePagination: Story = {
	render: () => {
		const [currentPage, setCurrentPage] = useState(1);
		const [itemsPerPage, setItemsPerPage] = useState(5);
		const totalItems = 50;
		const totalPages = Math.ceil(totalItems / itemsPerPage);

		const items = Array.from({ length: totalItems }, (_, i) => ({
			id: i + 1,
			name: `Item ${i + 1}`,
			category: `Category ${(i % 5) + 1}`,
			value: Math.floor(Math.random() * 1000),
		}));

		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
		const currentItems = items.slice(startIndex, endIndex);

		const goToPage = (page: number) => {
			if (page >= 1 && page <= totalPages) {
				setCurrentPage(page);
			}
		};

		return (
			<div className="pagination-story-container">
				<div className="pagination-story-section">
					<h3>Table Pagination</h3>
					<div className="pagination-story-description">
						Pagination integrated with a data table, showing a subset of items
						per page.
					</div>

					<div className="pagination-story-card">
						<div className="pagination-story-demo">
							<table className="pagination-story-table">
								<thead>
									<tr>
										<th>ID</th>
										<th>Name</th>
										<th>Category</th>
										<th>Value</th>
									</tr>
								</thead>
								<tbody>
									{currentItems.map((item) => (
										<tr key={item.id}>
											<td>{item.id}</td>
											<td>{item.name}</td>
											<td>{item.category}</td>
											<td>${item.value.toFixed(2)}</td>
										</tr>
									))}
								</tbody>
							</table>

							<div className="flex items-center justify-between border-t pt-4">
								<div className="text-sm text-muted-foreground">
									Showing {startIndex + 1}-{endIndex} of {totalItems} items
								</div>

								<Pagination>
									<PaginationContent>
										<PaginationItem>
											<PaginationPrevious
												href="#"
												onClick={(e) => {
													e.preventDefault();
													goToPage(currentPage - 1);
												}}
												className={cn(
													currentPage === 1 && "pointer-events-none opacity-50",
												)}
											/>
										</PaginationItem>

										{currentPage > 1 && (
											<PaginationItem>
												<PaginationLink
													href="#"
													onClick={(e) => {
														e.preventDefault();
														goToPage(1);
													}}
												>
													1
												</PaginationLink>
											</PaginationItem>
										)}

										{currentPage > 3 && (
											<PaginationItem>
												<PaginationEllipsis />
											</PaginationItem>
										)}

										{currentPage > 2 && (
											<PaginationItem>
												<PaginationLink
													href="#"
													onClick={(e) => {
														e.preventDefault();
														goToPage(currentPage - 1);
													}}
												>
													{currentPage - 1}
												</PaginationLink>
											</PaginationItem>
										)}

										<PaginationItem>
											<PaginationLink href="#" isActive>
												{currentPage}
											</PaginationLink>
										</PaginationItem>

										{currentPage < totalPages - 1 && (
											<PaginationItem>
												<PaginationLink
													href="#"
													onClick={(e) => {
														e.preventDefault();
														goToPage(currentPage + 1);
													}}
												>
													{currentPage + 1}
												</PaginationLink>
											</PaginationItem>
										)}

										{currentPage < totalPages - 2 && (
											<PaginationItem>
												<PaginationEllipsis />
											</PaginationItem>
										)}

										{currentPage < totalPages && (
											<PaginationItem>
												<PaginationLink
													href="#"
													onClick={(e) => {
														e.preventDefault();
														goToPage(totalPages);
													}}
												>
													{totalPages}
												</PaginationLink>
											</PaginationItem>
										)}

										<PaginationItem>
											<PaginationNext
												href="#"
												onClick={(e) => {
													e.preventDefault();
													goToPage(currentPage + 1);
												}}
												className={cn(
													currentPage === totalPages &&
														"pointer-events-none opacity-50",
												)}
											/>
										</PaginationItem>
									</PaginationContent>
								</Pagination>
							</div>

							<div className="pagination-story-controls">
								<div className="pagination-story-control">
									<Label htmlFor="items-per-page">Items per page:</Label>
									<select
										id="items-per-page"
										className="h-8 rounded-md border border-input px-3 py-1 text-sm"
										value={itemsPerPage}
										onChange={(e) => {
											setItemsPerPage(Number(e.target.value));
											setCurrentPage(1);
										}}
									>
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="15">15</option>
										<option value="20">20</option>
									</select>
								</div>
							</div>
						</div>
						<p className="pagination-story-info">
							Table pagination is a common pattern for displaying large datasets
							in digestible chunks. This example shows how to integrate
							pagination with a data table, including item count display and
							items-per-page control.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Custom Styled Pagination
export const CustomStyling: Story = {
	render: () => (
		<div className="pagination-story-container">
			<div className="pagination-story-section">
				<h3>Custom Styled Pagination</h3>
				<div className="pagination-story-description">
					Pagination components with custom styling variations.
				</div>

				<div className="pagination-story-card">
					<div className="pagination-story-demo">
						<h4 className="text-sm font-medium mb-4">Simple Arrows</h4>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<Button variant="outline" size="icon" className="h-8 w-8">
										<ChevronLeftIcon className="h-4 w-4" />
										<span className="sr-only">Previous page</span>
									</Button>
								</PaginationItem>
								<PaginationItem>
									<div className="flex items-center text-sm">Page 2 of 10</div>
								</PaginationItem>
								<PaginationItem>
									<Button variant="outline" size="icon" className="h-8 w-8">
										<ChevronRightIcon className="h-4 w-4" />
										<span className="sr-only">Next page</span>
									</Button>
								</PaginationItem>
							</PaginationContent>
						</Pagination>

						<h4 className="text-sm font-medium mt-8 mb-4">Outline Style</h4>
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationLink
										href="#"
										variant="outline"
										className="rounded-full"
									>
										<ArrowLeftIcon className="h-4 w-4 mr-2" />
										Previous
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										variant="outline"
										className="rounded-full"
									>
										1
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										variant="outline"
										className="rounded-full bg-primary text-primary-foreground"
										isActive
									>
										2
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										variant="outline"
										className="rounded-full"
									>
										3
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										variant="outline"
										className="rounded-full"
									>
										Next
										<ArrowRightIcon className="h-4 w-4 ml-2" />
									</PaginationLink>
								</PaginationItem>
							</PaginationContent>
						</Pagination>

						<h4 className="text-sm font-medium mt-8 mb-4">Compact Style</h4>
						<Pagination>
							<PaginationContent className="gap-0 border rounded-md overflow-hidden">
								<PaginationItem>
									<PaginationLink
										href="#"
										className="rounded-none border-r h-8 w-8 p-0 flex items-center justify-center"
									>
										<ChevronLeftIcon className="h-4 w-4" />
										<span className="sr-only">Previous page</span>
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										className="rounded-none border-r h-8 w-8 p-0 flex items-center justify-center"
									>
										1
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										className="rounded-none border-r h-8 w-8 p-0 flex items-center justify-center bg-primary text-primary-foreground"
										isActive
									>
										2
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										className="rounded-none border-r h-8 w-8 p-0 flex items-center justify-center"
									>
										3
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink
										href="#"
										className="rounded-none h-8 w-8 p-0 flex items-center justify-center"
									>
										<ChevronRightIcon className="h-4 w-4" />
										<span className="sr-only">Next page</span>
									</PaginationLink>
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
					<p className="pagination-story-info">
						Pagination components can be styled in various ways to match your
						application's design. These examples demonstrate different styling
						approaches, from simple arrows to outline and compact styles.
					</p>
				</div>
			</div>
		</div>
	),
};

// Loading State Pagination
export const LoadingState: Story = {
	render: () => {
		const [isLoading, setIsLoading] = useState(false);

		const handlePageChange = (page: number) => {
			setIsLoading(true);
			// Simulate loading delay
			setTimeout(() => {
				setIsLoading(false);
			}, 1500);
		};

		return (
			<div className="pagination-story-container">
				<div className="pagination-story-section">
					<h3>Loading State Pagination</h3>
					<div className="pagination-story-description">
						Pagination with loading states when navigating between pages.
					</div>

					<div className="pagination-story-card">
						<div className="pagination-story-demo">
							{isLoading ? (
								<div className="pagination-story-loading">
									<LoaderIcon className="h-8 w-8 animate-spin text-muted-foreground" />
								</div>
							) : (
								<div className="pagination-story-item-content">
									<div className="pagination-story-item-title">
										Page Content
									</div>
									<div className="pagination-story-item-description">
										This content would be loaded when you navigate to a new
										page. Click on any pagination control to see the loading
										state.
									</div>
								</div>
							)}

							<Pagination>
								<PaginationContent>
									<PaginationItem>
										<PaginationPrevious
											href="#"
											onClick={(e) => {
												e.preventDefault();
												handlePageChange(1);
											}}
											className={
												isLoading ? "pointer-events-none opacity-50" : ""
											}
										/>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink
											href="#"
											onClick={(e) => {
												e.preventDefault();
												handlePageChange(1);
											}}
											className={isLoading ? "pointer-events-none" : ""}
										>
											1
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink
											href="#"
											onClick={(e) => {
												e.preventDefault();
												handlePageChange(2);
											}}
											isActive
											className={isLoading ? "pointer-events-none" : ""}
										>
											2
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationLink
											href="#"
											onClick={(e) => {
												e.preventDefault();
												handlePageChange(3);
											}}
											className={isLoading ? "pointer-events-none" : ""}
										>
											3
										</PaginationLink>
									</PaginationItem>
									<PaginationItem>
										<PaginationNext
											href="#"
											onClick={(e) => {
												e.preventDefault();
												handlePageChange(3);
											}}
											className={
												isLoading ? "pointer-events-none opacity-50" : ""
											}
										/>
									</PaginationItem>
								</PaginationContent>
							</Pagination>

							<div className="pagination-story-controls">
								<div className="pagination-story-control">
									<Switch
										id="loading"
										checked={isLoading}
										onCheckedChange={setIsLoading}
									/>
									<Label htmlFor="loading" className="ml-2">
										Toggle loading state
									</Label>
								</div>
							</div>
						</div>
						<p className="pagination-story-info">
							When paginating content that requires server-side loading, it's
							important to show loading states to provide feedback to users.
							This example demonstrates how to handle loading states when
							navigating between pages.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Responsive Pagination
export const ResponsivePagination: Story = {
	render: () => {
		const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop

		// Simulate different screen sizes
		const handleViewportChange = (width: number) => {
			setWindowWidth(width);
		};

		return (
			<div className="pagination-story-container">
				<div className="pagination-story-section">
					<h3>Responsive Pagination</h3>
					<div className="pagination-story-description">
						Pagination that adapts to different screen sizes.
					</div>

					<div className="pagination-story-controls mb-6">
						<div className="pagination-story-control">
							<Button
								variant="outline"
								size="sm"
								onClick={() => handleViewportChange(320)}
								className={cn(
									"text-xs px-2",
									windowWidth === 320 && "bg-primary text-primary-foreground",
								)}
							>
								Mobile
							</Button>
							<Button
								variant="outline"
								size="sm"
								onClick={() => handleViewportChange(768)}
								className={cn(
									"text-xs px-2",
									windowWidth === 768 && "bg-primary text-primary-foreground",
								)}
							>
								Tablet
							</Button>
							<Button
								variant="outline"
								size="sm"
								onClick={() => handleViewportChange(1024)}
								className={cn(
									"text-xs px-2",
									windowWidth === 1024 && "bg-primary text-primary-foreground",
								)}
							>
								Desktop
							</Button>
						</div>
					</div>

					<div className="pagination-story-card">
						<div className="pagination-story-demo">
							<div className="pagination-story-responsive">
								{windowWidth <= 480 ? (
									// Mobile view - minimal pagination
									<Pagination>
										<PaginationContent>
											<PaginationItem>
												<PaginationPrevious href="#" />
											</PaginationItem>
											<PaginationItem>
												<div className="flex items-center text-sm font-medium">
													2 / 10
												</div>
											</PaginationItem>
											<PaginationItem>
												<PaginationNext href="#" />
											</PaginationItem>
										</PaginationContent>
									</Pagination>
								) : windowWidth <= 768 ? (
									// Tablet view - fewer page numbers
									<Pagination>
										<PaginationContent>
											<PaginationItem>
												<PaginationPrevious href="#" />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">1</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#" isActive>
													2
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">3</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationEllipsis />
											</PaginationItem>
											<PaginationItem>
												<PaginationNext href="#" />
											</PaginationItem>
										</PaginationContent>
									</Pagination>
								) : (
									// Desktop view - full pagination
									<Pagination>
										<PaginationContent>
											<PaginationItem>
												<PaginationPrevious href="#" />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">1</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#" isActive>
													2
												</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">3</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">4</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">5</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationEllipsis />
											</PaginationItem>
											<PaginationItem>
												<PaginationLink href="#">10</PaginationLink>
											</PaginationItem>
											<PaginationItem>
												<PaginationNext href="#" />
											</PaginationItem>
										</PaginationContent>
									</Pagination>
								)}
							</div>
						</div>
						<p className="pagination-story-info">
							Responsive pagination adapts to different screen sizes, showing
							fewer page numbers on smaller screens to conserve space. This
							example demonstrates three different layouts: a minimal view for
							mobile, a compact view for tablets, and a full view for desktop.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Dark Theme Pagination
export const DarkTheme: Story = {
	render: () => (
		<div className="pagination-story-container pagination-story-dark">
			<div className="pagination-story-section">
				<h3>Dark Theme Pagination</h3>
				<div className="pagination-story-description">
					Pagination components styled for dark mode interfaces.
				</div>

				<div className="pagination-story-card">
					<div className="pagination-story-demo">
						<Pagination>
							<PaginationContent>
								<PaginationItem>
									<PaginationPrevious href="#" />
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">1</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#" isActive>
										2
									</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationLink href="#">3</PaginationLink>
								</PaginationItem>
								<PaginationItem>
									<PaginationEllipsis />
								</PaginationItem>
								<PaginationItem>
									<PaginationNext href="#" />
								</PaginationItem>
							</PaginationContent>
						</Pagination>
					</div>
					<p className="pagination-story-info">
						Dark theme pagination provides the same functionality as the light
						theme but is styled to match dark mode interfaces. This ensures
						consistent user experience across different color schemes.
					</p>
				</div>
			</div>
		</div>
	),
};
