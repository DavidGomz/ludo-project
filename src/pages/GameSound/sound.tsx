import MarioSound from '../../sound/supermario.wav';
import VolumeMedium from '../../assets/images/volume-medium.svg';
import MuteVolume from '../../assets/images/volume-mute.svg';

const GameSound = () => {
  let marioSound = new Audio(MarioSound);
  marioSound.loop = true;
  return (
    <div className="flex gap-[20px] w-[200px] h-[200px] absolute top-[-40px] left-[-10px]">
      <button
        className="bg-transparent"
        onClick={() => {
          marioSound.play();
        }}
      >
        <img src={VolumeMedium} alt="audio" />
      </button>
      <button
        className=" bg-transparent"
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
