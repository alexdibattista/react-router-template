import type React from "react";
import {
	AvatarFallback,
	AvatarImage,
	Avatar as UIAvatar,
} from "../../app/components/ui/avatar";
import "./Avatar.css";

export interface AvatarProps {
	src?: string;
	alt?: string;
	fallback?: React.ReactNode;
	delayMs?: number;
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
	status?: "online" | "offline" | "away" | "busy";
}

export const Avatar = ({
	src,
	alt = "Avatar",
	fallback,
	delayMs,
	className,
	size = "md",
	status,
}: AvatarProps) => {
	// Map size to corresponding class
	const sizeClasses = {
		sm: "avatar-small",
		md: "avatar-medium",
		lg: "avatar-large",
		xl: "avatar-xlarge",
	};

	return (
		<div className="avatar-wrapper">
			<UIAvatar className={`${sizeClasses[size]} ${className || ""}`}>
				{src && <AvatarImage src={src} alt={alt} />}
				<AvatarFallback delayMs={delayMs}>
					{fallback || alt.substring(0, 2)}
				</AvatarFallback>
			</UIAvatar>
			{status && <span className={`avatar-status avatar-status-${status}`} />}
		</div>
	);
};
