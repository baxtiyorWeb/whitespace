import React from "react";

interface CustomProgressProps {
  value: number;
  max: number;
  height?: string;
  barColor?: string;
  bgColor?: string;
  borderRadius?: string;
  showValue?: boolean;
}

const Progress: React.FC<CustomProgressProps> = ({
  value,
  max,
  height = "8px",
  barColor = "#1E88E5",
  bgColor = "#E0E0E0",
  borderRadius = "10px",
  showValue = true
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div style={{
      width: "100%",
      backgroundColor: bgColor,
      borderRadius,
      overflow: "hidden",
      position: "relative",
      height
    }}>
      <div style={{
        width: `${percentage}%`,
        backgroundColor: barColor,
        height: "100%",
        transition: "width 0.3s ease-in-out"
      }} />
      {showValue && (
        <span style={{
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          fontSize: "14px",
          fontWeight: "bold",
          color: "#333"
        }}>
          {value}
        </span>
      )}
    </div>
  );
};

export default Progress;
