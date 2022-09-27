import { useApi } from '../../services/api';
import { useEffect, useState } from 'react';

export const FinalResult = () => {
  const { playAgain, winner } = useApi();
  const [counter, setCounter] = useState(45);

  function handleCounter() {
    setTimeout(() => setCounter(counter - 1), 1000);
  }

  useEffect(() => {
    if (counter > 0) {
      handleCounter();
    } else {
      if (!playAgain) return;
      playAgain(false);
    }
  }, [counter]);

  return (
    <div className="w-screen h-screen bg-[#0007] text-center flex justify-center">
      <div className="w-4/5 h-2/4 max-w-[1054px] max-h-[486px] text-[#F7F7F7] flex flex-col py-6 justify-between mt-20">
        <h1 className="flex flex-col text-center text-[2.5rem]">
          <span>{winner?.winnerName}</span>
          <span>venceu!</span>
        </h1>
        <div className="flex flex-col items-center gap-5">
          <p className="text-[1.5rem]">
            Deseja jogar novamente?{' '}
            <span className="text-[#F84020]">{counter}</span>
          </p>
          <div className="flex gap-10 justify-center">
            <button
              className="bg-[#00A800] w-[160px] text-[1rem] text-center rounded"
              onClick={() => {
                if (!playAgain) return;
                playAgain(true);
              }}
            >
              Sim
            </button>
            <button
              className="bg-[#F84020] w-[160px] text-[1rem] py-2 text-center rounded"
              onClick={() => {
                if (!playAgain) return;
                playAgain(false);
              }}
            >
              Não
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
