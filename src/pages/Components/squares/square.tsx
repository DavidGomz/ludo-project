import React, { Component, MouseEventHandler, useRef, useState } from 'react';
import { animated, useTransition } from 'react-spring';

interface Props {
  id?: number;
  color: string;
  playerId?: number;
  pieces?: PiecesTypes[];
}

interface PiecesTypes {
  playerId: number;
  src: string;
}

interface DataTypes {
  width: number;
  height: number;
}

const square = ({ color, pieces, playerId, id }: Props) => {
  const divElement = useRef<HTMLImageElement>(null);
  const [data, setData] = useState<DataTypes>();
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    from: { x: 0, y: 0, opacity: 1 },
    enter: { x: data ? data.width : 0, y: 0, opacity: 1 },
  });

  function getData() {
    if (divElement.current) {
      setData({
        width: divElement.current.offsetWidth,
        height: divElement.current.offsetHeight,
      });
      console.log(data);
    }
  }

  return (
    <div
      className={`w-[33.33%] h-[16.667%] flex justify-end items-start float-left border-solid border-[#202020] border bg-[${color}] `}
    >
      <div
        className="relative w-full h-full flex"
        ref={divElement}
        onLoad={() => getData()}
      >
        {pieces?.length !== 0
          ? pieces?.map((piece, index, array) => (
              <div>
                <img
                  key={index}
                  src={piece.src}
                  className={`h-full absolute`}
                  style={{
                    left: `${index * 0.3}rem`,
                    zIndex: piece.playerId === playerId ? 2 : 0,
                    pointerEvents:
                      piece.playerId !== playerId ? 'none' : 'auto',
                    opacity:
                      piece.playerId !== playerId && array.length > 1 ? 0.7 : 1,
                  }}
                  onClick={() => {
                    if (piece.playerId !== playerId) {
                      return;
                    }
                    setIsVisible(!isVisible);
                  }}
                />
                {transition((style, item) =>
                  item && piece.playerId === playerId ? (
                    <animated.img
                      style={style}
                      className="h-full"
                      src={piece.src}
                    />
                  ) : (
                    ''
                  ),
                )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default square;
