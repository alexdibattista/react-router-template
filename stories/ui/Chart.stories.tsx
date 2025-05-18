import type { Meta, StoryObj } from "@storybook/react";
import {
	ArrowDownIcon,
	ArrowUpIcon,
	BarChart3Icon,
	LineChartIcon,
	PieChartIcon,
	RefreshCwIcon,
} from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

import { Button } from "../../app/components/ui/button";
import { Card } from "../../app/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../app/components/ui/select";

// Since Tabs component doesn't exist yet, let's create a mock version for our story
const TabsList = ({
	className,
	children,
}: { className?: string; children: React.ReactNode }) => (
	<div className={`flex gap-2 ${className || ""}`}>{children}</div>
);

const TabsTrigger = ({
	value,
	children,
}: { value: string; children: React.ReactNode }) => (
	<Button variant="outline" size="sm" className="flex items-center gap-2">
		{children}
	</Button>
);

const TabsContent = ({
	value,
	className,
	children,
}: { value: string; className?: string; children: React.ReactNode }) => (
	<div className={className}>{children}</div>
);

const Tabs = ({
	defaultValue,
	children,
}: { defaultValue: string; children: React.ReactNode }) => (
	<div>{children}</div>
);

import "./Chart.css";

// Since we don't have a real chart component, we'll create mock chart components
const MockBarChart = ({
	data = [25, 50, 75, 40, 60, 30, 70],
	labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	height = 200,
	color = "var(--primary)",
	animated = true,
}: {
	data?: number[];
	labels?: string[];
	height?: number;
	color?: string;
	animated?: boolean;
}) => {
	const [animatedData, setAnimatedData] = useState<number[]>(
		animated ? Array(data.length).fill(0) : data,
	);

	useEffect(() => {
		if (animated) {
			setAnimatedData(Array(data.length).fill(0));
			const timer = setTimeout(() => {
				setAnimatedData(data);
			}, 100);
			return () => clearTimeout(timer);
		}
	}, [data, animated]);

	const max = Math.max(...data);

	return (
		<div className="chart-story-mock-chart" style={{ height }}>
			<div className="chart-story-mock-bars">
				{animatedData.map((value, index) => (
					<div
						key={`bar-${labels[index]}-${index}`}
						className="chart-story-mock-bar"
						style={{
							height: `${(value / max) * 100}%`,
							backgroundColor: color,
							transition: animated ? "height 0.5s ease" : "none",
						}}
						title={`${labels[index]}: ${value}`}
					/>
				))}
			</div>
			<div className="chart-story-mock-axis">
				{labels.map((label, index) => (
					<div
						key={`label-${label}-${index}`}
						className="chart-story-mock-label"
					>
						{label}
					</div>
				))}
			</div>
		</div>
	);
};

