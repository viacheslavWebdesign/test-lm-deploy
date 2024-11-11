import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export function Clients() {
  const [currentClient, setCurrentClient] = useState(0);
  const clientsRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (clientsRef.current) {
      observer.observe(clientsRef.current);
    }

    return () => {
      if (clientsRef.current) {
        observer.unobserve(clientsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;

    const imageElements = document.querySelectorAll(".clientsList img");
    const totalClients = imageElements.length;

    const cycleClients = () => {
      setCurrentClient((prevIndex) => (prevIndex + 1) % totalClients);
    };

    const interval = setInterval(cycleClients, 1000);

    return () => clearInterval(interval);
  }, [isIntersecting]);

  useEffect(() => {
    const clientsText = document.querySelectorAll(".clientsText");

    clientsText.forEach((element) => {
      const clientsLetters = element.textContent.split("");
      element.textContent = "";

      clientsLetters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "inline-block translate-y-full";
        element.appendChild(span);
      });
    });

    const maxLength = Math.max(
      ...Array.from(clientsText).map((el) => el.children.length)
    );

    const spanGroups = [];
    for (let i = 0; i < maxLength; i++) {
      spanGroups.push([]);
    }

    clientsText.forEach((element) => {
      Array.from(element.children).forEach((span, index) => {
        spanGroups[index].push(span);
      });
    });

    const tweens = spanGroups.map((group, index) => {
      return gsap.to(group, {
        y: "0",
        duration: 3,
        ease: "none",
        delay: index * 0.5,
      });
    });

    ScrollTrigger.create({
      trigger: ".clientsText",
      start: "bottom 100%",
      end: "center 50%",
      scrub: true,
      animation: gsap.timeline().add(tweens),
    });
  }, []);

  return (
    <section ref={clientsRef} className="bg-zinc-900 py-20 md:py-40">
      <div className="w-full max-w-screen-xl px-5 mx-auto">
        <div className="font-machina tracking-tighter font-medium text-5xl md:text-[10rem] leading-none">
          <p className="clientsText opacity-80 overflow-hidden text-nowrap">
            Підпалюємо
          </p>
          <div className="flex items-center justify-end">
            <div className="clientsList h-6 md:h-20 mr-4 md:mr-8">
              {[
                "/images/clients/creatifwood.png",
                "/images/clients/harmandi.png",
                "/images/clients/medicover-logo.png",
                "/images/clients/mens.svg",
                "/images/clients/pomidoros.png",
                "/images/clients/stem.png",
                "/images/clients/superhumans.svg",
                "/images/clients/vidadent.svg",
              ].map((src, index) => (
                <Image
                  key={src}
                  className={`w-auto h-full ${
                    index === currentClient ? "" : "hidden"
                  }`}
                  src={src}
                  alt="client"
                  width="600"
                  height="200"
                />
              ))}
            </div>
            <p className="clientsText opacity-80 overflow-hidden text-nowrap">
              разом
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
