import type React from "react";
import { Checkbox as UICheckbox } from "../../app/components/ui/checkbox";
import { cn } from "../../lib/utils";

interface CheckboxProps extends React.ComponentProps<typeof UICheckbox> {
	className?: string;
}

export const Checkbox = ({ className, ...props }: CheckboxProps) => {
	return <UICheckbox className={cn(className)} {...props} />;
};
