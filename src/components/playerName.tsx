interface Props {
  playerColor: string;
  playerName: string;
  fontSize?: string;
  width?: string;
  maxWidth?: string;
}

interface StyleTypes {
  fontSize?: string;
  width?: string;
  color?: string;
  maxWidth?: string;
}

const playerName = ({
  playerColor,
  playerName,
  fontSize,
  width,
  maxWidth,
}: Props) => {
  function getStyle() {
    const style: StyleTypes = {};
    if (playerColor) {
      style.color = playerColor;
    }
    if (fontSize) {
      style.fontSize = fontSize;
    }
    if (width) {
      style.width = width;
    }
    if (maxWidth) {
      style.maxWidth = maxWidth;
    }
    return style;
  }

  return (
    <p
      className="font-play text-base overflow-hidden bg-white rounded-sm"
      style={getStyle()}
    >
      {playerName}
    </p>
  );
};

export default playerName;
