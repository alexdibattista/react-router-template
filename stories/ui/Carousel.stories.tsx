import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "./Carousel";
import "./Carousel.css";

const meta = {
	title: "UI/Carousel",
	component: Carousel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="carousel-demo">
			<Carousel>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<div className="carousel-slide">
								<div className="carousel-slide-content">
									<span className="text-4xl font-semibold">{index + 1}</span>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

export const WithImages: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="carousel-demo">
			<Carousel>
				<CarouselContent>
					{[
						"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
						"https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=800&dpr=2&q=80",
						"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&dpr=2&q=80",
						"https://images.unsplash.com/photo-1576156663582-8f0b0aec783c?w=800&dpr=2&q=80",
					].map((src, index) => (
						<CarouselItem key={index}>
							<div className="carousel-slide">
								<img
									src={src}
									alt={`Slide ${index + 1}`}
									className="carousel-image"
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};

export const ContentCards: Story = {
	args: {
		children: null,
	},
	render: () => (
		<div className="carousel-demo">
			<Carousel>
				<CarouselContent>
					{[
						{
							title: "Feature 1",
							description:
								"Description of the first feature with more details.",
						},
						{
							title: "Feature 2",
							description:
								"Description of the second feature with more details.",
						},
						{
							title: "Feature 3",
							description:
								"Description of the third feature with more details.",
						},
						{
							title: "Feature 4",
							description:
								"Description of the fourth feature with more details.",
						},
					].map((item, index) => (
						<CarouselItem key={index}>
							<div className="carousel-slide">
								<div className="carousel-slide-content">
									<h3 className="text-xl font-bold mb-2">{item.title}</h3>
									<p>{item.description}</p>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	),
};
