interface Props {
  playerColor: string;
  playerName: string;
}

const playerName = ({ playerColor, playerName }: Props) => {
  return (
    <p className="font-play text-base" style={{ color: playerColor }}>
      {playerName}
    </p>
  );
};

export default playerName;
