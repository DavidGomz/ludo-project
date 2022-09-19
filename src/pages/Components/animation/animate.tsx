import { useState } from 'react';
import { useTransition, animated } from 'react-spring';

interface PropTypes {
  sprites: string[];
  direction: 'L' | 'R' | 'T' | 'B';
}

const moveImage = ({ direction, sprites }: PropTypes) => {
  const [isVisible, setIsVisible] = useState(false);
  const [actual, setActual] = useState(0);
  const transition = useTransition(isVisible, {
    from: { x: -200, y: 0, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    leave: { x: 200, y: 0, opacity: 1 },
  });

  function start() {
    setIsVisible(true);
  }

  return !isVisible ? (
    <img src={sprites[actual]} className={`h-full absolute`} />
  ) : null;
};

export default moveImage;
