import logo from "@/public/logo.png";
const Header = () => {
  const menu = ["About us", "Mechanism", "Key Features"];
  return (
    <div className="w-full bg-white px-2 max-w-desktop mx-auto sticky z-[2] top-0 pt-[60px] left-0 h-fit flex justify-between items-center">
      <img className="h-[56px] cursor-pointer" src={logo.src} alt="" />
      <div className="flex gap-10 items-center font-space-grotesk text-black text-xl">
        {menu.map((item) => {
          return (
            <div key={item} className="">
              {item}
            </div>
          );
        })}
        <button className="py-5 px-[50px] text-xl w-fit rounded-[14px] border border-secondary cursor-pointer">
          Explore
        </button>
      </div>
    </div>
  );
};
export default Header;
