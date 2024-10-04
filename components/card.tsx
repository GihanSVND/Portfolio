import React from 'react';

type CardProps = {
  image: string;
  title: string;
  description: string;
  seeMoreLink: string;
};

const Card: React.FC<CardProps> = ({ image, title, description, seeMoreLink }) => {
  return (
    <div className="bg-[#18181b] border-[1px] border-white text-white rounded-[48px] overflow-hidden shadow-lg p-4">
      <div className="flex justify-center items-center rounded-[38px] mb-4">
        {image ? (
          <img src={image} alt={title} className="w-auto h-auto max-w-full rounded-[38px]" />
        ) : (
          <span className="text-gray-400">Image</span>
        )}
      </div>
      <div className="px-2 py-2">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <div className="mt-4 flex justify-end">
        <a
          href={seeMoreLink}
          className="bg-[#FF4401] text-white px-4 py-2 sm:px-7 md:py-4 rounded-full text-sm md:text-lg hover:bg-[orange]-100 transition-colors"
        >
          See more
        </a>
      </div>
    </div>
  );
};

export default Card;
