import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

function DataEntry({ data, config, valueСheck }) {
  const lists = data.filter((el) => el.type === "list");
  const pipes = data.filter((el) => el.type === "pipe");
  const frame = config.filter((el) => el.type === "frame");

  return (
    <div className="w-full max-w-xl border p-4  rounded flex flex-col gap-6 ">
      {" "}
      <Select options={lists} title={"Материал"} type={"list"} />
      <Select options={pipes} title={"Трубы"} type={"pipe"} />
      <Input config={config} configKey={"length"} />
      <Input config={config} configKey={"width"} />
      <Select options={frame} title={"Прочность"} type={"frame"} />
      <Button name={"Посчитать"} onClick={() => valueСheck()} />
    </div>
  );
}

export default DataEntry;
