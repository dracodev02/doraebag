const WhyDifferent = () => {
  return (
    <div className="max-w-desktop mx-auto px-2 w-full flex flex-col gap-[87px] max-md:gap-10">
      <h3 className="font-semibold in-view font-archivo text-white rounded-[7px] bg-primary text-[40px] leading-[44px] w-fit px-2">
        Why We Are Different
      </h3>
      <div className="bg-secondary in-view rounded-[45px] relative overflow-hidden">
        <div className="relative z-[2] max-md:py-10 pb-[77px] pt-12 md:max-w-[600px] pl-[52px] max-md:px-5">
          <img
            src="/message.png"
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-5 w-[95%] max-md:hidden"
          />
          <p className="text-white text-[18px] font-archivo md:max-w-[500px] md:py-20 relative z-1">
            Traditional staking offers predictable returns, but doraEbag takes
            staking to the next level. Our lottery-based system adds excitement
            and the potential for higher rewards, making every staking period an
            opportunity to win big. Plus, you retain full control over your
            assets with our no-lock-up policy.
          </p>
        </div>
        <img
          src="/decorwhydifferent.png"
          alt=""
          className="absolute top-1/2 -translate-y-1/2 right-5 z-[1] max-md:blur-md max-md:opacity-50 max-md:brightness-75"
        />
      </div>
    </div>
  );
};

export default WhyDifferent;
