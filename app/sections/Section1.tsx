import coverDoraebag from "@/public/coverDoraebag.png";
import stars from "@/public/stars.png";
const Section1 = () => {
  return (
    <div className="w-full max-w-desktop px-2 mx-auto pt-[70px]">
      <div className=" flex justify-between">
        <div className="max-w-[531px] w-full flex flex-col gap-[35px]">
          <h1 className="font-archivo font-semibold text-[60px] leading-[65px]">
            Revolutionizing Staking with Lottery Rewards
          </h1>
          <p className="text-xl">
            Stake your tokens, earn lottery tickets, and stand a chance to win
            valuable prizes—staking has never been this exciting.
          </p>
          <button className="py-5 px-[50px] text-xl text-white font-space-grotesk w-fit rounded-[14px] bg-secondary cursor-pointer">
            Explore
          </button>
        </div>
        <div className="max-w-[600px] rounded-2xl overflow-hidden aspect-[600/515] w-full">
          <img className="w-full h-full" src={coverDoraebag.src} alt="" />
        </div>
      </div>
      <div className="mt-[124px] py-6 relative">
        <div className="bg-[#F3F3F3] rounded-[45px] ">
          <div className="p-[60px]">
            <div className="max-w-[500px] w-full flex flex-col gap-6">
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
          <div className="absolute right-[135px] z-[1] h-full top-0 aspect-[359/394]">
            <img src={stars.src} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
