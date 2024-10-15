const SectionWhyUs = () => {
  return (
    <div className="w-full max-w-desktop mx-auto px-2 flex flex-col gap-[87px] max-md:gap-10">
      <h3 className="font-semibold font-archivo text-white rounded-[7px] bg-primary text-[40px] leading-[44px] w-fit px-2">
        Why Us
      </h3>
      <div className="bg-secondary text-white py-[70px] max-md:px-5 px-[60px] rounded-[45px] flex gap-6 max-md:flex-col">
        <div className="flex flex-col gap-5 max-md:gap-2 md:hover:-mt-2 transition-all w-full">
          <p className="text-[30px] leading-8 font-semibold font-archivo">
            Exciting Lottery Rewards{" "}
          </p>
          <p className="text-[18px] leading-6">
            Win valuable gifts instead of earning fixed interest rates.
          </p>
        </div>
        <div className="max-md:hidden h-[186px] w-[1px] bg-white"></div>
        <div className="flex flex-col gap-5 max-md:gap-2 md:hover:-mt-2 transition-all w-full">
          <p className="text-[30px] leading-8 font-semibold font-archivo">
            Flexible Staking{" "}
          </p>
          <p className="text-[18px] leading-6">
            No lock-up periods. Stake, earn, and withdraw whenever you want.{" "}
          </p>
        </div>
        <div className="max-md:hidden h-[186px] w-[1px] bg-white"></div>
        <div className="flex flex-col gap-5 max-md:gap-2 md:hover:-mt-2 transition-all w-full">
          <p className="text-[30px] leading-8 font-semibold font-archivo">
            Increased Rewards{" "}
          </p>
          <p className="text-[18px] leading-6">
            The more you stake and the longer you stay, the higher your reward
            potential.{" "}
          </p>
        </div>
        <div className="max-md:hidden h-[186px] w-[1px] bg-white"></div>
        <div className="flex flex-col gap-5 max-md:gap-2 md:hover:-mt-2 transition-all w-full">
          <p className="text-[30px] leading-8 font-semibold font-archivo">
            Transparent & Secured{" "}
          </p>
          <p className="text-[18px] leading-6">
            Built on Starknet technology for transparency and security.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
export default SectionWhyUs;