const MockLineChart = ({
	data = [25, 50, 75, 40, 60, 30, 70],
	labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
	height = 200,
	color = "var(--primary)",
	showArea = false,
	animated = true,
}: {
	data?: number[];
	labels?: string[];
	height?: number;
	color?: string;
	showArea?: boolean;
	animated?: boolean;
}) => {
	const [animatedPoints, setAnimatedPoints] = useState<boolean>(false);

	useEffect(() => {
		if (!animated) {
			setAnimatedPoints(true);
			return;
		}

		setAnimatedPoints(false);
		const timer = setTimeout(() => {
			setAnimatedPoints(true);
		}, 100);
		return () => clearTimeout(timer);
	}, [animated]);

	const max = Math.max(...data);

	return (
		<div className="chart-story-mock-chart" style={{ height }}>
			<div className="chart-story-mock-line">
				{showArea && (
					<div
						className="chart-story-mock-area"
						style={{
							height: `${(max / max) * 100}%`,
							opacity: animatedPoints ? 1 : 0,
							transition: "opacity 1s ease",
							background: `linear-gradient(to bottom, ${color}20, transparent)`,
						}}
						aria-hidden="true"
					/>
				)}

				{data.map((value, index) => {
					const x = `${(index / (data.length - 1)) * 100}%`;
					const y = `${(1 - value / max) * 100}%`;

					return (
						<div
							key={`point-${labels[index]}-${index}`}
							className="chart-story-mock-point"
							style={{
								left: x,
								top: y,
								backgroundColor: color,
								opacity: animatedPoints ? 1 : 0,
								transition: "opacity 0.5s ease",
							}}
							title={`${labels[index]}: ${value}`}
						/>
					);
				})}

				{data.map((value, index, arr) => {
					if (index === arr.length - 1) return null;

					const x1 = (index / (data.length - 1)) * 100;
					const y1 = (1 - value / max) * 100;
					const x2 = ((index + 1) / (data.length - 1)) * 100;
					const y2 = (1 - arr[index + 1] / max) * 100;

					const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
					const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

					return (
						<div
							key={`line-${labels[index]}-${index}`}
							style={{
								position: "absolute",
								width: `${length}%`,
								height: "2px",
								backgroundColor: color,
								left: `${x1}%`,
								top: `${y1}%`,
								transform: `rotate(${angle}deg)`,
								transformOrigin: "left center",
								opacity: animatedPoints ? 1 : 0,
								transition: "opacity 0.7s ease",
							}}
						/>
					);
				})}
			</div>
			<div className="chart-story-mock-axis">
				{labels.map((label, index) => (
					<div
						key={`axis-${label}-${index}`}
						className="chart-story-mock-label"
					>
						{label}
					</div>
				))}
			</div>
		</div>
	);
};

const MockDoughnutChart = ({
	data = [25, 50, 75],
	labels = ["Product A", "Product B", "Product C"],
	colors = ["#3b82f6", "#10b981", "#f59e0b"],
	size = 200,
	animated = true,
}: {
	data?: number[];
	labels?: string[];
	colors?: string[];
	size?: number;
	animated?: boolean;
}) => {
	const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(
		animated ? Array(data.length).fill(0) : calculatePercentages(data),
	);

	useEffect(() => {
		if (animated) {
			setAnimatedPercentages(Array(data.length).fill(0));
			const timer = setTimeout(() => {
				setAnimatedPercentages(calculatePercentages(data));
			}, 100);
			return () => clearTimeout(timer);
		}
	}, [data, animated]);

	function calculatePercentages(values: number[]): number[] {
		const total = values.reduce((acc, val) => acc + val, 0);
		return values.map((value) => (value / total) * 100);
	}

	const radius = size / 2 - 10;
	const center = size / 2;
	const innerRadius = radius * 0.6;

	// Calculate SVG paths for each segment
	const paths = [];
	let cumulativePercentage = 0;

	for (let i = 0; i < animatedPercentages.length; i++) {
		const percentage = animatedPercentages[i];

		const startAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2;
		cumulativePercentage += percentage;
		const endAngle = (cumulativePercentage / 100) * 2 * Math.PI - Math.PI / 2;

		const startX = center + radius * Math.cos(startAngle);
		const startY = center + radius * Math.sin(startAngle);
		const endX = center + radius * Math.cos(endAngle);
		const endY = center + radius * Math.sin(endAngle);

		const innerStartX = center + innerRadius * Math.cos(startAngle);
		const innerStartY = center + innerRadius * Math.sin(startAngle);
		const innerEndX = center + innerRadius * Math.cos(endAngle);
		const innerEndY = center + innerRadius * Math.sin(endAngle);

		const largeArcFlag = percentage > 50 ? 1 : 0;

		const path = `
      M ${innerStartX} ${innerStartY}
      L ${startX} ${startY}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}
      L ${innerEndX} ${innerEndY}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerStartX} ${innerStartY}
      Z
    `;

		paths.push({
			d: path,
			fill: colors[i % colors.length],
		});
	}

	return (
		<div style={{ width: size, height: size, margin: "0 auto" }}>
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
				{paths.map((path, index) => (
					<path
						key={index}
						d={path.d}
						fill={path.fill}
						stroke="white"
						strokeWidth="1"
						style={{ transition: "all 1s ease" }}
					/>
				))}
			</svg>
			<div className="chart-story-legend">
				{labels.map((label, index) => (
					<div key={index} className="chart-story-legend-item">
						<div
							className="chart-story-legend-color"
							style={{ backgroundColor: colors[index % colors.length] }}
						/>
						<span>{label}</span>
					</div>
				))}
			</div>
		</div>
	);
};

