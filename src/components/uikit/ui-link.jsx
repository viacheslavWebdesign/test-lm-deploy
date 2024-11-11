import Link from "next/link";
import { clsx } from "clsx";
import { useState } from "react";

/**
 *
 * @param {{
 *    children: any,
 *    className: string,
 *    isExternal: boolean,
 *    href: string,
 *    target?: string,
 * }} props
 * @returns
 */

export function UiLink({ children, href, className, isExternal, target }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setTimeout(() => setIsHovered(false), 300);
  };

  const linkClassName = clsx("overflow-hidden relative block", className);

  if (isExternal) {
    return (
      <a
        className={linkClassName}
        href={href}
        onMouseEnter={handleMouseEnter}
        target={target}
      >
        <p
          className={clsx("flex items-center ", {
            "transition-transform duration-300 -translate-y-[100%]": isHovered,
          })}
        >
          {children}
        </p>
        <p
          className={clsx("flex items-center absolute top-[100%]", {
            "transition-transform duration-300 -translate-y-[100%]": isHovered,
          })}
        >
          {children}
        </p>
      </a>
    );
  }

  return (
    <Link className={linkClassName} href={href} onMouseEnter={handleMouseEnter}>
      <p
        className={clsx("flex items-center w-full ", {
          "transition-transform duration-300 -translate-y-[100%]": isHovered,
        })}
      >
        {children}
      </p>
      <p
        className={clsx("flex items-center w-full absolute top-[100%]", {
          "transition-transform duration-300 -translate-y-[100%]": isHovered,
        })}
      >
        {children}
      </p>
    </Link>
  );
}
