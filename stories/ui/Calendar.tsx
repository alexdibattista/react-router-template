import type React from "react";
import { Calendar as UICalendar } from "../../app/components/ui/calendar";
import { cn } from "../../lib/utils";

// Re-exporting the Calendar component to keep consistent with other UI components in stories
// Using a proxy component to maintain the same interface as the original Calendar
export const Calendar = ({
	className,
	...props
}: React.ComponentProps<typeof UICalendar>) => {
	return <UICalendar className={cn(className)} {...props} />;
};
