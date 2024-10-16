import coverDoraebag from "@/public/coverDoraebag.png";
import stars from "@/public/stars.png";
const Section1 = () => {
  return (
    <div id="about" className="w-full max-w-desktop px-2 mx-auto">
      <div className="flex justify-between mt-10">
        <div className="max-w-[531px] w-full flex flex-col gap-[35px]">
          <h1 className="font-archivo font-semibold text-[60px] max-md:text-[40px] leading-[65px] max-md:leading-[40px]">
            Revolutionizing Staking with Lottery Rewards
          </h1>
          <p className="text-xl">
            Stake your tokens, earn lottery tickets, and stand a chance to win
            valuable prizes—staking has never been this exciting.
          </p>
          <button className="py-5 px-[50px] hover:bg-[#4d4d4d] transition-all max-lg:py-2 max-lg:px-6 text-xl text-white font-space-grotesk w-fit rounded-[14px] bg-secondary cursor-pointer">
            Explore
          </button>
        </div>
        <div className="max-md:absolute left-1/2 max-md:-translate-x-1/2 max-md:-z-[1] max-md:opacity-50 max-md:blur-md max-w-[600px] rounded-2xl overflow-hidden aspect-[600/515] w-full">
          <img className="w-full h-full" src={coverDoraebag.src} alt="" />
        </div>
      </div>
      <div className="mt-[124px] max-md:mt-10 py-6 relative">
        <div className="md:bg-[#F3F3F3] rounded-[45px] ">
          <div className="p-[60px] max-md:px-0">
            <div className="md:max-w-[500px] w-full flex flex-col gap-6">
              <h4 className="font-bold font-archivo text-3xl leading-[32px]">
                Pioneering innovation
              </h4>
              <p className="text-[18px] leading-6">
                doraEbag is a groundbreaking crypto project that redefines the
                staking experience. Instead of receiving fixed interest rates,
                users can stake their tokens in our pools to earn lottery
                tickets.
                <br />
                <br />
                The longer and more you stake, the better your chances of
                winning valuable rewards in our periodic prize draw. Plus, you
                can withdraw your assets anytime — no strings attached.
              </p>
            </div>
          </div>
          <div className="absolute max-md:hidden right-[135px] z-[1] h-full top-0 md:aspect-[359/394] max-md:w-full max-md:absolute left-1/2 max-md:-translate-x-1/2  max-md:opacity-50 max-md:blur-md">
            <img src={stars.src} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
