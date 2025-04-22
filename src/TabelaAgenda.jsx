export default function TabelaAgenda({ dias, horarios }) {
    return (
      <section className="bg-white p-4 shadow rounded">
        <h2 className="font-semibold mb-2">Histórico</h2>
  
        {/* Navegação da agenda */}
        <div className="flex items-center mb-2 gap-2">
          <button className="px-2 bg-gray-300 rounded">&lt;</button>
          <button className="px-2 bg-gray-300 rounded">Hoje</button>
          <button className="px-2 bg-gray-300 rounded">&gt;</button>
          <input
            type="text"
            value="22/04 à 29/04"
            className="px-2 py-1 border rounded bg-green-200"
            readOnly
          />
          <button className="bg-green-200 px-2 py-1 rounded">Dia</button>
          <button className="bg-green-300 px-2 py-1 rounded">Semana</button>
        </div>
  
        {/* Tabela de horários */}
        <div className="overflow-auto">
          <table className="min-w-[900px] table-fixed border">
            <thead>
              <tr>
                <th className="w-16"></th>
                {dias.map((dia, i) => (
                  <th key={i} className="bg-yellow-300 p-2 border text-left text-sm">
                    {dia}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {horarios.map((hora, i) => (
                <tr key={i}>
                  <td className="text-sm text-gray-700 border p-1">{hora}</td>
                  {dias.map((_, j) => (
                    <td key={j} className="border p-2"></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }