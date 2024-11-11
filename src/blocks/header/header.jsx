import Link from "next/link";
import { UiButton } from "../../components/uikit/ui-button";
import { Menu } from "../../components/menu/menu";
import { Logo } from "../../components/logo/";

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-orange-500">
      <div className="w-full max-w-screen-xl px-5 mx-auto flex items-center py-4 md:py-6 gap-4 md:gap-6">
        <Link href="/" className="block size-10 md:size-12 mr-auto">
          <Logo />
        </Link>
        <UiButton isLink isExternal color="light" href="tel:+380951410736">
          Зв&apos;язатись
        </UiButton>
        <Menu />
      </div>
    </header>
  );
}
