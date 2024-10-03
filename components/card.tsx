import React from 'react';

type CardProps = {
  image: string;
  title: string;
  description: string;
  seeMoreLink: string;
};

const Card: React.FC<CardProps> = ({ image, title, description, seeMoreLink }) => {
  return (
    <div className="max-w-xs w-full bg-[#18181b] border-[1px] border-white text-white rounded-xl overflow-hidden shadow-lg p-4">
      <div className="w-full h-48 bg-gray-900 flex justify-center items-center rounded-md mb-4">
        {image ? (
          <img src={image} alt={title} className="object-cover h-full w-full rounded-md" />
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
          className="bg-[#FF4401] text-white px-4 py-2 rounded-full text-sm hover:bg-orange-600 transition-colors"
        >
          See more...
        </a>
      </div>
    </div>
  );
};

export default Card;
