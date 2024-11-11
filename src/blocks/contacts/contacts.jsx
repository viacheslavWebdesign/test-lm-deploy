import { UiLink } from "../../components/uikit/ui-link";
import { Logo } from "../../components/logo";

export function Contacts() {
  return (
    <section className="py-20 md:py-40 relative z-[1] bg-white">
      <div className="w-full max-w-screen-xl px-5 mx-auto">
        <h2 className="font-machina text-zinc-900 tracking-tighte text-4xl md:text-6xl font-bold mb-2">
          Оцінити проєкт
        </h2>
        <div className="md:flex gap-16">
          <div className="md:w-1/2 flex flex-col mb-10 md:mb-0">
            <p className="text-zinc-900 text-xl md:text-3xl mb-10 md:mb-20">
              Відправте свою ідею нам на оцінку
            </p>
            <div className="flex flex-col gap-4 mt-auto">
              <div className="text-orange-500 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                <UiLink isExternal target="_blank" href="https://t.me/remoterr">
                  t.me/remoterr
                </UiLink>
              </div>
              <div className="text-zinc-900 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                <UiLink isExternal href="mailto:want@letsmake.site">
                  want@letsmake.site
                </UiLink>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="opacity-85 size-28 md:size-80 mx-auto">
              <Logo color="orange" defaultActive></Logo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
