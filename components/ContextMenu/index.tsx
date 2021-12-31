import React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";

type TProps = {
  textToCopy: string;
};

const ContextMenu: React.FC<TProps> = ({ children, textToCopy }) => {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <ContextMenuPrimitive.Root>
      <ContextMenuPrimitive.Trigger>{children}</ContextMenuPrimitive.Trigger>
      <ContextMenuPrimitive.Content
        sideOffset={5}
        className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 p-1 rounded shadow text-sm"
      >
        <ContextMenuPrimitive.Item
          onClick={() => handleCopyToClipboard()}
          className="outline-none cursor-pointer p-2 hover:bg-neutral-200 hover:dark:bg-neutral-800 hover:rounded"
        >
          Copy to clipboard
        </ContextMenuPrimitive.Item>
      </ContextMenuPrimitive.Content>
    </ContextMenuPrimitive.Root>
  );
};

export default ContextMenu;
