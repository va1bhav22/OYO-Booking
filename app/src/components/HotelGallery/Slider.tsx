import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { useState } from "react";

const Slider = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1754);
  return (
    <div>
      <MultiRangeSlider
        style={{ border: "none", boxShadow: "none" }}
        min={454}
        max={1754}
        label={false}
        ruler={false}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        barInnerColor="red"
        thumbLeftColor="white"
        thumbRightColor="white"
        onInput={(e: ChangeResult) => {
          setMinValue(e.minValue);
          setMaxValue(e.maxValue);
        }}
      ></MultiRangeSlider>
      <div className="flex justify-between">
        <div>{minValue}</div>
        <div>{maxValue}</div>
      </div>
    </div>
  );
};

export default Slider;
