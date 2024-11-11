import Link from "next/link";
import { UiButton } from "../../components/uikit/ui-button";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ArrowTopUpIcon } from "../../components/uikit/icons/arrow-top-up";
import axios from "axios";

gsap.registerPlugin(ScrollTrigger);

export function Cases({ onPostsLoaded }) {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const postsRes = await axios.get(
        "https://letsmake.site/wp-json/wp/v2/cases",
        { mode: "no-cors" }
      );
      const postsData = postsRes.data;

      const mediaRequests = postsData.map((post) =>
        axios.get(
          `https://letsmake.site/wp-json/wp/v2/media/${post.featured_media}`,
          { mode: "no-cors" }
        )
      );
      const mediaResponses = await Promise.all(mediaRequests);
      const mediaData = mediaResponses.map((res) => res.data);

      const combinedData = postsData.map((post) => {
        const media = mediaData.find(
          (media) => media.id === post.featured_media
        );
        return {
          ...post,
          featured_media_url: media ? media.source_url : null,
          featured_media_alt: media ? media.alt_text : "",
        };
      });

      setPosts(combinedData);
      onPostsLoaded(true);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const casesRef = useRef();
  const casesContainerRef = useRef();
  const casesSectionRef = useRef();
  useEffect(() => {
    if (posts.length === 0) return;
    function getScrollAmount() {
      let casesWidth = casesRef.current.scrollWidth;
      const containerStyle = window.getComputedStyle(casesContainerRef.current);
      let containerWidth =
        casesContainerRef.current.offsetWidth -
        parseFloat(containerStyle.paddingLeft) -
        parseFloat(containerStyle.paddingRight);
      return -(casesWidth - containerWidth);
    }
    const tween = gsap.to(casesRef.current, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });
    ScrollTrigger.create({
      trigger: casesSectionRef.current,
      start: "top 0%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
    });
    gsap.utils.toArray(".linkMouseBox").forEach((box) => {
      const follower = box.querySelector(".linkMouse");
      gsap.set(follower, {
        xPercent: -50,
        yPercent: -50,
        scale: 0,
        opacity: 1,
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
    ScrollTrigger.refresh();
  }, [posts]);

  return (
    <div className="bg-zinc-900">
      <section
        ref={casesSectionRef}
        className="relative overflow-hidden bg-zinc-900 pt-20 md:pt-40"
      >
        <div
          ref={casesContainerRef}
          className="w-full max-w-screen-xl px-5 mx-auto"
        >
          <div className="md:flex items-center justify-between mb-10 md:mb-20">
            <h2 className="font-machina tracking-tighter text-4xl md:text-6xl font-bold">
              Наші кейси
            </h2>
            <UiButton isLink href="#" className="hidden md:block">
              Всі кейси
            </UiButton>
          </div>
          <div ref={casesRef} className="flex gap-8 md:gap-16">
            {posts.map((item) => (
              <Link
                key={item.id}
                className="linkMouseBox relative block w-full md:w-1/2 flex-none"
                href={item.link}
              >
                <div className="w-full relative h-56 md:h-96 overflow-hidden rounded-3xl md:rounded-[36px]">
                  <Image
                    src={item.featured_media_url}
                    alt={item.featured_media_alt}
                    width="700"
                    height="400"
                    className="h-full w-full object-cover absolute t-0 l-0"
                  />
                </div>
                <h5 className="font-machina tracking-tighter font-bold text-3xl mt-4 mb-2">
                  {item.title.rendered}
                </h5>
                <p className="opacity-80">
                  {item.excerpt.rendered.replace(/<[^>]+>/g, "")}
                </p>
                <div className="linkMouse size-14 rounded-full absolute z-[1] pointer-events-none hidden md:block bg-orange-500 top-0 left-0">
                  <ArrowTopUpIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-8" />
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <UiButton isLink href="#" className="inline-block md:hidden">
              Всі кейси
            </UiButton>
          </div>
        </div>
      </section>
    </div>
  );
}
