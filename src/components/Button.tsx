import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  gradientFrom?: string;
  gradientTo?: string;
  hoverFrom?: string;
  hoverTo?: string;
  shadowColor?: string;
}

export const Button = ({
  children,
  type = "button",
  onClick,
  className = "",
  icon,
  gradientFrom = "from-yellow-600",
  gradientTo = "to-yellow-700",
  hoverFrom = "hover:from-yellow-500",
  hoverTo = "hover:to-yellow-600",
  shadowColor = "hover:shadow-yellow-500/20",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 px-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} ${hoverFrom} ${hoverTo} rounded-lg font-bold text-gray-900 shadow-lg ${shadowColor} transition-all duration-300 flex items-center justify-center ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};