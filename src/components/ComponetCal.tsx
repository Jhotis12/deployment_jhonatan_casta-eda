import { useState } from "react"
import { calculateBMI, getBMICategory } from "../utils/Calculator"

export const ComponetCal = () => {
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")
  const [resultado, setResultado] = useState<number | null>(null)
  const [categoria, setCategoria] = useState("")

  const handleCalculate = () => {
    const p = parseFloat(peso)
    const a = parseFloat(altura)

    if (isNaN(p) || isNaN(a) || p <= 0 || a <= 0) {
      alert("Por favor ingresa valores válidos para peso y altura.")
      return
    }

    const bmi = calculateBMI(p, a)
    setResultado(bmi)
    setCategoria(getBMICategory(bmi))
  }

  return (
    <div className='w-full md:w-1/2 flex flex-col gap-6 p-8 bg-white/90 backdrop-blur-md rounded-l-2xl shadow-inner'>
      <div className="flex flex-col items-center justify-center gap-2">
        <h2 className="text-3xl font-bold text-slate-800">Calculadora IMC</h2>
        <p className="text-slate-500 text-sm">Índice de Masa Corporal</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 font-medium text-sm">Peso (kg)</label>
          <input
            className="bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-all"
            type="number"
            placeholder="Ej: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-slate-700 font-medium text-sm">Altura (m)</label>
          <input
            className="bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 transition-all"
            type="number"
            placeholder="Ej: 1.75"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </div>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none transition-colors shadow-md"
      >
        Calcular
      </button>

      {resultado !== null && (
        <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100 text-center animate-fade-in">
          <p className="text-slate-600 text-sm">Tu IMC es:</p>
          <p className="text-4xl font-bold text-indigo-600 my-2">{resultado}</p>
          <p className="text-slate-700 font-medium">Categoría: <span className="text-indigo-700">{categoria}</span></p>
        </div>
      )}
    </div>
  )
}
