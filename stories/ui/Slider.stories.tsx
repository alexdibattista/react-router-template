import type { Meta, StoryObj } from "@storybook/react";
import {
	Minus,
	MoonIcon,
	Plus,
	SlidersHorizontalIcon,
	SunIcon,
	ThermometerIcon,
	Volume,
	Volume1,
	Volume2,
	VolumeX,
} from "lucide-react";
import React, { useState } from "react";

import { Input } from "../../app/components/ui/input";
import { Label } from "../../app/components/ui/label";
import { Switch } from "../../app/components/ui/switch";
import { cn } from "../../app/lib/utils";

import { Slider } from "./Slider";
import "./Slider.css";

// Define the interface for story props
interface SliderStoryProps {
	className?: string;
}

// Create a meta object for the Slider stories
const meta = {
	title: "UI/Slider",
	component: Slider,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<SliderStoryProps>;

export default meta;
type Story = StoryObj<typeof Slider>;

// Default Slider
export const Default: Story = {
	render: () => {
		const [value, setValue] = useState([50]);

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Default Slider</h3>
					<div className="slider-story-description">
						A basic slider for selecting numeric values.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<div className="flex-1">
									<Slider
										defaultValue={[50]}
										max={100}
										step={1}
										value={value}
										onValueChange={setValue}
									/>
								</div>
								<div className="slider-story-value">{value}</div>
							</div>
						</div>
						<p className="slider-story-info">
							The default slider component allows users to select a value within
							a range by dragging a thumb along a track. It provides a visual
							indicator of the current value and supports keyboard navigation
							for accessibility.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Range Slider
export const RangeSlider: Story = {
	render: () => {
		const [value, setValue] = useState([25, 75]);

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Range Slider</h3>
					<div className="slider-story-description">
						A slider for selecting a range between two values.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<div className="flex-1">
									<Slider
										defaultValue={[25, 75]}
										max={100}
										step={1}
										value={value}
										onValueChange={setValue}
									/>
								</div>
								<div className="slider-story-value">
									{value[0]} - {value[1]}
								</div>
							</div>
						</div>
						<p className="slider-story-info">
							The range slider allows users to select a range with both lower
							and upper bounds. This is useful for filtering data within
							specific ranges, like price filters or date ranges.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Volume Control
export const VolumeControl: Story = {
	render: () => {
		const [volume, setVolume] = useState([60]);
		const [muted, setMuted] = useState(false);

		const VolumeIcon = () => {
			if (muted || volume[0] === 0) return <VolumeX className="h-5 w-5" />;
			if (volume[0] < 33) return <Volume className="h-5 w-5" />;
			if (volume[0] < 66) return <Volume1 className="h-5 w-5" />;
			return <Volume2 className="h-5 w-5" />;
		};

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Volume Control</h3>
					<div className="slider-story-description">
						A slider implementing a common volume control interface.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<button
									className="rounded-md p-2 hover:bg-muted"
									onClick={() => setMuted(!muted)}
									type="button"
								>
									<VolumeIcon />
								</button>
								<div className="flex-1">
									<Slider
										defaultValue={[60]}
										max={100}
										step={1}
										value={muted ? [0] : volume}
										onValueChange={setVolume}
										className={muted ? "opacity-50" : ""}
										disabled={muted}
									/>
								</div>
								<div className="slider-story-value">
									{muted ? 0 : volume[0]}%
								</div>
							</div>

							<div className="slider-story-controls">
								<div className="slider-story-control">
									<Switch
										id="mute"
										checked={muted}
										onCheckedChange={setMuted}
									/>
									<Label htmlFor="mute" className="ml-2">
										Mute
									</Label>
								</div>
							</div>
						</div>
						<p className="slider-story-info">
							The volume control slider is a common UI pattern used for audio
							controls. It includes a mute button with an appropriate icon that
							changes based on the volume level, providing visual feedback to
							users about the current state.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Step Slider
export const StepSlider: Story = {
	render: () => {
		const [value, setValue] = useState([50]);
		const [step, setStep] = useState(10);

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Step Slider</h3>
					<div className="slider-story-description">
						A slider with configurable step increments.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<div className="flex-1">
									<Slider
										defaultValue={[50]}
										max={100}
										step={step}
										value={value}
										onValueChange={setValue}
									/>
								</div>
								<div className="slider-story-value">{value}</div>
							</div>

							<div className="slider-story-controls">
								<div className="slider-story-control">
									<Label htmlFor="step-size" className="text-sm">
										Step Size:
									</Label>
									<select
										id="step-size"
										className="h-8 rounded-md border border-input px-3 py-1 text-sm"
										value={step}
										onChange={(e) => setStep(Number(e.target.value))}
									>
										<option value="1">1</option>
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="20">20</option>
										<option value="25">25</option>
									</select>
								</div>
							</div>
						</div>
						<p className="slider-story-info">
							The step slider allows users to increment in specific step sizes.
							This is useful when you need to limit the possible values to
							discrete increments, such as clothing sizes or specific numerical
							settings.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Color Slider
export const ColorSlider: Story = {
	render: () => {
		const [hue, setHue] = useState([180]);
		const [saturation, setSaturation] = useState([100]);
		const [lightness, setLightness] = useState([50]);

		const color = `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`;

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Color Slider</h3>
					<div className="slider-story-description">
						A set of sliders for HSL color selection.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<div className="flex-1">
									<div className="slider-story-label">Hue: {hue[0]}°</div>
									<Slider
										defaultValue={[180]}
										min={0}
										max={360}
										step={1}
										value={hue}
										onValueChange={setHue}
										className="mb-4"
									/>

									<div className="slider-story-label">
										Saturation: {saturation[0]}%
									</div>
									<Slider
										defaultValue={[100]}
										min={0}
										max={100}
										step={1}
										value={saturation}
										onValueChange={setSaturation}
										className="mb-4"
									/>

									<div className="slider-story-label">
										Lightness: {lightness[0]}%
									</div>
									<Slider
										defaultValue={[50]}
										min={0}
										max={100}
										step={1}
										value={lightness}
										onValueChange={setLightness}
									/>
								</div>
								<div
									className="slider-color-preview"
									style={{ backgroundColor: color }}
								/>
							</div>

							<div className="text-sm">
								HSL: <code>{color}</code>
							</div>
						</div>
						<p className="slider-story-info">
							Color sliders allow users to select colors using the HSL (Hue,
							Saturation, Lightness) color model. This provides fine-grained
							control over color selection while keeping the interface
							intuitive.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Vertical Slider
export const VerticalSlider: Story = {
	render: () => {
		const [value, setValue] = useState([50]);

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Vertical Slider</h3>
					<div className="slider-story-description">
						A slider with vertical orientation.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-vertical">
								<Slider
									defaultValue={[50]}
									max={100}
									step={1}
									value={value}
									onValueChange={setValue}
									orientation="vertical"
								/>
								<div className="slider-story-value ml-4">{value}</div>
							</div>
						</div>
						<p className="slider-story-info">
							Vertical sliders can be useful in specific interfaces where
							vertical adjustment makes more sense, such as for equalizers or
							when space constraints favor a vertical layout over horizontal.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Temperature Slider
export const TemperatureSlider: Story = {
	render: () => {
		const [temperature, setTemperature] = useState([22]);
		const min = 16;
		const max = 30;

		const getTemperatureColor = (temp: number) => {
			// Blue for cold, red for hot
			if (temp <= 18) return "text-blue-500";
			if (temp >= 26) return "text-red-500";
			return "text-amber-500";
		};

		const getTemperatureIcon = (temp: number) => {
			if (temp <= 18) return <MoonIcon className="h-5 w-5 text-blue-500" />;
			if (temp >= 26) return <SunIcon className="h-5 w-5 text-red-500" />;
			return <ThermometerIcon className="h-5 w-5 text-amber-500" />;
		};

		return (
			<div className="slider-story-container">
				<div className="slider-story-section">
					<h3>Temperature Slider</h3>
					<div className="slider-story-description">
						A slider for controlling temperature settings.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<div className="flex items-center gap-4 flex-1">
									<button
										className="rounded-md p-2 hover:bg-muted"
										onClick={() => {
											if (temperature[0] > min) {
												setTemperature([temperature[0] - 1]);
											}
										}}
										type="button"
									>
										<Minus className="h-5 w-5" />
									</button>

									<div className="flex-1">
										<Slider
											defaultValue={[22]}
											min={min}
											max={max}
											step={0.5}
											value={temperature}
											onValueChange={setTemperature}
										/>
									</div>

									<button
										className="rounded-md p-2 hover:bg-muted"
										onClick={() => {
											if (temperature[0] < max) {
												setTemperature([temperature[0] + 1]);
											}
										}}
										type="button"
									>
										<Plus className="h-5 w-5" />
									</button>
								</div>

								<div className="slider-story-temperature-preview">
									<div
										className={cn(
											"slider-animated-value",
											getTemperatureColor(temperature[0]),
										)}
									>
										{temperature[0]}°C
									</div>
									<div className="slider-value-label flex items-center gap-1">
										{getTemperatureIcon(temperature[0])}
										{temperature[0] <= 18
											? "Cool"
											: temperature[0] >= 26
												? "Warm"
												: "Comfortable"}
									</div>
								</div>
							</div>
						</div>
						<p className="slider-story-info">
							The temperature slider demonstrates how sliders can be used for
							climate control interfaces. It includes plus/minus buttons for
							precise adjustments and visual feedback based on the temperature
							range.
						</p>
					</div>
				</div>
			</div>
		);
	},
};

// Disabled State
export const DisabledState: Story = {
	render: () => (
		<div className="slider-story-container">
			<div className="slider-story-section">
				<h3>Disabled Slider</h3>
				<div className="slider-story-description">
					A slider in the disabled state.
				</div>

				<div className="slider-story-card">
					<div className="slider-story-demo">
						<div className="slider-story-row">
							<div className="flex-1">
								<Slider defaultValue={[50]} max={100} step={1} disabled />
							</div>
							<div className="slider-story-value">50</div>
						</div>
					</div>
					<p className="slider-story-info">
						Disabled sliders provide a visual indication that a control is
						currently not available for interaction. This state is useful for
						settings that are dependent on other conditions or permissions.
					</p>
				</div>
			</div>
		</div>
	),
};

// Dark Theme Slider
export const DarkTheme: Story = {
	render: () => {
		const [value, setValue] = useState([50]);

		return (
			<div className="slider-story-container slider-story-dark">
				<div className="slider-story-section">
					<h3>Dark Theme Slider</h3>
					<div className="slider-story-description">
						A slider styled for dark mode interfaces.
					</div>

					<div className="slider-story-card">
						<div className="slider-story-demo">
							<div className="slider-story-row">
								<div className="flex-1">
									<Slider
										defaultValue={[50]}
										max={100}
										step={1}
										value={value}
										onValueChange={setValue}
									/>
								</div>
								<div className="slider-story-value">{value}</div>
							</div>
						</div>
						<p className="slider-story-info">
							The dark theme slider provides the same functionality as the light
							theme but is styled to match dark mode interfaces. This ensures a
							consistent user experience across different color schemes.
						</p>
					</div>
				</div>
			</div>
		);
	},
};
