import { VideoButton } from "../../components/video-button";

export function About() {
  return (
    <section className="bg-zinc-900 py-20 md:py-40 relative z-[1]">
      <div className="w-full max-w-screen-xl px-5 mx-auto">
        <div className="md:flex gap-16">
          <div className="md:w-1/2">
            <h2 className="font-machina tracking-tighter font-bold text-3xl md:text-4xl mb-8">
              Чому розробка сайтів з Letsmake.site це гарна ідея?
            </h2>
            <VideoButton className="mb-8" href="https://vimeo.com/826867242" />
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col gap-4 opacity-80">
              <p>
                Ми веб-студія повного циклу і спеціалізуємось на розробці сайтів
                для ефективної генерації заявок у ваш бізнес
              </p>

              <p>
                Ми закриваємо всі етапи реалізації сайту від веб-дизайну,
                верстки і розробки до інтеграції з WordPress та Shopify.
                Працюємо також з іншими платформами
              </p>

              <p>
                Ми підбираємо оптимальне рішення під запит клієнта і докладаємо
                всіх зусиль, щоб сайт в результаті приносив користь нашому
                замовнику
              </p>

              <p>
                Завдяки нашому маркетинговому підходу до розробки сайту, клієнт
                отримує не лише шматок коду, а дієвий інструмент для реалізації
                своїх маркетингових і бізнесових задач
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
