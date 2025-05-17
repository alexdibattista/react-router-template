import type React from "react";
import {
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
	Table as UITable,
} from "../../app/components/ui/table";
import "./Table.css";

export interface TableProps {
	caption?: string;
	headers?: string[];
	rows?: (string | number | React.ReactNode)[][];
	footer?: (string | number | React.ReactNode)[];
	className?: string;
}

// Utility function to generate stable keys
const createStableKey = (
	prefix: string,
	value: string | number | React.ReactNode,
	index: number,
): string => {
	if (typeof value === "string") {
		return `${prefix}-${value.toLowerCase().replace(/\s+/g, "-")}-${index}`;
	}
	return `${prefix}-${index}`;
};

export const Table = ({
	caption,
	headers,
	rows,
	footer,
	className,
	...props
}: TableProps) => {
	return (
		<UITable className={className} {...props}>
			{caption && <TableCaption>{caption}</TableCaption>}

			{headers && headers.length > 0 && (
				<TableHeader>
					<TableRow>
						{headers.map((header, index) => (
							<TableHead key={createStableKey("header", header, index)}>
								{header}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
			)}

			{rows && rows.length > 0 && (
				<TableBody>
					{rows.map((row, rowIndex) => (
						<TableRow key={`row-${rowIndex}`}>
							{row.map((cell, cellIndex) => {
								const headerValue = headers?.[cellIndex] || cellIndex;
								return (
									<TableCell
										key={createStableKey("cell", headerValue, rowIndex)}
									>
										{cell}
									</TableCell>
								);
							})}
						</TableRow>
					))}
				</TableBody>
			)}

			{footer && footer.length > 0 && (
				<TableFooter>
					<TableRow>
						{footer.map((foot, index) => {
							const headerValue = headers?.[index] || index;
							return (
								<TableCell key={createStableKey("footer", headerValue, index)}>
									{foot}
								</TableCell>
							);
						})}
					</TableRow>
				</TableFooter>
			)}
		</UITable>
	);
};
