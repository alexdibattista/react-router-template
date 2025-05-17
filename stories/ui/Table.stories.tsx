import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Table } from "./Table";

const meta = {
	title: "UI/Table",
	component: Table,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		caption: "A list of your recent invoices",
		headers: ["Invoice", "Status", "Method", "Amount"],
		rows: [
			["INV001", "Paid", "Credit Card", "$250.00"],
			["INV002", "Pending", "PayPal", "$150.00"],
			["INV003", "Paid", "Bank Transfer", "$350.00"],
			["INV004", "Paid", "Credit Card", "$450.00"],
			["INV005", "Pending", "PayPal", "$550.00"],
			["INV006", "Paid", "Bank Transfer", "$200.00"],
			["INV007", "Paid", "Credit Card", "$300.00"],
		],
	},
};

export const WithFooter: Story = {
	args: {
		caption: "A list of your recent invoices",
		headers: ["Invoice", "Status", "Method", "Amount"],
		rows: [
			["INV001", "Paid", "Credit Card", "$250.00"],
			["INV002", "Pending", "PayPal", "$150.00"],
			["INV003", "Paid", "Bank Transfer", "$350.00"],
		],
		footer: ["Total", "", "", "$750.00"],
	},
};

// Example with custom rendering for status cells
export const WithCustomCells: Story = {
	render: () => (
		<div className="storybook-table-container">
			<Table
				caption="A list of your recent invoices"
				headers={["Invoice", "Status", "Method", "Amount"]}
				rows={[
					[
						"INV001",
						<div key="status-1" className="table-demo-status">
							<div className="table-demo-status-indicator status-success" />
							<span>Success</span>
						</div>,
						"Credit Card",
						<span key="amount-1" className="table-demo-amount">
							$250.00
						</span>,
					],
					[
						"INV002",
						<div key="status-2" className="table-demo-status">
							<div className="table-demo-status-indicator status-pending" />
							<span>Pending</span>
						</div>,
						"PayPal",
						<span key="amount-2" className="table-demo-amount">
							$150.00
						</span>,
					],
					[
						"INV003",
						<div key="status-3" className="table-demo-status">
							<div className="table-demo-status-indicator status-processing" />
							<span>Processing</span>
						</div>,
						"Bank Transfer",
						<span key="amount-3" className="table-demo-amount">
							$350.00
						</span>,
					],
					[
						"INV004",
						<div key="status-4" className="table-demo-status">
							<div className="table-demo-status-indicator status-failed" />
							<span>Failed</span>
						</div>,
						"Credit Card",
						<span key="amount-4" className="table-demo-amount">
							$450.00
						</span>,
					],
				]}
				footer={[
					"Total",
					"",
					"",
					<span key="total-amount" className="table-demo-amount">
						$1,200.00
					</span>,
				]}
			/>
		</div>
	),
};

// Compact table
export const Compact: Story = {
	render: () => (
		<div className="storybook-table-container">
			<Table
				className="table-compact"
				headers={["ID", "Name", "Role", "Department"]}
				rows={[
					["001", "John Doe", "Developer", "Engineering"],
					["002", "Jane Smith", "Designer", "Design"],
					["003", "Bob Johnson", "Manager", "Operations"],
					["004", "Alice Brown", "Analyst", "Finance"],
					["005", "Charlie Wilson", "Marketer", "Marketing"],
				]}
			/>
		</div>
	),
};

// Table with zebra striping
export const ZebraStriped: Story = {
	render: () => (
		<div className="storybook-table-container">
			<Table
				className="table-zebra"
				headers={["Project", "Budget", "Status", "Due Date"]}
				rows={[
					["Website Redesign", "$15,000", "In Progress", "2023-12-31"],
					["Mobile App Development", "$45,000", "Planning", "2024-03-15"],
					["CRM Integration", "$12,000", "Completed", "2023-10-15"],
					["SEO Optimization", "$5,000", "In Progress", "2023-11-30"],
					["Content Strategy", "$8,000", "Planning", "2024-01-15"],
				]}
			/>
		</div>
	),
};
