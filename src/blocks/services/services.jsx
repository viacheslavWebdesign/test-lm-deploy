import Link from "next/link";
import { UiButton } from "../../components/uikit/ui-button";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const basePath =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : "";

const logoSrc = `${basePath}/icons/logo2.svg`;

export function Services() {
  useEffect(() => {
    const serviceElements = gsap.utils.toArray(
      ".serviceBorder, .serviceTitle, .serviceText, .serviceButton"
    );
    serviceElements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "top 80%",
          scrub: true,
        },
        y: "0vh",
        opacity: 1,
        ease: "power2.inOut",
      });
    });
    gsap.utils.toArray(".fireMouseBox").forEach((box) => {
      const follower = box.querySelector(".fireMouse");
      gsap.set(follower, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 0.8,
      });
      const xTo = gsap.quickTo(follower, "x", {
        duration: 0.2,
        ease: "power1",
      });
      const yTo = gsap.quickTo(follower, "y", {
        duration: 0.2,
        ease: "power1",
      });
      const scaleTween = gsap.to(follower, {
        scale: 1,
        ease: "power1.inOut",
        paused: true,
      });

      const handleMouseEnter = () => scaleTween.play();
      const handleMouseLeave = () => scaleTween.reverse();
      const handleMouseMove = (e) => {
        const rect = box.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        xTo(offsetX);
        yTo(offsetY);
      };

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);
      box.addEventListener("mousemove", handleMouseMove);

      box.querySelectorAll("*").forEach((child) => {
        child.addEventListener("mouseenter", handleMouseEnter);
        child.addEventListener("mouseleave", handleMouseLeave);
        child.addEventListener("mousemove", handleMouseMove);
      });
    });
    gsap.to(".servicesSection", {
      scrollTrigger: {
        trigger: ".servicesSection",
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: true,
      },
      y: "30vh",
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="bg-white py-20 md:py-40 servicesSection relative">
      <div className="w-full max-w-screen-xl px-5 mx-auto">
        <h2 className="font-machina tracking-tighter text-4xl md:text-6xl text-zinc-900 font-bold mb-10 md:mb-20">
          Наші послуги
        </h2>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Сайти на Wordpress
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Розробка дизайну сайтів, лендінгів та повна дизайн-упаковка
                бізнесу для ваших успішних продажів в інтернеті.
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Веб-дизайн
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Розробка дизайну сайтів, лендінгів та повна дизайн-упаковка
                бізнесу для ваших успішних продажів в інтернеті.
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Розробка сайтів для клінік
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Розробляємо сайти для закладів медичної галузі: медцентрів,
                клінік, стоматологій, діагностичних та реабілітаційних центрів,
                салонів краси
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Технічна підтримка
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Оновлення, допрацювання та супровід існуючих сайтів. Допомагаємо
                підтримувати працездатність ваших сайтів після інших
                розробників, підключаємо та налаштовуємо необхідні інтеграції,
                налаштовуємо сервери для швидкодії
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Розробка інтернет-магазинів
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Сайт для бізнесу повинен або залучати нових клієнтів, або
                покращувати взаємодію з існуючими. Ми розуміємо ваші потреби, і
                пропонуємо ефективне рішення саме під вашу маркетингову задачу.
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Розробка лендінгів
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Створюємо односторінкові сайти, які допомагають вам швидко
                запускати рекламні кампанії
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Верстка
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Перетворюємо ваш дизайн на код, робимо валідну та оптимізовану
                верстку сайтів, лендінгів, презентації, листів
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
        <Link href="#" className="block fireMouseBox relative">
          <hr className="serviceBorder opacity-0 translate-y-[5vh] border-t border-slate-300" />
          <div className="block md:flex py-8 md:py-12">
            <div className="md:w-3/5">
              <h5 className="serviceTitle opacity-0 translate-y-[5vh] font-machina tracking-tighter text-zinc-900 font-bold text-3xl mb-4">
                Юзабіліті аудит
              </h5>
              <p className="serviceText opacity-0 translate-y-[5vh] text-zinc-900">
                Комплексно перевіримо ваш сайт і визначимо, що зараз йому
                заважає залучати трафік і генерувати вам достатню кількість
                продажів
              </p>
            </div>
            <div className="serviceButton opacity-0 translate-y-[5vh] md:flex-1 md:flex justify-end items-center mt-8 md:mt-0">
              <UiButton color="dark">Детальніше</UiButton>
            </div>
          </div>
          <Image
            src={logoSrc}
            alt="letsmake"
            width="40"
            height="60"
            className="opacity-0 top-0 left-0 fireMouse absolute pointer-events-none hidden md:block"
          />
        </Link>
      </div>
    </section>
  );
}
