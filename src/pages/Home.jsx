import React, { useState } from "react";
import Questions from "../components/questions";

function App() {
  const [showQuestions, setShowQuestions] = useState(false);

  const handleStart = () => {
    setShowQuestions(true); // Exibe o componente Questions
  };
//
  return (
    <div className=" bg-[url('/startGame.jpg')] 
    bg-cover w-full h-[100dvh] flex flex-col items-center justify-center">
      {!showQuestions && (
        <div className="gap-[20px] p-[20px] flex justify-center flex-col bg-white rounded-xl">
        <section className=" flex justify-center items-center flex-col w-max-[400px] p-[20px] gap-[10px]">
          <h2 className="text-primary font-principal text-2xl">Regras do jogo</h2>
          <p className="font-semibold">Selecione a resposta correta</p>
          <p className="font-semibold">Voce tem tres tentativas</p>
          <p className="font-semibold">O proximo nivel é liberado apos acertar</p>
          <p className="font-semibold">Preste atenção em cada questão</p>
          <p className="font-semibold">A história faz parte da questão</p>
        </section>
        <button className="border-[#2982C1]/[.8] cursor-pointer font-principal text-2xl text-primary bg-primary border-4 px-[20px] py-[15px] rounded-xl h-fit bg-white text-sky-700" onClick={handleStart}><h1>Iniciar jogo</h1></button>
      </div>
      )}
      {showQuestions && <Questions />}
    </div>
  );
}

export default App;
