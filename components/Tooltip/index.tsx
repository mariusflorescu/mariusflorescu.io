import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { useTheme } from "next-themes";

type TProps = {
  text: string;
};

const Tooltip: React.FC<TProps> = ({ children, text }) => {
  const { theme } = useTheme();

  return (
    <TooltipPrimitive.TooltipProvider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={5}
          className="px-3 py-2 bg-white dark:bg-black text-neutral-900 dark:text-neutral-50 shadow-lg rounded text-sm"
        >
          <TooltipPrimitive.TooltipArrow
            fill={theme === "light" ? "#fff" : "#000"}
          />
          {text}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
};

export default Tooltip;
