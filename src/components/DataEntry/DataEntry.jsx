import Button from "../Button";
import Input from "../Input";
import Select from "../Select";

function DataEntry({ data, config, calculate }) {
  const lists = data.filter((el) => el.type === "list");
  const pipes = data.filter((el) => el.type === "pipe");
  const frame = config.filter((el) => el.type === "frame");

  return (
    <div className="w-full max-w-xl border p-4  rounded flex flex-col gap-6 ">
      {" "}
      <Select options={lists} title={"Материал"} />
      <Select options={pipes} title={"Трубы"} />
      <Input config={config} configKey={"length"} />
      <Input config={config} configKey={"width"} />
      <Select options={frame} title={"Прочность"} />
      <Button name={"Посчитать"} onClick={() => console.log(1)} />
    </div>
  );
}

export default DataEntry;
