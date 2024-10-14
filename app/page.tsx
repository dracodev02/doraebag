import Header from "./components/header/Header";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import SectionWhyUs from "./sections/SectionWhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-[198px]">
        <Section1 />
        <Section2 />
        <SectionWhyUs />
      </div>
    </>
  );
}
