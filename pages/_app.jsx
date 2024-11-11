import "../styles/fonts/NeueMachina/stylesheet.css";
import "../styles/fonts/TTInterfaces/stylesheet.css";
import "../styles/global.css";
import { HeadHTML } from "../src/components/headHTML";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-orange-500 text-white min-h-screen tracking-tight text-base pt-[72px] md:pt-[104px]">
      <HeadHTML />
      <Component {...pageProps} />
    </div>
  );
}
