import { useApi } from '../../services/api';

export const Messages = () => {
  const { message } = useApi();
  return (
    <p className="w-full text-center text-base text-[#00A800]">{message}</p>
  );
};
