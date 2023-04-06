import { useContext, useState } from "react";
import { dataCalcContext } from "../App";

function Input({ config, configKey }) {
  const [value, setValue] = useState("");
  const size = config.find((el) => el.key === configKey);
  const [dataCalc, setDataCalc] = useContext(dataCalcContext);
 
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const numberVerification = (e) => {
    let val = e.target.value;
    if (val < size.min) {
      val = size.min;
      setValue(size.min);
    } else if (val > size.max) {
      val = size.max;
      setValue(size.max);
    }
    setDataCalc((old) => ({ ...old, [configKey]: +val }));
  };

  const onEnterDown = (e) => {
    if (e.key === "Enter") {
      numberVerification(e);
    }
  };

  return (
    <div>
      <label
        htmlFor="input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {size.name}
      </label>
      <input
        type="number"
        id="input"
        placeholder={`от ${size.min} до ${size.max}`}
        value={value}
        onChange={changeValue}
        onBlur={numberVerification}
        onKeyDown={onEnterDown}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus-visible:outline-blue-500 focus-visible: focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
}

export default Input;
