import Mario from '../../../assets/images/Mario.svg';
import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
const moveImage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: -200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 200, y: 0, opacity: 1 },
  });

  return (
    <div className="w-[80px] h-[80px] flex gap-[23px]">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => {
          setIsVisible((v) => !v);
        }}
      >
        move Mario
      </button>
      {transition((style, item) =>
        item ? (
          <animated.img
            style={style}
            className="w-[47px] h-[47px]"
            src={Mario}
          />
        ) : (
          ''
        ),
      )}
    </div>
  );
};

export default moveImage;
