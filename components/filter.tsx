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
    <div className="flex justify-center space-x-[70px] sm:space-x-[170px] text-white text-lg">
      {categories.map((category) => (
        <div
          key={category}
          className={`cursor-pointer ${
            activeCategory === category ? 'text-orange-500' : 'text-white'
          }`}
          onClick={() => handleClick(category)}
        >
          {category}
          {activeCategory === category && (
            <div className="h-1 mt-1 bg-orange-500"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
