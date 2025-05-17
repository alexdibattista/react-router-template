import type { Meta, StoryObj } from "@storybook/react";
import { addDays } from "date-fns";
import React, { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar as UICalendar } from "../../app/components/ui/calendar";
import "./Calendar.css";

// We're directly using the original Calendar component for stories
// since it's complex to proxy all the props with the correct typing

const meta = {
	title: "UI/Calendar",
	component: UICalendar,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof UICalendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="calendar-container">
			<UICalendar mode="single" />
		</div>
	),
};

export const Selected: Story = {
	render: () => {
		const today = new Date();
		return (
			<div className="calendar-container">
				<UICalendar mode="single" selected={today} />
			</div>
		);
	},
};

export const Range: Story = {
	render: () => {
		const today = new Date();
		const range = {
			from: today,
			to: addDays(today, 7),
		};

		return (
			<div className="calendar-container">
				<UICalendar mode="range" selected={range} defaultMonth={today} />
			</div>
		);
	},
};

export const Multiple: Story = {
	render: () => {
		const today = new Date();
		const multipleDates = [
			today,
			addDays(today, 2),
			addDays(today, 5),
			addDays(today, 10),
		];

		return (
			<div className="calendar-container">
				<UICalendar
					mode="multiple"
					selected={multipleDates}
					defaultMonth={today}
				/>
			</div>
		);
	},
};

// An interactive example of a date range picker with state
export const RangeWithPreview: Story = {
	render: () => {
		const [date, setDate] = React.useState<DateRange | undefined>({
			from: new Date(),
			to: addDays(new Date(), 5),
		});

		return (
			<div className="calendar-with-range-preview">
				<div className="calendar-container">
					<UICalendar
						mode="range"
						selected={date}
						onSelect={setDate}
						defaultMonth={date?.from}
						numberOfMonths={2}
						className="calendar-large"
					/>
				</div>

				{date?.from && (
					<div className="calendar-range-preview">
						<div className="calendar-range-title">Selected Range:</div>
						<div className="calendar-range-dates">
							<div>
								{date.from.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric",
								})}
							</div>
							{date.to && (
								<>
									<div>→</div>
									<div>
										{date.to.toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										})}
									</div>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		);
	},
};

export const WithDisabledDates: Story = {
	render: () => {
		const today = new Date();

		// Disable weekends
		const disabledDays = (date: Date) => {
			const day = date.getDay();
			return day === 0 || day === 6;
		};

		return (
			<div className="calendar-container">
				<UICalendar
					mode="single"
					defaultMonth={today}
					disabled={disabledDays}
				/>
			</div>
		);
	},
};

export const WithDateRangeConstraints: Story = {
	render: () => {
		const today = new Date();

		return (
			<div className="calendar-container">
				<UICalendar
					mode="single"
					defaultMonth={today}
					fromDate={today}
					toDate={addDays(today, 30)}
				/>
			</div>
		);
	},
};
