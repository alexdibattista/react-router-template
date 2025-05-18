import type React from "react";
import {
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Accordion as UIAccordion,
} from "../../app/components/ui/accordion";
import "./Accordion.css";

export interface AccordionItemData {
	value: string;
	trigger: React.ReactNode;
	content: React.ReactNode;
	disabled?: boolean;
}

export interface AccordionProps {
	items: AccordionItemData[];
	type?: "single" | "multiple";
	collapsible?: boolean;
	defaultValue?: string | string[];
	className?: string;
}

export const Accordion = ({
	items,
	type = "single",
	collapsible = false,
	defaultValue,
	className,
}: AccordionProps) => {
	return (
		<UIAccordion
			type={type}
			collapsible={collapsible}
			defaultValue={defaultValue}
			className={className}
		>
			{items.map((item) => (
				<AccordionItem key={item.value} value={item.value}>
					<AccordionTrigger disabled={item.disabled}>
						{item.trigger}
					</AccordionTrigger>
					<AccordionContent>{item.content}</AccordionContent>
				</AccordionItem>
			))}
		</UIAccordion>
	);
};
