import React, { useState } from "react";

const EleccionesTable = () => {
  const data = [
    {
      id: 1,
      description: "Chivas vs America",
      choices: ["Si", "No", "Quizás"],
    },
    {
      id: 2,
      description: "Cruz Azul vs Tecos",
      choices: ["Si", "No", "Quizás"],
    },
    {
      id: 3,
      description: "Tijuana vs Mazatlan",
      choices: ["Si", "No", "Quizás"],
    },
  ];
  const [elecciones, setElecciones] = useState([]);
  const handleSubmit = (event: any) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const entries = formData.entries();
    console.log(entries);
    console.log(formData);
  };
  return (
    <>
      <h1 className="text-2xl my-4 font-black">Elige tus predicciones</h1>
      <form className="w-3/5 mx-auto" onSubmit={handleSubmit}>
        <table className="w-full table-fixed text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <thead>
            <tr className="text-left">
              <th className="w-2/5 px-4 py-4">Partido</th>
              <th className="w-1/5 px-4 py-4">Empate</th>
              <th className="w-1/5 px-4 py-4">Local</th>
              <th className="w-1/5 px-4 py-4">Visitante</th>
            </tr>
          </thead>
          <tbody>
            {data.map((option, index) => (
              <tr
                key={option.id}
                className="text-left bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="border px-4 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {option.description}
                </td>
                <td className="border px-4 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <select
                    name={`option${option.id}-choice1`}
                    className="w-full"
                  >
                    {option.choices.map((choice, index) => (
                      <option key={index}>{choice}</option>
                    ))}
                  </select>
                </td>
                <td className="border px-4 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <select
                    name={`option${option.id}-choice2`}
                    className="w-full"
                  >
                    {option.choices.map((choice, index) => (
                      <option key={index}>{choice}</option>
                    ))}
                  </select>
                </td>
                <td className="border px-4 py-4 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <select
                    name={`option${option.id}-choice3`}
                    className="w-full"
                  >
                    {option.choices.map((choice, index) => (
                      <option key={index}>{choice}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
                >
                  Enviar selecciones
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </form>
    </>
  );
};

export default EleccionesTable;
