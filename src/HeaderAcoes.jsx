export default function HeaderAcoes() {
    return (
      <div className="mb-4">
        <h1 className="text-lg font-bold mb-2">Nome do doutor</h1>
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            placeholder="Buscar paciente"
            className="p-2 border border-gray-300 rounded bg-green-200"
          />
          <button className="bg-green-300 px-4 py-2 rounded hover:bg-green-400 transition">
            Novo Paciente
          </button>
          <button className="bg-green-300 px-4 py-2 rounded hover:bg-green-400 transition">
            Lista de espera
          </button>
          <button className="bg-green-300 px-4 py-2 rounded hover:bg-green-400 transition">
            Observações
          </button>
          <button className="bg-green-300 px-4 py-2 rounded hover:bg-green-400 transition">
            Agendamento online
          </button>
        </div>
      </div>
    );
  }