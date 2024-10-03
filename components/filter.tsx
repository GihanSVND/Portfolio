// components/CategoryFilter.tsx
import { useState } from 'react';

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const handleClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex justify-center space-x-[50px] sm:space-x-[100px] md:space-x-[200px] text-white text-[20px] sm:text-[25px] md:text-[30px]">
      {categories.map((category) => (
        <div
          key={category}
          className={`cursor-pointer ${
            activeCategory === category ? 'text-[#FF4401]' : 'text-white'
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
          {activeCategory === category && (
            <div className="h-1 mt-1 bg-[#FF4401]"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;

