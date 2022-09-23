import { useRef, useState } from 'react';

import dice1 from '../../assets/images/dice1.svg';
import dice2 from '../../assets/images/dice2.svg';
import dice3 from '../../assets/images/dice3.svg';
import dice4 from '../../assets/images/dice4.svg';
import dice5 from '../../assets/images/dice5.svg';
import dice6 from '../../assets/images/dice6.svg';

export const imagesPath = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [url, setURL] = useState(dice1);
  function handleClick() {
    const val = Math.floor(Math.random() * 6);
    setURL(imagesPath[val]);
  }
  return (
    <div className="w-[100] h-[100] ">
      <img
        src={url}
        className="bg-slate-200 cursor-pointer bg-transparent animate-bounce"
        onClick={handleClick}
        alt=""
      />
    </div>
  );
};

export default Dice;
