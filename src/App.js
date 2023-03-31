import Basket from "./components/Basket/Basket";
import DataEntry from "./components/DataEntry/DataEntry";
import data from "./data/data.json";
import config from "./data/config.json";
import { createContext, useState } from "react";
export const dataCalcContext = createContext();
function App() {
  const [dataCalc, setDataCalc] = useState({
    list: "",
    pipe: "",
    length: 0,
    width: 0,
    frame: "",
  });
  const [basketData, setBasketData] = useState([]);

  const valueСheck = () => {
    return Object.values(dataCalc).find((el) => el === "") !== undefined
      ? alert("Вы выбрали не все параметры")
      : findCalc();
  };

  const findCalc = () => {
    const list = data.find((el) => el.name === dataCalc.list);
    const pipe = data.find((el) => el.name === dataCalc.pipe);
    const selfTapping = data.find((el) => el.type === "fix");
    const fix = config.filter((el) => el.type === "fix");
    const { length } = dataCalc;
    const { width } = dataCalc;
    let area = length * width;
    let numberOfList = Math.ceil((length * width) / list.width);
    let quantity;
    let numberOfSelfTapping;

    if (list.material === "plastic") {
      quantity = fix.find((el) => el.key === "plastic").value;
      numberOfSelfTapping = area * quantity;
    } else {
      quantity = fix.find((el) => el.key === "metal").value;
      numberOfSelfTapping = area * quantity;
    }

    setBasketData([
      ...basketData,
      {
        area: area,
        box: "",
        list: list.name,
        numberOfList: numberOfList,
        priceList: list.price,
        pipe: pipe.name,
        numberOfPipe: "",
        pricePipe: pipe.price,
        numberOfSelfTapping: numberOfSelfTapping,
        priceSelfTapping: selfTapping.price,
      },
    ]);
  };

  return (
    <div className="h-screen flex justify-center p-6 border-gray-300 text-gray-900 dark:bg-gray-600">
      <dataCalcContext.Provider value={[dataCalc, setDataCalc]}>
        <DataEntry data={data} config={config} valueСheck={valueСheck} />

        <Basket data={basketData} />
      </dataCalcContext.Provider>
    </div>
  );
}

export default App;
