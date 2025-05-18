import type React from "react";
import type { ReactNode } from "react";
import {
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Drawer as UIDrawer,
} from "../../app/components/ui/drawer";

// Re-export all parts of Drawer for stories
export {
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
};

export const Drawer = (props: React.ComponentProps<typeof UIDrawer>) => {
	return <UIDrawer {...props} />;
};
