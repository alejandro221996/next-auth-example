const QuinielaTable = () => {
  const data = [
    { name: "John Doe", age: 25 },
    { name: "Jane Smith", age: 30 },
    { name: "Bob Johnson", age: 40 },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Jugadores
            </th>
            <th scope="col" className="px-6 py-3">
              Chivas y América
            </th>
            <th scope="col" className="px-6 py-3">
              Tecos y Pumas
            </th>
            <th scope="col" className="px-6 py-3">
              Liverpool vs Bayern
            </th>
            <th scope="col" className="px-6 py-3">
              Barcelona vs Chelsea
            </th>
            <th scope="col" className="px-6 py-3">
              Santos vs Cruz Azul
            </th>
            <th scope="col" className="px-6 py-3">
              Real Madrid vs PSG
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Perla Solano Torres
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              L
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Federico Lopez Tarango
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              L
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Juan Carlos Lopez Tarango
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              L
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              Pepe Lopez Tarango
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              L
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              E
            </td>
            <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
              V
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default QuinielaTable;
