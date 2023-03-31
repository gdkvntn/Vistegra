import { useContext } from "react";
import { dataCalcContext } from "../App";

function Select({ title, options, type }) {
  const [dataCalc, setDataCalc] = useContext(dataCalcContext);

  const selection = (e) => {
    console.log(dataCalc);
    setDataCalc((old) => ({ ...old, [type]: e.target.value }));
  };

  return (
    <div>
      {" "}
      <label
        htmlFor="select"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {title}
      </label>
      <select
        id="select"
        onChange={selection}
        defaultValue={""}
        className="bg-gray-50 border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value={""} disabled>{`Выберите ${title}`}</option>
        {options.map((option) => {
          return (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Select;