interface ChartStoryProps {
	animated?: boolean;
}

// Create a meta object for the Chart stories
const meta = {
	title: "UI/Chart",
	component: MockBarChart,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		animated: { control: "boolean", defaultValue: true },
	},
} satisfies Meta<ChartStoryProps>;

export default meta;
type Story = StoryObj<ChartStoryProps>;

// Default Bar Chart
export const BarChart: Story = {
	args: {
		animated: true,
	},
	render: (args) => (
		<div className="chart-story-container">
			<div className="chart-story-section">
				<h3>Bar Chart</h3>
				<div className="chart-story-description">
					A simple bar chart displaying weekly data.
				</div>

				<div className="chart-story-card">
					<div className="chart-story-demo">
						<MockBarChart
							data={[35, 42, 59, 65, 51, 49, 62]}
							labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
							height={300}
							animated={args.animated}
						/>
					</div>
				</div>
			</div>
		</div>
	),
};

// Line Chart
export const LineChart: Story = {
	args: {
		animated: true,
	},
	render: (args) => (
		<div className="chart-story-container">
			<div className="chart-story-section">
				<h3>Line Chart</h3>
				<div className="chart-story-description">
					A line chart showing trend data over time.
				</div>

				<div className="chart-story-card">
					<div className="chart-story-demo">
						<MockLineChart
							data={[28, 35, 40, 55, 38, 48, 60]}
							labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
							height={300}
							animated={args.animated}
						/>
					</div>
				</div>
			</div>
		</div>
	),
};

// Area Chart
export const AreaChart: Story = {
	args: {
		animated: true,
	},
	render: (args) => (
		<div className="chart-story-container">
			<div className="chart-story-section">
				<h3>Area Chart</h3>
				<div className="chart-story-description">
					A line chart with filled area to emphasize volume.
				</div>

				<div className="chart-story-card">
					<div className="chart-story-demo">
						<MockLineChart
							data={[28, 45, 35, 50, 32, 48, 60]}
							labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
							height={300}
							showArea={true}
							animated={args.animated}
						/>
					</div>
				</div>
			</div>
		</div>
	),
};

// Doughnut Chart
export const DoughnutChart: Story = {
	args: {
		animated: true,
	},
	render: (args) => (
		<div className="chart-story-container">
			<div className="chart-story-section">
				<h3>Doughnut Chart</h3>
				<div className="chart-story-description">
					A doughnut chart for visualizing proportional data.
				</div>

				<div className="chart-story-card">
					<div className="chart-story-demo">
						<MockDoughnutChart
							data={[35, 45, 20]}
							labels={["Product A", "Product B", "Product C"]}
							colors={["#3b82f6", "#10b981", "#f59e0b"]}
							animated={args.animated}
						/>
					</div>
				</div>
			</div>
		</div>
	),
};

