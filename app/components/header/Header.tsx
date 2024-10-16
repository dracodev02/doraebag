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
              <p className="hover:underline cursor-pointer">{item.name}</p>
            </div>
          );
        })}

        <button className="hover:bg-gray-300 transition-all py-5 max-lg:py-2 px-[50px] max-lg:px-4 text-xl w-fit rounded-[14px] border border-secondary cursor-pointer">
          Explore
        </button>
        <DropdownMenu items={menu} />
      </div>
    </div>
  );
};
export default Header;
