import Mario from '../../assets/images/Mario.svg';
import Wario from '../../assets/images/wario.svg';
import Luigi from '../../assets/images/Luigi.svg';
import superLudo from '../../assets/images/Super Ludo.svg';
import Waluigi from '../../assets/images/waluigi.svg';
import { useState } from 'react';
import { useApi } from '../../services/api';
import FinalResult from '../../pages/Final-Page';

export const Characters = () => {
  const { characters, selectPerson } = useApi();
  const [selectedPerson, setSelectedPerson] = useState<number | null>(null);

  function getImage(index: number) {
    if (index === 0) return Mario;
    if (index === 1) return Waluigi;
    if (index === 2) return Wario;
    return Luigi;
  }

  return (
    <div className="bg-[url('./src/assets/images/background.jpg')] w-screen h-screen flex flex-col justify-center items-center">
      <img src={superLudo} alt="superludo" />
      <div className="w-[653px] h-[441px] flex flex-col justify-center items-center gap-8 bg-[url('./src/assets/images/charbg.jpg')] bg-no-repeat rounded-xl">
        <h1 className="text-black bg-white rounded-sm">
          Escolha um personagem
        </h1>
        <div className="flex justify-evenly items-center rounded-3xl w-[410px] h-[140px] bg-[#0078FC]">
          {characters?.map((person) => (
            <div
              key={person}
              className="w-20 h-20 rounded-full flex items-center justify-center cursor-pointer"
              style={{
                backgroundColor:
                  selectedPerson === person ? '#FEB019' : '#D9D9D9',
              }}
              onClick={() => {
                setSelectedPerson(person);
              }}
            >
              <img src={getImage(person)} className="h-4/5" />
            </div>
          ))}
        </div>
        <button
          className="w-[250px] h-[60px] rounded-r-full rounded-l-full bg-white"
          onClick={() => {
            if (!selectPerson || selectedPerson === null) return;
            selectPerson(selectedPerson);
          }}
        >
          Prosseguir
        </button>
      </div>
      <FinalResult />
    </div>
  );
};
