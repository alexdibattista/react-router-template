import type React from "react";
import type { ReactNode } from "react";
import {
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	Carousel as UICarousel,
} from "../../app/components/ui/carousel";
import { cn } from "../../lib/utils";

// Re-export all parts of Carousel for stories
export { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious };

interface CarouselProps extends React.ComponentProps<typeof UICarousel> {
	className?: string;
	children: ReactNode;
}

export const Carousel = ({ className, children, ...props }: CarouselProps) => {
	return (
		<UICarousel className={cn(className)} {...props}>
			{children}
		</UICarousel>
	);
};
