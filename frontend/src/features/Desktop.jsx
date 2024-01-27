import FrameSet from './FrameSet'
import PricePredictionLabel from './PricePredictionLabel'

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[540px] box-border gap-[71px] tracking-[normal] lg:gap-[35px] mq825:gap-[18px]">
      <FrameSet />
      <PricePredictionLabel />
    </div>
  );
};

export default Desktop;