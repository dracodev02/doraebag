"use client";
import { scrollToSection } from "@/app/heplers/scrollToSection";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="max-w-desktop mx-auto px-2 mt-[198px] max-md:mt-20">
      <div className="bg-secondary rounded-b rounded-[45px] px-[60px] py-[50px] max-md:p-5 flex flex-col max-md:gap-8 gap-[50px]">
        <div className="flex md:items-center justify-between gap-4 max-md:flex-col">
          <div className="flex gap-4 items-center">
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
            <div className="max-md:flex items-center gap-5 hidden">
              <FaFacebook className="text-[30px] text-white" />
              <FaSquareXTwitter className="text-[30px] text-white" />
            </div>
          </div>
          <div className="flex md:items-center gap-6 max-md:gap-2 text-white max-md:flex-col">
            <p
              className=" hover-underline-animation-footer cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              About us
            </p>
            <p
              className=" hover-underline-animation-footer cursor-pointer"
              onClick={() => scrollToSection("mechanism")}
            >
              Mechanism
            </p>
            <p
              className=" hover-underline-animation-footer cursor-pointer"
              onClick={() => scrollToSection("keyFeatures")}
            >
              Key Features
            </p>
          </div>
          <div className="flex items-center gap-5 max-md:hidden">
            <FaFacebook className="text-[30px] text-white cursor-pointer" />
            <FaSquareXTwitter className="text-[30px] text-white cursor-pointer" />
          </div>
        </div>
        <div className="w-full h-[1px] bg-white"></div>
        <div className="flex items-center gap-10 text-white flex-wrap gap-y-2">
          <p> © 2024 doraEbag. All Rights Reserved.</p>
          <p className="hover-underline-animation-footer cursor-pointer ">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
