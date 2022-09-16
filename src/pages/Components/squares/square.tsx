interface Props {
  color: string;
}

const square = ({ color }: Props) => {
  return (
    <div
      className="w-[33.33%] h-[16.667%] float-left border-solid border-[#202020] border"
      style={{ backgroundColor: color }}
    ></div>
  );
};

export default square;
