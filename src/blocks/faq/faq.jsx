import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "Скільки триває розробка сайту?",
    answer:
      "В залежності від наявності чи відсутньості дизайну, використання шаблонних рішень чи індивідуального дизайну, кількості сторінок та інших параметрів розробка сайту може тривати від 2 до 12 тижнів і більше. В середьому, розробка сайту у нас триває 6-8 тижнів. Але щоб оцінити конкретно ваш випадок, краще напишіть або подзвоніть нам для уточнення.",
  },
  {
    question: "Які типи сайтів ви робите?",
    answer:
      "Ми робимо лендінги, сайти-візитки, каталоги, корпоративні сайти, інтернет-магазини, портали для онлайн-шкіл та дистанційного навчання.",
  },
  {
    question: "Чи робите ви просування сайтів в google?",
    answer:
      "Ні, ми займаємося виключно веб-розробкою та дизайном, і тільки створюємо сайти. Але ми тісно співпрацюємо з SEO-студіями, тому робимо SEO-оптимізовані сайти, які добре залучають пошуковий трафік і принесуть вам трафік і ліди.",
  },
  {
    question: "Чи потрібен моєму бізнесу сайт?",
    answer:
      "Якщо вашу послугу чи товар шукають в інтернеті, або якщо сайт підвищить ваш авторитет в очах клієнтів – то варто задуматись про розробку власного сайту",
  },
  {
    question: "Де знаходиться ваш офіс?",
    answer:
      "Ми працюємо дистанційно, тому розробимо сайт для клієнта в будь-якому місті України: Київ, Львів, Харків, Одеса, Тернопіль, Дніпро, Рівне, Івано-Франківськ, Вінниця, Житомир,Ужгород та інші",
  },
];

export function Faq() {
  const [isDOMReady, setIsDOMReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  useEffect(() => {
    setIsDOMReady(true);
  }, []);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqRef = useRef();

  useEffect(() => {
    if (!isDOMReady) return;
    gsap.to(faqRef.current, {
      scrollTrigger: {
        trigger: faqRef.current,
        start: "bottom 100%",
        end: "bottom 0%",
        scrub: true,
      },
      y: "30vh",
      ease: "power2.inOut",
    });
  }, [isDOMReady]);

  return (
    <section
      ref={faqRef}
      className="faqSection bg-zinc-900 relative py-20 md:py-40"
    >
      <div className="w-full max-w-screen-xl px-5 mx-auto">
        <h2 className="font-machina tracking-tighte text-4xl md:text-6xl font-bold mb-10 md:mb-20">
          Часті питання
        </h2>
        {faqData.map((item, index) => (
          <div key={index}>
            <hr className="border-t border-white/10" />
            <div className="py-6 md:py-8">
              <div
                onClick={() => toggleFaq(index)}
                className="flex items-center cursor-pointer group"
              >
                <h5 className="font-machina tracking-tighter text-white font-bold text-xl md:text-2xl mr-4">
                  {item.question}
                </h5>
                <div className="size-7 md:size-10 rounded-full ml-auto relative transition-colors duration-500 ease-in-out border border-white/50 flex-none overflow-hidden group group-hover:border-orange-500">
                  <div className="size-8 md:size-11 absolute rounded-full top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-translate duration-500 ease-in-out bg-orange-500 scale-0 group-hover:scale-100"></div>
                  <div className="size-3.5 md:size-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-50 z-[1] transition-opacity duration-500 ease-in-out group-hover:opacity-100">
                    <div
                      className={clsx(
                        "h-full w-0.5 rounded-full bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transition-opacity duration-500 ease-in-out",
                        activeIndex === index && "opacity-0"
                      )}
                    ></div>
                    <div className="h-0.5 w-full rounded-full bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></div>
                  </div>
                </div>
              </div>
              <div
                className={clsx([
                  "overflow-hidden transition-all duration-1000 ease-in-out md:max-w-[1000px]",
                  activeIndex === index ? "max-h-80" : "max-h-0",
                ])}
              >
                <p className="pt-4 opacity-80">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
