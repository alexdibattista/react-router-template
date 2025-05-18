import type React from "react";
import { Progress as UIProgress } from "../../app/components/ui/progress";
import { cn } from "../../lib/utils";

interface ProgressProps extends React.ComponentProps<typeof UIProgress> {
	className?: string;
}

export const Progress = ({ className, ...props }: ProgressProps) => {
	return <UIProgress className={cn(className)} {...props} />;
};
