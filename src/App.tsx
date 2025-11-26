import './App.css'
import { ComponetCal } from './components/ComponetCal'
import { ComponetImg } from './components/ComponetImg'

function App() {
  return (
    <div className='min-h-screen w-dvw bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4'>
      <div className='flex flex-col md:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full border'>
        <ComponetCal />
        <ComponetImg />
      </div>
    </div>
  )
}

export default App
