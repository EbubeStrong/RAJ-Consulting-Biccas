"use client";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className}: ContainerProps) {
  return (
    <div className={cn("min-w-[80rem]:max-w-[80rem] xl:max-w-7xl min-w-[70rem]:max-w-[70rem] lg:max-w-6xl md:max-w-4xl sm:max-w-2xl mx-auto px-4", className)}>
      {children}
    </div>
  )
}

export default Container