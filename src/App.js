import Basket from "./components/Basket/Basket";
import DataEntry from "./components/DataEntry/DataEntry";
import data from "./data/data.json";
import config from "./data/config.json";
import { createContext, useState } from "react";
export const dataCalcContext = createContext();
function App() {
  const [dataCalc, setDataCalc] = useState([]);

  const calculate = (listWidth, width, length) => {};

  return (
    <div className="h-screen flex justify-center p-6 border-gray-300 text-gray-900 dark:bg-gray-600">
      <dataCalcContext.Provider value={[dataCalc, setDataCalc]}>
        <DataEntry data={data} config={config} calculate={calculate} />
      </dataCalcContext.Provider>

      <Basket />
    </div>
  );
}

export default App;
