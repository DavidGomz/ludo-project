interface Props {
  playerColor: string;
  playerName: string;
}

const playerName = ({ playerColor, playerName }: Props) => {
  return (
    <p
      className="font-play text-base md:text-sm"
      style={{ color: playerColor }}
    >
      {playerName}
    </p>
  );
};

export default playerName;
