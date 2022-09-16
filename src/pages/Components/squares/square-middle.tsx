interface Props {
  color: string;
}

const squareMiddle = ({ color }: Props) => {
  return (
    <div
      className="w-[16.667%] h-[33.33%] float-left border-[#202020] border"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default squareMiddle;
