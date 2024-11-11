import Image from "next/image";

const logoSrc = "./icons/logo1.svg";

export function Achievements() {
  return (
    <section className="bg-white pt-20 md:pt-40 relative z-[1]">
      <div className="w-full max-w-screen-xl px-5 mx-auto">
        <p className="text-center text-zinc-900 font-machina tracking-tighter">
          веб-студія
        </p>
        <Image
          src={logoSrc}
          alt="letsmake"
          width="190"
          height="54"
          className="mx-auto"
        />
        <div className="flex flex-col md:flex-row mt-20 md:mt-40 gap-8 md:gap-16">
          <div className="md:w-1/3 text-zinc-900">
            <p>
              <span className="font-machina text-4xl md:text-5xl tracking-tighter font-medium">
                7 країн
              </span>
            </p>
            <p className="opacity-80">
              клієнти з США, Канади, Британії, Бельгії, Франції, Нідерландів та
              України
            </p>
          </div>
          <div className="md:w-1/3 text-zinc-900">
            <p>
              <span className="mr-2 text-lg md:text-xl">від</span>
              <span className="font-machina text-4xl md:text-5xl tracking-tighter font-medium">
                4 тижнів
              </span>
            </p>
            <p className="opacity-80">
              потрібно на розробку повноцінного сайту з нуля під ключ
            </p>
          </div>
          <div className="md:w-1/3 text-zinc-900">
            <p>
              <span className="font-machina text-4xl md:text-5xl tracking-tighter font-medium">
                95 %
              </span>
            </p>
            <p className="opacity-80">
              клієнтів рекомендують нас друзям і повертаються з новими
              замовленнями
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
