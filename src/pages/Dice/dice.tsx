import { useEffect, useState } from 'react';

import dice1 from '../../assets/images/dice1.svg';
import dice2 from '../../assets/images/dice2.svg';
import dice3 from '../../assets/images/dice3.svg';
import dice4 from '../../assets/images/dice4.svg';
import dice5 from '../../assets/images/dice5.svg';
import dice6 from '../../assets/images/dice6.svg';

import jogar from '../../assets/images/Jogar.svg';

import { useApi } from '../../services/api';

export const imagesPath = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [url, setURL] = useState(dice1);
  const { diceNumber, dice, room, playerID, canDice } = useApi();
  const [clicked, setClicked] = useState(!canDice);

  useEffect(() => {
    if (diceNumber !== null && diceNumber !== undefined) {
      setURL(imagesPath[diceNumber - 1]);
    }
    setClicked(!canDice);
  }, [diceNumber, canDice]);

  function getAnimation() {
    console.log('verificando if', !clicked);
    if (!clicked) return 'animate-bounce';
    return '';
  }

  return (
    <div className="flex gap-10">
      {clicked ? null : <img src={jogar} className={`${getAnimation()}`} />}
      <img
        src={url !== null && url !== undefined ? url : imagesPath[0]}
        className={`w-[100px] h-[100px] bg-slate-200 cursor-pointer bg-transparent`}
        onClick={() => {
          if (!dice || !room || clicked) return;
          dice();
        }}
        alt=""
      />
    </div>
  );
};

export default Dice;
