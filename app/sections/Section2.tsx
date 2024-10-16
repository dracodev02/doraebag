import tokyo from "@/public/tokyo.png";

const Section2 = () => {
  return (
    <div
      id="mechanism"
      className="flex max-w-desktop w-full mx-auto px-2 flex-col gap-[87px] max-md:gap-10"
    >
      <h3 className="font-semibold font-archivo text-white rounded-[7px] bg-primary text-[40px] leading-[44px] w-fit px-2">
        Operational Mechanism
      </h3>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-md:gap-5">
        {/* box1 */}
        <div className="p-[50px] hover:scale-[1.01] duration-300 max-md:p-5 h-[307px] max-sm:h-[200px] rounded-[45px] items-center border border-secondary hover:shadow-box transition-all gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div className="z-[1]">
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Join & Stake
              </p>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                your tokens
              </p>
            </div>
            <p className="text-[18px] font-archivo z-[1]">
              Select a pool and stake your tokens to receive lottery tickets.
            </p>
          </div>
          <div className="max-md:absolute max-md:left-1/2 max-md:hidden max-md:-translate-x-1/2  max-md:blur-sm max-md:opacity-50">
            <img src={tokyo.src} alt="" className="w-[210px]" />
          </div>
        </div>
        {/* box2 */}
        <div className="p-[50px] hover:scale-[1.01] duration-300 max-md:p-5 h-[307px] max-sm:h-[200px] rounded-[45px] items-center border border-secondary hover:shadow-box transition-all gap-10 flex bg-primary">
          <div className="flex flex-col justify-between h-full">
            <div className="z-[1]">
              <p className="bg-white w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Earn
              </p>
              <p className="bg-white w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                lottery tickets
              </p>
            </div>
            <p className="text-[18px] font-archivo z-[1]">
              The longer you stake, the more tickets you earn, increasing your
              chances of winning.
            </p>
          </div>
          <div className="max-md:absolute max-md:left-1/2 max-md:hidden max-md:-translate-x-1/2 max-md:blur-sm max-md:opacity-50">
            <img src={"/decorbox2.png"} alt="" className="w-[210px]" />
          </div>
        </div>
        {/* box3 */}
        <div className="p-[50px] hover:scale-[1.01] duration-300 max-md:p-5 h-[307px] max-sm:h-[200px] rounded-[45px] items-center border border-secondary bg-secondary hover:shadow-box transition-all gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div className="z-[1]">
              <p className="bg-white w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Draw &
              </p>
              <p className="bg-white w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Win
              </p>
            </div>
            <p className="text-[18px] font-archivo text-white z-[1]">
              After each period, doraEbag conducts a draw, and users with
              winning tickets receive valuable prizes.
            </p>
          </div>
          <div className="max-md:absolute max-md:left-1/2 max-md:hidden max-md:-translate-x-1/2 max-md:blur-sm max-md:opacity-50">
            <img src={"/decorbox3.png"} alt="" className="w-[210px]" />
          </div>
        </div>
        {/* box4 */}
        <div className="p-[50px] hover:scale-[1.01] duration-300 max-md:p-5 h-[307px] max-sm:h-[200px] rounded-[45px] items-center border border-secondary hover:shadow-box transition-all gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div className="z-[1]">
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Withdraw
              </p>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                anytime
              </p>
            </div>
            <p className="text-[18px] font-archivo z-[1]">
              {`Don’t want to participate anymore? You can withdraw your assets at any time without penalties.`}
            </p>
          </div>
          <div className="max-md:absolute max-md:left-1/2 max-md:hidden max-md:-translate-x-1/2 max-md:blur-sm max-md:opacity-50">
            <img src={"/decorbox4.png"} alt="" className="w-[210px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
