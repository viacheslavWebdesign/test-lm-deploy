import Link from "next/link";
import { MenuButton } from "../menu-button";
import { UiLink } from "../uikit/ui-link";
import { ArrowTopUpIcon } from "../../components/uikit/icons/arrow-top-up";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./menu.module.css";
import { Logo } from "../../components/logo/";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChildVisible, setIsChildVisible] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleMouseEnterOnOverlay = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsChildVisible(isOpen);
  }, [isOpen]);

  return (
    <div className="relative z-[1] flex items-center">
      <MenuButton onClick={handleMenuToggle} isOpen={isOpen} />
      <CSSTransition
        in={isOpen}
        timeout={1150}
        classNames={{
          enter: styles.overlayEntering,
          enterActive: styles.overlayEntered,
          exit: styles.overlayExiting,
          exitActive: styles.overlayExited,
        }}
        unmountOnExit={true}
      >
        {(state) => (
          <div
            className="inset-0 bg-zinc-900/30 fixed"
            onMouseEnter={handleMouseEnterOnOverlay}
          ></div>
        )}
      </CSSTransition>
      <CSSTransition
        in={isOpen}
        timeout={1150}
        classNames={{
          enter: styles.menuEntering,
          enterActive: styles.menuEntered,
          exit: styles.menuExiting,
          exitActive: styles.menuExited,
        }}
        unmountOnExit={true}
      >
        {(state) => (
          <div className="absolute -top-2 md:-top-5 -right-3 md:-right-5 bg-white rounded-2xl md:rounded-3xl px-4 md:px-12 pt-3 pb-6 md:py-6 w-screen max-w-[calc(100vw-16px)] md:max-w-[560px] shadow-2xl overflow-hidden">
            <div className="overflow-y-auto max-h-[85vh] no-scrollbar">
              <CSSTransition
                in={isChildVisible}
                timeout={1150}
                classNames={{
                  enter: styles.logoEntering,
                  enterActive: styles.logoEntered,
                  exit: styles.logoExiting,
                  exitActive: styles.logoExited,
                }}
                unmountOnExit={false}
              >
                {(state) => (
                  <Link
                    href="/"
                    className="inline-block size-10 md:size-12 mb-12"
                  >
                    <Logo color="black" />
                  </Link>
                )}
              </CSSTransition>
              <CSSTransition
                in={isChildVisible}
                timeout={1150}
                classNames={{
                  enter: styles.navEntering,
                  enterActive: styles.navEntered,
                  exit: styles.navExiting,
                  exitActive: styles.navExited,
                }}
                unmountOnExit={false}
              >
                {(state) => (
                  <nav>
                    <ul className="flex flex-col gap-4">
                      <li className="text-zinc-900 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                        <UiLink href="#">Послуги та ціни</UiLink>
                      </li>
                      <li className="text-zinc-900 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                        <UiLink href="#">Кейси</UiLink>
                      </li>
                      <li className="text-zinc-900 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                        <UiLink href="#">Блог</UiLink>
                      </li>
                      <li className="text-zinc-900 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                        <UiLink href="#">Про нас</UiLink>
                      </li>
                      <li className="text-zinc-900 font-machina text-3xl md:text-4xl font-bold tracking-tighter">
                        <UiLink href="#">Партнерка</UiLink>
                      </li>
                    </ul>
                  </nav>
                )}
              </CSSTransition>
              <div className="flex mt-8 justify-between items-end">
                <CSSTransition
                  in={isChildVisible}
                  timeout={1150}
                  classNames={{
                    enter: styles.contactsEntering,
                    enterActive: styles.contactsEntered,
                    exit: styles.contactsExiting,
                    exitActive: styles.contactsExited,
                  }}
                  unmountOnExit={false}
                >
                  {(state) => (
                    <div className="flex flex-col gap-1">
                      <UiLink
                        isExternal
                        className="text-zinc-900"
                        href="tel:+380951410736"
                      >
                        +38 095 141 07 36
                        <ArrowTopUpIcon className="ml-1" />
                      </UiLink>
                      <UiLink
                        isExternal
                        className="text-zinc-900"
                        href="mailto:want@letsmake.site"
                      >
                        want@letsmake.site
                        <ArrowTopUpIcon className="ml-1" />
                      </UiLink>
                    </div>
                  )}
                </CSSTransition>
                <CSSTransition
                  in={isChildVisible}
                  timeout={1150}
                  classNames={{
                    enter: styles.socEntering,
                    enterActive: styles.socEntered,
                    exit: styles.socExiting,
                    exitActive: styles.socExited,
                  }}
                  unmountOnExit={false}
                >
                  {(state) => (
                    <div className="flex flex-col gap-1 items-end">
                      <UiLink
                        isExternal
                        className="text-zinc-900"
                        href="https://t.me/remoterr"
                      >
                        Telegram
                        <ArrowTopUpIcon className="ml-1" />
                      </UiLink>
                      <UiLink
                        isExternal
                        className="text-zinc-900"
                        href="https://wa.me/380951410736"
                      >
                        WhatsApp
                        <ArrowTopUpIcon className="ml-1" />
                      </UiLink>
                      <UiLink
                        isExternal
                        className="text-zinc-900"
                        href="https://www.messenger.com/t/100012328691506"
                      >
                        Messenger
                        <ArrowTopUpIcon className="ml-1" />
                      </UiLink>
                    </div>
                  )}
                </CSSTransition>
              </div>
            </div>
          </div>
        )}
      </CSSTransition>
    </div>
  );
}
