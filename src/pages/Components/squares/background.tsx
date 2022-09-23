import {
  Star,
  ArrowElbowUpRight,
  ArrowElbowRightDown,
  ArrowElbowDownLeft,
  ArrowElbowLeftUp,
} from 'phosphor-react';

interface PropTypes {
  image: 'star' | 'left' | 'top' | 'right' | 'bottom';
}

export const Background = ({ image }: PropTypes) => {
  if (image === 'star')
    return (
      <Star size={60} className="w-4/5 h-4/5 absolute inset-1 text-[#202020]" />
    );
  if (image === 'left')
    return (
      <ArrowElbowUpRight
        size={60}
        className="w-4/5 h-4/5 absolute inset-1 text-[#F84020]"
      />
    );
  if (image === 'top')
    return (
      <ArrowElbowRightDown
        size={60}
        className="w-4/5 h-4/5 absolute inset-1 text-[#6F37AF]"
      />
    );
  if (image === 'right')
    return (
      <ArrowElbowDownLeft
        size={60}
        className="w-4/5 h-4/5 absolute inset-1 text-[#FEB019]"
      />
    );
  if (image === 'bottom')
    return (
      <ArrowElbowLeftUp
        size={60}
        className="w-4/5 h-4/5 absolute center text-[#00A800]"
      />
    );

  return <></>;
};
