import MarioSound from '../../sound/supermario.wav';
import VolumeMedium from '../../assets/images/volume-medium.svg';

const GameSound = () => {
  <button
    className="w-[250px] h-[60px] bg-transparent absolute top-0 right-[8
      0px]"
    onClick={() => {
      let marioSound = new Audio(MarioSound);
      marioSound.play();
    }}
  >
    <img src={VolumeMedium} alt="audio" />
  </button>;
};
export default GameSound;
