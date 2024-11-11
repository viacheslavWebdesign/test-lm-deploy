import { Header } from "../blocks/header";
import { Footer } from "../blocks/footer";

export function PageLayout({
  header = <Header />,
  children,
  footer = <Footer />,
}) {
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