// Dashboard Example
export const Dashboard: Story = {
	args: {
		animated: true,
	},
	render: (args) => {
		const [timeRange, setTimeRange] = useState("week");
		const [refreshKey, setRefreshKey] = useState(0);

		const handleRefresh = () => {
			setRefreshKey((prev) => prev + 1);
		};

		return (
			<div className="chart-story-container">
				<div className="chart-story-section">
					<h3>Dashboard Example</h3>
					<div className="chart-story-description">
						An example of multiple charts working together in a dashboard.
					</div>

					<div className="flex justify-between items-center mb-4">
						<div className="flex items-center gap-2">
							<Select value={timeRange} onValueChange={setTimeRange}>
								<SelectTrigger className="w-[120px]">
									<SelectValue placeholder="Time Range" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="day">Day</SelectItem>
									<SelectItem value="week">Week</SelectItem>
									<SelectItem value="month">Month</SelectItem>
									<SelectItem value="year">Year</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<Button size="sm" variant="outline" onClick={handleRefresh}>
							<RefreshCwIcon className="h-4 w-4 mr-2" />
							Refresh
						</Button>
					</div>

					<div className="chart-story-stat-cards">
						<Card className="chart-story-stat-card">
							<div className="chart-story-stat-title">Total Revenue</div>
							<div className="chart-story-stat-value">$12,548</div>
							<div className="chart-story-stat-description flex items-center text-green-600">
								<ArrowUpIcon className="h-4 w-4 mr-1" />
								12.5% from last {timeRange}
							</div>
						</Card>
						<Card className="chart-story-stat-card">
							<div className="chart-story-stat-title">New Customers</div>
							<div className="chart-story-stat-value">1,245</div>
							<div className="chart-story-stat-description flex items-center text-green-600">
								<ArrowUpIcon className="h-4 w-4 mr-1" />
								8.2% from last {timeRange}
							</div>
						</Card>
						<Card className="chart-story-stat-card">
							<div className="chart-story-stat-title">Active Users</div>
							<div className="chart-story-stat-value">4,385</div>
							<div className="chart-story-stat-description flex items-center text-red-600">
								<ArrowDownIcon className="h-4 w-4 mr-1" />
								3.1% from last {timeRange}
							</div>
						</Card>
					</div>

					<div className="chart-story-card">
						<Tabs defaultValue="overview">
							<TabsList className="mb-4">
								<TabsTrigger value="overview">
									<LineChartIcon className="h-4 w-4 mr-2" />
									Overview
								</TabsTrigger>
								<TabsTrigger value="sales">
									<BarChart3Icon className="h-4 w-4 mr-2" />
									Sales
								</TabsTrigger>
								<TabsTrigger value="distribution">
									<PieChartIcon className="h-4 w-4 mr-2" />
									Distribution
								</TabsTrigger>
							</TabsList>

							<TabsContent value="overview" className="space-y-4">
								<div className="chart-story-demo">
									<h4 className="text-sm font-medium mb-2">Revenue Overview</h4>
									<MockLineChart
										key={`line-${refreshKey}`}
										data={[28, 42, 35, 47, 53, 45, 62]}
										labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
										height={300}
										showArea={true}
										animated={args.animated}
									/>
								</div>
							</TabsContent>

							<TabsContent value="sales" className="space-y-4">
								<div className="chart-story-demo">
									<h4 className="text-sm font-medium mb-2">Weekly Sales</h4>
									<MockBarChart
										key={`bar-${refreshKey}`}
										data={[35, 42, 59, 65, 51, 49, 62]}
										labels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
										height={300}
										animated={args.animated}
									/>
								</div>
							</TabsContent>

							<TabsContent value="distribution" className="space-y-4">
								<div className="chart-story-demo">
									<h4 className="text-sm font-medium mb-2">
										Revenue Distribution
									</h4>
									<MockDoughnutChart
										key={`doughnut-${refreshKey}`}
										data={[35, 45, 20]}
										labels={["Product A", "Product B", "Product C"]}
										colors={["#3b82f6", "#10b981", "#f59e0b"]}
										animated={args.animated}
									/>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</div>
		);
	},
};

