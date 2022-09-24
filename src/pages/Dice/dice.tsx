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
  const { diceDiced, dice, room, playerID } = useApi();

  useEffect(() => {
    if (diceDiced !== null && diceDiced !== undefined) {
      console.log(diceDiced);
      setURL(imagesPath[diceDiced - 1]);
    }
  }, [diceDiced]);

  function getAnimation() {
    if (!room?.turnsPlayer) return '';
    if (!diceDiced && room?.turnsPlayer.id === playerID)
      return 'animate-bounce';
    return '';
  }

  return (
    <div className="w-[100] h-[100] flex ">
      <img src={jogar} />
      <img
        src={url !== null && url !== undefined ? url : imagesPath[0]}
        className={`bg-slate-200 cursor-pointer bg-transparent ${getAnimation()}`}
        onClick={() => {
          if (!dice || !room || room.turnsPlayer.id !== playerID || diceDiced)
            return;
          dice();
        }}
        alt=""
      />
    </div>
  );
};

export default Dice;
