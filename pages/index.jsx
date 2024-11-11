import { PageLayout } from "../src/layouts/page-layout";
import { Head } from "../src/blocks/head";
import { Achievements } from "../src/blocks/achievements";
import { Services } from "../src/blocks/services";
import { About } from "../src/blocks/about";
import { Clients } from "../src/blocks/clients";
import { Cases } from "../src/blocks/cases";
import { Faq } from "../src/blocks/faq";
import { Contacts } from "../src/blocks/contacts";

export default function HomePage() {
  return (
    <PageLayout>
      <Head />
      <Achievements />
      <Services />
      <About />
      <Clients />
      <Cases />
      <Faq />
      <Contacts />
    </PageLayout>
  );
}
