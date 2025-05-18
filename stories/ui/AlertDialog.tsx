import type React from "react";
import type { ReactNode } from "react";
import {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
	AlertDialog as UIAlertDialog,
} from "../../app/components/ui/alert-dialog";
import { cn } from "../../lib/utils";

// Re-export all parts of AlertDialog for stories
export {
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
};

// Create a wrapper component for AlertDialog
export const AlertDialog = ({
	children,
	...props
}: React.ComponentProps<typeof UIAlertDialog>) => {
	return <UIAlertDialog {...props}>{children}</UIAlertDialog>;
};
