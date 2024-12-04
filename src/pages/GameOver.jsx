import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-cover bg-[url('/overGame.webp')] w-full h-full flex items-center justify-center">
      <div className="p-[20px] flex flex-col gap-[10px] rounded-xl bg-white h-fit">
        <h1 className="text-primary font-principal text-2xl">Você Perdeu</h1>
        <Link to='/'><button className="w-full py-[15px] rounded-xl bg-white text-xl text-primary font-principal border-4 border-primary cursor-pointer">Restart</button></Link>
      </div>
    </div>
  )
}
export default App
