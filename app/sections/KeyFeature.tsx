const KeyFeature = () => {
  return (
    <div
      id="keyFeatures"
      className="w-full max-w-desktop mx-auto flex flex-col gap-[87px] px-2 max-md:gap-10 relative"
    >
      <img
        src="/E_logo.png"
        alt=""
        className="absolute opacity-35 w-[60%] top-0 -translate-y-1/2 right-0 translate-x-1/3 -z-[1]"
      />
      <img
        src="/stars.svg"
        alt=""
        className="absolute opacity-35 w-[60%] top-0 translate-y-full left-0 -translate-x-1/3 -z-[1]"
      />
      <h3 className="font-semibold in-view font-archivo text-white rounded-[7px] bg-primary text-[40px] leading-[44px] w-fit px-2">
        Key Features
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-10 max-md:gap-5">
        <div className="px-[35px] in-view hover:scale-[1.01] duration-300 max-md:p-5 pt-10 w-[380px] md:h-[300px] max-md:pb-10 rounded-[45px] border border-secondary hover:shadow-box transition-all gap-7 flex flex-col">
          <div>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Lottery-Based
            </p>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Rewards
            </p>
          </div>

          <div className="w-full bg-black h-[1px]"></div>
          <p className="text-[18px] leading-6 font-archivo text-black">
            A chance to win big with each draw.
          </p>
        </div>
        <div className="px-[35px] in-view hover:scale-[1.01] duration-300 max-md:p-5 pt-10 w-[380px] md:h-[300px] max-md:pb-10 rounded-[45px] border border-secondary hover:shadow-box transition-all gap-7 flex flex-col">
          <div>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Flexible Staking
            </p>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Options
            </p>
          </div>

          <div className="w-full bg-black h-[1px]"></div>
          <p className="text-[18px] leading-6 font-archivo text-black">
            Stake as much or as little as you want, with no lock-up.
          </p>
        </div>
        <div className="px-[35px] in-view hover:scale-[1.01] duration-300 max-md:p-5 pt-10 w-[380px] md:h-[300px] max-md:pb-10 rounded-[45px] border border-secondary hover:shadow-box transition-all gap-7 flex flex-col">
          <div>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Prize
            </p>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Scaling
            </p>
          </div>

          <div className="w-full bg-black h-[1px]"></div>
          <p className="text-[18px] leading-6 font-archivo text-black">
            The more you stake, the bigger your potential rewards.
          </p>
        </div>
        <div className="px-[35px] in-view hover:scale-[1.01] duration-300 max-md:p-5 pt-10 w-[380px] md:h-[300px] max-md:pb-10 rounded-[45px] border border-secondary hover:shadow-box transition-all gap-7 flex flex-col">
          <div>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Instant
            </p>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Withdrawal
            </p>
          </div>

          <div className="w-full bg-black h-[1px]"></div>
          <p className="text-[18px] leading-6 font-archivo text-black">
            Withdraw your tokens anytime, no penalties.
          </p>
        </div>
        <div className="px-[35px] in-view hover:scale-[1.01] duration-300 max-md:p-5 pt-10 w-[380px] md:h-[300px] max-md:pb-10 rounded-[45px] border border-secondary hover:shadow-box transition-all gap-7 flex flex-col">
          <div>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Comprehensive
            </p>
            <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
              Dashboard
            </p>
          </div>

          <div className="w-full bg-black h-[1px]"></div>
          <p className="text-[18px] leading-6 font-archivo text-black">
            Track your staking, tickets, and prize history easily.
          </p>
        </div>
      </div>
    </div>
  );
};
export default KeyFeature;
