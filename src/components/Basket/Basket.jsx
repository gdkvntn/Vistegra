import Table from "./Table";

function Basket({ data }) {
  return (
    <div className="w-full max-w-xl flex gap-4 flex-col p-4 border border-gray-300 text-gray-900 rounded  ">
      <h2 className="text-xl font-extrabold dark:text-white">Результат:</h2>
      <div className="relative overflow-x-auto flex gap-4 flex-col shadow-md sm:rounded-lg">
        {data.map((el,i) => {
          return <Table key={i} data={el} />;
        })}
      </div>
    </div>
  );
}

export default Basket;
