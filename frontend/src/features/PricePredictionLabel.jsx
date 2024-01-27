const PricePredictionLabel = () => {
  return (
    <section className="w-[1837px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full text-left text-29xl text-black font-inter">
      <div className="w-[1887px] flex flex-row items-start justify-between gap-[20px] max-w-[104%] shrink-0 mq1450:flex-wrap">
        <div className="w-[660px] flex flex-col items-start justify-start gap-[115px] min-w-[660px] max-w-full mq825:gap-[57px] mq825:min-w-full mq450:gap-[29px] mq1450:flex-1">
          <div className="self-stretch h-[127px] relative max-w-full">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow w-[610px] hidden" />
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow w-[610px] hidden z-[1]" />
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow w-[610px] hidden z-[2]" />
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-yellowgreen w-full flex flex-row items-center justify-center pt-[18px] pb-[19px] pr-[27px] pl-[30px] box-border h-full max-w-full z-[3]">
              <div className="h-[127px] w-[651px] relative rounded-xl bg-yellowgreen hidden max-w-full" />
              <button className="cursor-pointer [border:none] py-[9px] px-0 bg-white flex-1 rounded-xl flex flex-row items-center justify-end box-border max-w-full z-[4]">
                <div className="h-[90px] w-[594px] relative rounded-xl bg-white hidden max-w-full" />
                <img
                  className="h-[72px] w-[73px] relative object-cover z-[6]"
                  alt=""
                  src="/image-4@2x.png"
                />
              </button>
            </div>
            <b className="absolute top-[37px] left-[42px] inline-block w-[618px] h-4 z-[5] mq825:text-19xl mq450:text-10xl">
              Hotel Price Prediction
            </b>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[71px] box-border max-w-full mq825:pl-[35px] mq825:pr-[35px] mq825:box-border">
            <button className="cursor-pointer [border:none] py-4 pr-[148px] pl-[124px] bg-gray-200 rounded-xl flex flex-row items-center justify-center box-border max-w-full z-[1] hover:bg-darkslategray mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="h-[90px] w-[438px] relative rounded-xl bg-gray-200 hidden max-w-full" />
              <div className="h-[58px] relative text-29xl font-semibold font-inter text-black text-left inline-block z-[2] mq825:text-19xl mq450:text-10xl">
                Predict
              </div>
            </button>
          </div>
        </div>
        <div className="w-[738px] flex flex-col items-center justify-start gap-[115px] min-w-[738px] max-w-full mq825:gap-[57px] mq825:min-w-full mq450:gap-[29px] mq1450:flex-1">
          <div className="self-stretch h-[127px] relative max-w-full">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow w-[610px] hidden" />
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow w-[610px] hidden z-[1]" />
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-xl bg-greenyellow w-[610px] hidden z-[2]" />
            <div className="absolute top-[0px] left-[0px] rounded-xl bg-yellowgreen w-[610px] flex flex-row items-center justify-center pt-[18px] px-[18px] pb-[19px] box-border max-w-full z-[3]">
              <div className="h-[127px] w-[610px] relative rounded-xl bg-yellowgreen hidden max-w-full" />
              <button className="cursor-pointer [border:none] pt-[7px] px-[59px] pb-1.5 bg-white w-[554px] rounded-xl flex flex-row items-center justify-end box-border max-w-full z-[4]">
                <div className="h-[90px] w-[554px] relative rounded-xl bg-white hidden max-w-full" />
                <img
                  className="h-[77px] w-[77px] relative object-cover z-[6]"
                  alt=""
                  src="/image-5@2x.png"
                />
              </button>
            </div>
            <b className="absolute top-[37px] left-[120px] inline-block w-[618px] h-4 z-[5] mq825:text-19xl mq450:text-10xl">{`Trip Planner `}</b>
          </div>
          <div className="w-[534px] flex flex-row items-start justify-start max-w-full">
            <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full">
              <img
                className="w-[1029px] absolute my-0 mx-[!important] bottom-[-521px] left-[-876px] h-[695px] object-cover"
                loading="eager"
                alt=""
                src="/2b9eab26a4c34c6af8f89e45e2aa7011-1@2x.png"
              />
              <button className="cursor-pointer [border:none] py-4 pr-[94px] pl-[121px] bg-silver rounded-xl flex flex-row items-center justify-center box-border max-w-full whitespace-nowrap z-[1] hover:bg-gray-100 mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="h-[90px] w-[438px] relative rounded-xl bg-silver hidden max-w-full" />
                <div className="h-[58px] relative text-29xl font-semibold font-inter text-black text-left inline-block z-[2]">
                  <a href="https://397cead2868c20ac15.gradio.live">Plan here</a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePredictionLabel;