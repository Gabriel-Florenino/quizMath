import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import data from "../data.json";

function Questions() {
  const navigate = useNavigate();
  const [answerCorrect, setAnswerCorrect] = useState(false);
  const [resetControl, setResetControl] = useState(0);
  const [hidden, setHidden] = useState("hidden");
  const [idQuestion, setIdQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [disableReset, setdisableReset] = useState('');
  const [disableOptions, setDisableOptions] = useState('');

  const question = data.questions.find((q) => q.id === idQuestion);

  useEffect(() => {
    setSelectedOption(null);
    setAnswerCorrect(false);
    setHidden("hidden");
    setDisableOptions('pointer-events-auto')
  }, [idQuestion]);

  if (!question) {
    return <p>Questão não encontrada.</p>;
  }



  function verifyAnswer(answer, id) {
    setSelectedOption(id);
    setAnswerCorrect(answer === question.answer);
    if (answer === question.answer) {
      setHidden("flex");
      setIdQuestion((prevId) => (prevId < 10 ? prevId + 1 : navigate("/game-sucess")));
    }else{
      if (resetControl >= 2) {
      navigate("/game-over");
      }
    }
    setDisableOptions('pointer-events-none')
  }

  function resetAnswer() {
    if (resetControl < 2) {
      setSelectedOption(null);
      setAnswerCorrect(false);
      setDisableOptions('pointer-events-auto')
    }
    setResetControl(resetControl + 1);
  }

  function nextLevel() {
    setHidden("hidden")
  }

  return (
    <div className="w-[450px] p-[40px] flex gap-[20px] flex-col bg-white rounded-xl">
      <section className="flex flex-col gap-[10px]">
        <h1 className="text-primary font-principal text-2xl">{question.location}</h1>
        <p className="text-base">{question.context}</p>
        <img className="object-cover h-[200px] object-top" src={question.imagePath} alt={`Imagem de ${question.location}`} />
      </section>
      <section className="flex flex-col gap-[10px]">
        <h2 className="text-primary font-principal text-xl">Resolva o desafio</h2>
        <p>{question.problem}</p>
        <ul className="grid gap-[20px] grid-cols-2 my-[20px]">
          {question.options.map((option, index) => (
            <li
              id={index}
              className={`cursor-pointer text-primary font-principal list-control p-[10px] 
                text-center border-4 border-primary rounded-2xl ${
                selectedOption === index
                  ? answerCorrect
                    ? "bg-emerald-400"
                    : "bg-red-400"
                  : ""
              } ${disableOptions}`}
              key={index}
              onClick={() => verifyAnswer(option, index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </section>
      <section className="flex gap-[20px] justify-between">
        <button
          onClick={resetAnswer}
          id="but-reset"
          className={`${disableReset} text-primary font-principal w-full text px-[20px] py-[10px] self-center border-4
           border-primary rounded-xl`}
        >
          Reiniciar
        </button>
      </section>
    </div>
  );
}

export default Questions;
