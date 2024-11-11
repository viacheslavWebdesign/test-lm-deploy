import Image from "next/image";
import Link from "next/link";

const matchstickSrc = "/icons/matchstick.svg";

export function Technology({ href, children }) {
  return (
    <div className="md:w-1/3 relative group">
      <Link
        href={href}
        className="md:min-h-[50vh] flex justify-center items-center relative z-[1] py-4 md:py-0"
      >
        <div className="font-machina tracking-tighter text-4xl font-medium">
          {children}
        </div>
      </Link>
      <Image
        src={matchstickSrc}
        alt="matchstick"
        width="11"
        height="94"
        className="absolute rotate-90 md:rotate-0 -left-12 md:left-1/2 bottom-1/2 md:bottom-0 md:-translate-x-1/2 w-4 md:w-14 translate-y-1/2 md:translate-y-3/4 transition duration-300 ease-in-out md:group-hover:translate-y-1/4"
      />
    </div>
  );
}
