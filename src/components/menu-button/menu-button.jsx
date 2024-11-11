import React, { useState } from "react";
import clsx from "clsx";

export function MenuButton({ onClick, isOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isOpen) {
      setIsHovered(true);
      setTimeout(() => setIsHovered(false), 500);
    }
  };

  return (
    <button
      className="min-h-10 md:min-h-14 border border-white bg-orange-500 rounded-full px-6 md:px-8 group relative z-[1]"
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      <div
        className={clsx("size-5 md:size-6 relative", {
          "transition-transform duration-500 ease-in-out rotate-180": isHovered,
        })}
      >
        <div
          className={clsx(
            "size-2 rounded-full bg-white absolute top-0 left-0 transition-transform duration-200 ease-in-out",
            { "translate-y-1": isOpen }
          )}
        ></div>
        <div
          className={clsx(
            "size-2 rounded-full bg-white absolute top-0 right-0 transition-transform duration-200 ease-in-out",
            { "-translate-y-1": isOpen }
          )}
        ></div>
        <div className="size-2 rounded-full bg-white absolute bottom-0 left-0"></div>
        <div className="size-2 rounded-full bg-white absolute bottom-0 right-0"></div>
      </div>
    </button>
  );
}
