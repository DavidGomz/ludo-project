import MarioSound from '../../sound/supermario.wav';
import VolumeMedium from '../../assets/images/volume-medium.svg';
import MuteVolume from '../../assets/images/volume-mute.svg';

const GameSound = () => {
  let marioSound = new Audio(MarioSound);
  return (
    <div className="flex">
      <button
        className="w-[250px] h-[60px] bg-transparent absolute top-0 right-[20
      px]"
        onClick={() => {
          marioSound.play();
        }}
      >
        <img src={VolumeMedium} alt="audio" />
      </button>
      <button
        className="w-[250px] h-[60px] bg-transparent absolute top-[60px] right-[10
      px]"
        onClick={() => {
          marioSound.pause();
        }}
      >
        <img src={MuteVolume} alt="audio" />
      </button>
    </div>
  );
};

export default GameSound;
