import clsx from "clsx";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const videoPreviewSrc = "/images/video-button.jpg";

export function VideoButton({ className, href }) {
  return (
    <a
      href={href}
      data-fancybox
      className={clsx(
        "block min-h-16 md:min-h-20 w-full max-w-96 border-2 border-orange-500 rounded-full p-2 md:p-3 overflow-hidden relative group",
        className
      )}
    >
      <Image
        src={videoPreviewSrc}
        alt="preview"
        width="384"
        height="80"
        className="absolute inset-0 object-cover opacity-30 md:opacity-0 transition duration-500 ease-in-out group-hover:opacity-30"
      />
      <div className="relative translate-x-[85%] md:translate-x-[0%] group-hover:translate-x-[85%] transition duration-500 ease-in-out z-[1]">
        <div className="size-12 bg-white rounded-full flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="#f97316"
              d="M5.92 24.096q0 1.088.928 1.728.512.288 1.088.288.448 0 .896-.224l16.16-8.064q.48-.256.8-.736T26.08 16t-.288-1.056-.8-.736L8.832 6.144q-.448-.224-.896-.224-.544 0-1.088.288-.928.608-.928 1.728v16.16z"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}

Fancybox.bind("[data-fancybox]", {});
