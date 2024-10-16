"use client";
import DropdownMenu from "../DropdownMenu";
import { scrollToSection } from "@/app/heplers/scrollToSection";

interface HeaderItem {
  name: string;
  section: string;
}

const Header = () => {
  const menu: HeaderItem[] = [
    { name: "About us", section: "about" },
    { name: "Mechanism", section: "mechanism" },
    { name: "Key Features", section: "keyFeatures" },
  ];

  return (
    <div className="z-10 w-full bg-white px-2 max-w-desktop mx-auto sticky top-0 py-4 left-0 h-fit flex justify-between items-center">
      <div
        onClick={() => scrollToSection("about")}
        className="flex items-center group cursor-pointer"
      >
        <p className="text-primary font-bold text-[44px] max-md:text-3xl font-sans">
          dora
        </p>
        <img
          src="/E_logo.png"
          alt="dora"
          className="h-[44px] max-md:h-[30px] group-hover:rotate-45 transition-all"
        />
        <p className="text-primary font-bold text-[44px] max-md:text-3xl font-sans">
          bag
        </p>
      </div>

      <div className="flex gap-10 items-center font-space-grotesk text-black text-xl">
        {menu.map((item) => {
          return (
            <div
              onClick={() => scrollToSection(item.section)}
              key={item.name}
              className="max-lg:hidden"
            >
              <p className="hover:no-underline hover-underline-animation cursor-pointer">
                {item.name}
              </p>
            </div>
          );
        })}
        <div className="bg-white w-fit overflow-hidden  active:scale-[0.96] duration-300 px-[50px] max-lg:py-2 max-lg:px-6 text-xl  py-5 font-space-grotesk border border-secondary rounded-[14px] cursor-pointer relative text-secondary group">
          <p className="z-[1] relative duration-500 select-none group-hover:text-white">
            Explore
          </p>
          <div className="absolute top-0 left-0 w-0 group-hover:visible duration-500 bg-secondary rounded-[12px] border-secondary group-hover:w-full h-full transition-all"></div>
        </div>
        <DropdownMenu items={menu} />
      </div>
    </div>
  );
};
export default Header;
