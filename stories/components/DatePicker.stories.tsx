import type { Meta, StoryObj } from "@storybook/react";
import { addDays, format } from "date-fns";
import {
	CalendarIcon,
	Calendar as CalendarIconFull,
	ClockIcon,
} from "lucide-react";
import type React from "react";
import { useState } from "react";
import type { DateRange as DayPickerDateRange } from "react-day-picker";

import { Button } from "../../app/components/ui/button";
import { Calendar } from "../../app/components/ui/calendar";
import { Label } from "../../app/components/ui/label";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "../../app/components/ui/popover";
import { cn } from "../../app/lib/utils";

import { DatePicker } from "./DatePicker";
import "./DatePicker.css";

// Define the interface for story props
interface DatePickerStoryProps {
	className?: string;
}

// Create a meta object for the DatePicker stories
const meta = {
	title: "Components/DatePicker",
	component: DatePicker,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<DatePickerStoryProps>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Default DatePicker
export const Default: Story = {
	render: () => (
		<div className="date-picker-story-container">
			<div className="date-picker-story-section">
				<h3>Default DatePicker</h3>
				<div className="date-picker-story-description">
					A simple date picker component built with Popover and Calendar.
				</div>

				<div className="date-picker-story-card">
					<div className="date-picker-story-demo">
						<DatePicker />
					</div>
					<p className="date-picker-story-info">
						The default date picker provides an intuitive way for users to
						select dates. It displays the selected date in a formatted string
						and opens a calendar popover for date selection.
					</p>
				</div>
			</div>
		</div>
	),
};

// Custom DatePicker with Pre-selected Date
export const WithPreselectedDate: Story = {
	render: () => {
		// Custom DatePicker component with pre-selected date
		const CustomDatePicker = () => {
			const [date, setDate] = useState<Date>(new Date());

			return (
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[280px] justify-start text-left font-normal",
								!date && "text-muted-foreground",
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? format(date, "PPP") : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={date}
							onSelect={(newDate) => newDate && setDate(newDate)}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			);
		};

		return (
			<div className="date-picker-story-container">
				<div className="date-picker-story-section">
					<h3>DatePicker with Pre-selected Date</h3>
					<div className="date-picker-story-description">
						A date picker initialized with the current date already selected.
					</div>

					<div className="date-picker-story-card">
						<div className="date-picker-story-demo">
							<CustomDatePicker />
						</div>
						<p className="date-picker-story-info">
							Pre-selecting a date is useful when you need to provide a default
							value, such as the current date or a previously saved date value.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// DatePicker with Date Range
export const DateRange: Story = {
	render: () => {
		// Custom DateRange component
		const DateRangePickerDemo = () => {
			const [dateRange, setDateRange] = useState<
				DayPickerDateRange | undefined
			>({
				from: new Date(),
				to: addDays(new Date(), 7),
			});

			return (
				<div className="grid gap-2">
					<Popover>
						<PopoverTrigger asChild>
							<Button
								id="date"
								variant={"outline"}
								className={cn(
									"w-[300px] justify-start text-left font-normal",
									!dateRange && "text-muted-foreground",
								)}
							>
								<CalendarIconFull className="mr-2 h-4 w-4" />
								{dateRange?.from ? (
									dateRange.to ? (
										<>
											{format(dateRange.from, "LLL dd, y")} -{" "}
											{format(dateRange.to, "LLL dd, y")}
										</>
									) : (
										format(dateRange.from, "LLL dd, y")
									)
								) : (
									<span>Pick a date range</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								initialFocus
								mode="range"
								defaultMonth={dateRange?.from}
								selected={dateRange}
								onSelect={setDateRange}
								numberOfMonths={2}
							/>
						</PopoverContent>
					</Popover>
				</div>
			);
		};

		return (
			<div className="date-picker-story-container">
				<div className="date-picker-story-section">
					<h3>Date Range Picker</h3>
					<div className="date-picker-story-description">
						A component for selecting a range of dates.
					</div>

					<div className="date-picker-story-card">
						<div className="date-picker-story-demo">
							<DateRangePickerDemo />
						</div>
						<p className="date-picker-story-info">
							The date range picker allows users to select a start and end date.
							This is useful for booking systems, reporting periods, or any
							scenario that requires a date range.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// DatePicker with Form Integration
export const WithFormIntegration: Story = {
	render: () => {
		// Custom DatePicker with form integration
		const DatePickerForm = () => {
			const [date, setDate] = useState<Date>();
			const [formSubmitted, setFormSubmitted] = useState(false);
			const [selectedDate, setSelectedDate] = useState<string>("");

			const handleSubmit = (e: React.FormEvent) => {
				e.preventDefault();
				if (date) {
					setSelectedDate(format(date, "PPP"));
					setFormSubmitted(true);
				}
			};

			return (
				<div>
					<form onSubmit={handleSubmit} className="date-picker-story-form">
						<div className="date-picker-story-form-row">
							<Label htmlFor="appointment-date">Appointment Date</Label>
							<Popover>
								<PopoverTrigger asChild>
									<Button
										id="appointment-date"
										variant={"outline"}
										className={cn(
											"w-[280px] justify-start text-left font-normal",
											!date && "text-muted-foreground",
										)}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date ? format(date, "PPP") : <span>Pick a date</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
										disabled={(date) => date < new Date()}
									/>
								</PopoverContent>
							</Popover>
						</div>

						<Button type="submit" disabled={!date}>
							Submit
						</Button>
					</form>

					{formSubmitted && (
						<div className="date-picker-story-result">
							Appointment scheduled for: {selectedDate}
						</div>
					)}
				</div>
			);
		};

		return (
			<div className="date-picker-story-container">
				<div className="date-picker-story-section">
					<h3>DatePicker with Form Integration</h3>
					<div className="date-picker-story-description">
						Using a date picker within a form with validation.
					</div>

					<div className="date-picker-story-card">
						<div className="date-picker-story-demo">
							<DatePickerForm />
						</div>
						<p className="date-picker-story-info">
							Integrating a date picker within a form provides a user-friendly
							way to capture date information. This example includes validation
							to prevent selecting dates in the past.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// DatePicker with Custom Styling
export const WithCustomStyling: Story = {
	render: () => {
		// Custom styled DatePicker
		const CustomStyledDatePicker = () => {
			const [date, setDate] = useState<Date>();

			return (
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[280px] justify-start text-left font-normal bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/30",
								!date && "text-muted-foreground",
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4 text-primary" />
							{date ? format(date, "PPP") : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent
						className="w-auto p-0 border-primary/20 bg-primary/5"
						align="start"
					>
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							initialFocus
							className="bg-transparent"
						/>
					</PopoverContent>
				</Popover>
			);
		};

		return (
			<div className="date-picker-story-container">
				<div className="date-picker-story-section">
					<h3>DatePicker with Custom Styling</h3>
					<div className="date-picker-story-description">
						A date picker with customized styling to match your brand.
					</div>

					<div className="date-picker-story-card">
						<div className="date-picker-story-demo">
							<CustomStyledDatePicker />
						</div>
						<p className="date-picker-story-info">
							Customizing the date picker's appearance helps it blend seamlessly
							with your application's design system. This example shows how to
							apply custom background colors, borders, and hover states.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// DatePicker with Date and Time
export const WithDateTime: Story = {
	render: () => {
		// Custom DateTimePicker
		const DateTimePickerDemo = () => {
			const [date, setDate] = useState<Date>();
			const [time, setTime] = useState<string>("12:00");

			const dateTimeString = date
				? `${format(date, "PPP")} at ${time}`
				: "Select date and time";

			return (
				<div className="flex flex-col gap-4">
					<div className="flex flex-col gap-2">
						<Label>Date and Time</Label>
						<div className="flex gap-2">
							<Popover>
								<PopoverTrigger asChild>
									<Button
										variant={"outline"}
										className={cn(
											"w-[250px] justify-start text-left font-normal",
											!date && "text-muted-foreground",
										)}
									>
										<CalendarIcon className="mr-2 h-4 w-4" />
										{date ? format(date, "PPP") : <span>Pick a date</span>}
									</Button>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0">
									<Calendar
										mode="single"
										selected={date}
										onSelect={setDate}
										initialFocus
									/>
								</PopoverContent>
							</Popover>

							<div className="flex items-center gap-2">
								<ClockIcon className="h-4 w-4 text-muted-foreground" />
								<select
									value={time}
									onChange={(e) => setTime(e.target.value)}
									className="border rounded px-2 py-1 text-sm"
								>
									{[...Array(24)].map((_, hour) =>
										["00", "30"].map((minute) => (
											<option
												key={`${hour}:${minute}`}
												value={`${hour.toString().padStart(2, "0")}:${minute}`}
											>
												{`${hour.toString().padStart(2, "0")}:${minute}`}
											</option>
										)),
									)}
								</select>
							</div>
						</div>
					</div>

					{date && (
						<div className="date-picker-story-result">
							Selected: {dateTimeString}
						</div>
					)}
				</div>
			);
		};

		return (
			<div className="date-picker-story-container">
				<div className="date-picker-story-section">
					<h3>DatePicker with Time Selection</h3>
					<div className="date-picker-story-description">
						A combined date and time picker component.
					</div>

					<div className="date-picker-story-card">
						<div className="date-picker-story-demo">
							<DateTimePickerDemo />
						</div>
						<p className="date-picker-story-info">
							When both date and time information is needed, combining a date
							picker with time selection provides a complete solution. This is
							particularly useful for scheduling appointments, meetings, or
							events.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// DatePicker in Dark Theme
export const DarkTheme: Story = {
	render: () => {
		// Custom DatePicker for dark theme
		const DarkThemeDatePicker = () => {
			const [date, setDate] = useState<Date>();

			return (
				<Popover>
					<PopoverTrigger asChild>
						<Button
							variant={"outline"}
							className={cn(
								"w-[280px] justify-start text-left font-normal",
								!date && "text-muted-foreground",
							)}
						>
							<CalendarIcon className="mr-2 h-4 w-4" />
							{date ? format(date, "PPP") : <span>Pick a date</span>}
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-auto p-0">
						<Calendar
							mode="single"
							selected={date}
							onSelect={setDate}
							initialFocus
						/>
					</PopoverContent>
				</Popover>
			);
		};

		return (
			<div className="date-picker-story-container date-picker-story-dark">
				<div className="date-picker-story-section">
					<h3>DatePicker in Dark Theme</h3>
					<div className="date-picker-story-description">
						A date picker styled for dark mode interfaces.
					</div>

					<div className="date-picker-story-card">
						<div className="date-picker-story-demo">
							<DarkThemeDatePicker />
						</div>
						<p className="date-picker-story-info">
							The dark theme date picker provides the same functionality as the
							light theme but is styled to match dark mode interfaces. This
							ensures a consistent user experience across different color
							schemes.
						</p>
					</div>
				</div>
			</div>
		);
	},
};
