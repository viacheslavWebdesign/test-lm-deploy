import Link from "next/link";
import { clsx } from "clsx";

/**
 *
 * @param {
 *    children: any,
 *    className: string,
 *    color: 'default' | 'light' | 'dark',
 *    isLink: boolean,
 *    isExternal: boolean,
 *    href: string
 * }
 * @returns
 */

export function UiButton({
  children,
  className,
  color = "default",
  isLink,
  isExternal,
  href,
}) {
  const buttonClassName = clsx(
    "min-h-10 md:min-h-14 rounded-full px-6 md:px-12 py-2 md:py-4 font-medium overflow-hidden relative group transition-colors duration-500",
    className,
    {
      light: "bg-white text-orange-500 hover:text-white",
      default: "bg-orange-500 text-white",
      dark: "bg-black text-white",
    }[color]
  );
  const buttonDivClassName = clsx(
    "absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 size-52 transition-transform duration-700 rounded-full scale-0 group-hover:scale-100 ease-in-out",
    className,
    {
      light: "bg-black",
      default: "bg-black",
      dark: "bg-orange-500",
    }[color]
  );
  if (isLink) {
    if (isExternal) {
      return (
        <a href={href} className={buttonClassName}>
          <div className={buttonDivClassName}></div>
          <span className="relative z-[1] ease-in-out">{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClassName}>
        <div className={buttonDivClassName}></div>
        <span className="relative z-[1] ease-in-out">{children}</span>
      </Link>
    );
  }
  return (
    <button className={buttonClassName}>
      <div className={buttonDivClassName}></div>
      <span className="relative z-[1] ease-in-out">{children}</span>
    </button>
  );
}
