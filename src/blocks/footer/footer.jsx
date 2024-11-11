import Image from "next/image";

const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

const facebookIcon = `${basePath}/icons/social/facebook-icon.png`;
const telegramIcon = `${basePath}/icons/social/telegram-icon.svg`;
const youtubeIcon = `${basePath}/icons/social/youtube-icon.svg`;
const instagramIcon = `${basePath}/icons/social/instagram-icon.svg`;
const dribbbleIcon = `${basePath}/icons/social/dribbble-icon.svg`;

export function Footer() {
  return (
    <footer className="py-20 md:py-40 bg-white">
      <div className="w-full max-w-screen-xl px-5 mx-auto md:flex items-center">
        <div className="md:w-1/3 mb-10 md:mb-0">
          <div className="flex justify-center items-center md:justify-start gap-6">
            <a
              href="https://www.facebook.com/mlovikov/"
              target="_blank"
              className="block h-6"
            >
              <Image
                src={facebookIcon}
                alt="soc"
                width="40"
                height="40"
                className="brightness-0 w-auto h-full"
              ></Image>
            </a>
            <a
              href="https://t.me/letsmakesite"
              target="_blank"
              className="block h-6"
            >
              <Image
                src={telegramIcon}
                alt="soc"
                width="40"
                height="40"
                className="brightness-0 w-auto h-full"
              ></Image>
            </a>
            <a
              href="https://www.youtube.com/@letsmakesite"
              target="_blank"
              className="block h-6"
            >
              <Image
                src={youtubeIcon}
                alt="soc"
                width="40"
                height="40"
                className="brightness-0 w-auto h-full"
              ></Image>
            </a>
            <a
              href="https://www.instagram.com/letsmakesite/"
              target="_blank"
              className="block h-6"
            >
              <Image
                src={instagramIcon}
                alt="soc"
                width="40"
                height="40"
                className="brightness-0 w-auto h-full"
              ></Image>
            </a>
            <a
              href="https://dribbble.com/letsmakesite/"
              target="_blank"
              className="block h-6"
            >
              <Image
                src={dribbbleIcon}
                alt="soc"
                width="40"
                height="40"
                className="brightness-0 w-auto h-full"
              ></Image>
            </a>
          </div>
        </div>
        <div className="md:w-1/3">
          <p className="text-center text-zinc-900 text-lg">
            Letsmake.site with love
          </p>
        </div>
      </div>
    </footer>
  );
}
