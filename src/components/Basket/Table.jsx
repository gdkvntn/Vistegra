function Table({ data }) {
  const {
    area,
    box,
    list,
    numberOfList,
    priceList,
    pipe,
    numberOfPipe,
    pricePipe,
    numberOfSelfTapping,
    priceSelfTapping,
  } = data;

  const total = Math.round(
    numberOfList * priceList +
      numberOfPipe * pricePipe +
      numberOfSelfTapping * priceSelfTapping
  );

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Площадь: {area} м2
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Расчетный размер ячейки: {box}
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
            Наименование
          </th>
          <th scope="col" className="px-6 py-3">
            ед.
          </th>
          <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
            кол-во
          </th>
          <th scope="col" className="px-6 py-3">
            сумма
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            {list}
          </th>
          <td className="px-6 py-4">м2</td>
          <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {numberOfList}
          </td>
          <td className="px-6 py-4">{numberOfList * priceList}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            {pipe}
          </th>
          <td className="px-6 py-4">мп</td>
          <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {numberOfPipe}
          </td>
          <td className="px-6 py-4">{numberOfPipe * pricePipe}</td>
        </tr>
        <tr className="border-b border-gray-200 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
          >
            Саморез
          </th>
          <td className="px-6 py-4">шт</td>
          <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
            {numberOfSelfTapping}
          </td>
          <td className="px-6 py-4">
            {Math.round(numberOfSelfTapping * priceSelfTapping)}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr className="font-semibold text-gray-900 dark:text-white">
          <th scope="row" className="px-6 py-3 text-base">
            Total
          </th>
          <td></td>
          <td className="px-6 py-3"></td>
          <td className="px-6 py-3">{total}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
