import Footer from "./components/Fotter/Footer";
import Header from "./components/header/Header";
import KeyFeature from "./sections/KeyFeature";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import SectionWhyUs from "./sections/SectionWhyUs";
import WhyDifferent from "./sections/WhyDifferent";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-[198px] max-md:gap-20">
        <Section1 />
        <Section2 />
        <SectionWhyUs />
        <KeyFeature />
        <WhyDifferent />
      </div>
      <Footer />
    </>
  );
}
