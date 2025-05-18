import type React from "react";
import { Label as UILabel } from "../../app/components/ui/label";
import { cn } from "../../lib/utils";

interface LabelProps extends React.ComponentProps<typeof UILabel> {
	className?: string;
}

export const Label = ({ className, ...props }: LabelProps) => {
	return <UILabel className={cn(className)} {...props} />;
};
