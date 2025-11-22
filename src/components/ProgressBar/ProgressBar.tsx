import { cn } from "../../lib/utils/classname.utils";
import "./ProgressBar.css";

export interface ProgressBarProps {
    value: number;
    max: number;
    className?: string;
}

export default function ProgressBar({
    value,
    max,
    className = "",
}: ProgressBarProps) {
    const progress = (value / Math.max(max, 1)) * 100;

    return (
        <div className={cn(className, "progress-bar")}>
            <div
                className="progress-bar__bar"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}