// Multi-series Charts
export const MultiSeriesChart: Story = {
	args: {
		animated: true,
	},
	render: (args) => {
		const series1 = [28, 45, 35, 50, 32, 48, 60];
		const series2 = [15, 30, 20, 38, 25, 40, 48];
		const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

		// Create a similar chart style but with two datasets
		return (
			<div className="chart-story-container">
				<div className="chart-story-section">
					<h3>Multi-series Chart</h3>
					<div className="chart-story-description">
						A chart comparing two data series over the same time period.
					</div>

					<div className="chart-story-card">
						<div className="chart-story-demo">
							<div className="chart-story-mock-chart" style={{ height: 300 }}>
								<div className="chart-story-mock-line">
									{/* First series */}
									{series1.map((value, index, arr) => {
										if (index === arr.length - 1) return null;

										const max = Math.max(...series1);
										const x1 = (index / (arr.length - 1)) * 100;
										const y1 = (1 - value / max) * 100;
										const x2 = ((index + 1) / (arr.length - 1)) * 100;
										const y2 = (1 - arr[index + 1] / max) * 100;

										const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
										const angle =
											Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

										return (
											<div
												key={`line1-${labels[index]}-${index}`}
												style={{
													position: "absolute",
													width: `${length}%`,
													height: "2px",
													backgroundColor: "#3b82f6",
													left: `${x1}%`,
													top: `${y1}%`,
													transform: `rotate(${angle}deg)`,
													transformOrigin: "left center",
													opacity: args.animated ? 0 : 1,
													animation: args.animated
														? "fadeIn 0.7s ease forwards 0.3s"
														: "none",
												}}
											/>
										);
									})}

									{series1.map((value, index) => {
										const max = Math.max(...series1);
										const x = `${(index / (series1.length - 1)) * 100}%`;
										const y = `${(1 - value / max) * 100}%`;

										return (
											<div
												key={`point1-${labels[index]}-${index}`}
												className="chart-story-mock-point"
												style={{
													left: x,
													top: y,
													backgroundColor: "#3b82f6",
													opacity: args.animated ? 0 : 1,
													animation: args.animated
														? "fadeIn 0.5s ease forwards 0.2s"
														: "none",
												}}
												title={`${labels[index]}: ${value}`}
											/>
										);
									})}

									{/* Second series */}
									{series2.map((value, index, arr) => {
										if (index === arr.length - 1) return null;

										const max = Math.max(...series1); // Using same scale as series1
										const x1 = (index / (arr.length - 1)) * 100;
										const y1 = (1 - value / max) * 100;
										const x2 = ((index + 1) / (arr.length - 1)) * 100;
										const y2 = (1 - arr[index + 1] / max) * 100;

										const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
										const angle =
											Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

										return (
											<div
												key={`line2-${labels[index]}-${index}`}
												style={{
													position: "absolute",
													width: `${length}%`,
													height: "2px",
													backgroundColor: "#f59e0b",
													left: `${x1}%`,
													top: `${y1}%`,
													transform: `rotate(${angle}deg)`,
													transformOrigin: "left center",
													opacity: args.animated ? 0 : 1,
													animation: args.animated
														? "fadeIn 0.7s ease forwards 0.5s"
														: "none",
												}}
											/>
										);
									})}

									{series2.map((value, index) => {
										const max = Math.max(...series1); // Using same scale as series1
										const x = `${(index / (series2.length - 1)) * 100}%`;
										const y = `${(1 - value / max) * 100}%`;

										return (
											<div
												key={`point2-${labels[index]}-${index}`}
												className="chart-story-mock-point"
												style={{
													left: x,
													top: y,
													backgroundColor: "#f59e0b",
													opacity: args.animated ? 0 : 1,
													animation: args.animated
														? "fadeIn 0.5s ease forwards 0.4s"
														: "none",
												}}
												title={`${labels[index]}: ${value}`}
											/>
										);
									})}
								</div>
								<div className="chart-story-mock-axis">
									{labels.map((label, index) => (
										<div
											key={`axis-${label}-${index}`}
											className="chart-story-mock-label"
										>
											{label}
										</div>
									))}
								</div>
							</div>

							<div className="chart-story-legend">
								<div className="chart-story-legend-item">
									<div
										className="chart-story-legend-color"
										style={{ backgroundColor: "#3b82f6" }}
									/>
									<span>This Week</span>
								</div>
								<div className="chart-story-legend-item">
									<div
										className="chart-story-legend-color"
										style={{ backgroundColor: "#f59e0b" }}
									/>
									<span>Last Week</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},
};

// Add @keyframes for animations
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);
