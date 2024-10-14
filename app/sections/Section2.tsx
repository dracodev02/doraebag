import tokyo from "@/public/tokyo.png";

const Section2 = () => {
  return (
    <div className="flex max-w-desktop w-full mx-auto px-2 flex-col gap-[87px]">
      <h3 className="font-semibold font-archivo text-white rounded-[7px] bg-primary text-[40px] leading-[44px] w-fit px-2">
        Operational Mechanism
      </h3>
      <div className="grid grid-cols-2 gap-10">
        {/* box1 */}
        <div className="p-[50px] h-[307px] rounded-[45px] items-center border border-secondary shadow-box gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Join & Stake
              </p>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                your tokens
              </p>
            </div>
            <p className="text-[18px] leading-6 font-archivo">
              Select a pool and stake your tokens to receive lottery tickets.
            </p>
          </div>
          <div>
            <img
              src={tokyo.src}
              alt=""
              className="w-[210px] aspect-[210/166]"
            />
          </div>
        </div>
        {/* box2 */}
        <div className="p-[50px] h-[307px] rounded-[45px] items-center border border-secondary shadow-box gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Join & Stake
              </p>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                your tokens
              </p>
            </div>
            <p className="text-[18px] leading-6 font-archivo">
              Select a pool and stake your tokens to receive lottery tickets.
            </p>
          </div>
          <div>
            <img
              src={tokyo.src}
              alt=""
              className="w-[210px] aspect-[210/166]"
            />
          </div>
        </div>
        {/* box3 */}
        <div className="p-[50px] h-[307px] rounded-[45px] items-center border border-secondary shadow-box gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Join & Stake
              </p>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                your tokens
              </p>
            </div>
            <p className="text-[18px] leading-6 font-archivo">
              Select a pool and stake your tokens to receive lottery tickets.
            </p>
          </div>
          <div>
            <img
              src={tokyo.src}
              alt=""
              className="w-[210px] aspect-[210/166]"
            />
          </div>
        </div>
        {/* box4 */}
        <div className="p-[50px] h-[307px] rounded-[45px] items-center border border-secondary shadow-box gap-10 flex">
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                Join & Stake
              </p>
              <p className="bg-primary w-fit rounded-[7px] px-2 font-semibold text-[30px] leading-[32px]">
                your tokens
              </p>
            </div>
            <p className="text-[18px] leading-6 font-archivo">
              Select a pool and stake your tokens to receive lottery tickets.
            </p>
          </div>
          <div>
            <img
              src={tokyo.src}
              alt=""
              className="w-[210px] aspect-[210/166]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
