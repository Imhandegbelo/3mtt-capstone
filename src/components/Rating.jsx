import { useState } from 'react';

const Rating = ({ max = 5, initial = 0, onRate }) => {
  const [rating, setRating] = useState(initial);
  const [hover, setHover] = useState(0);

  const handleClick = (rate) => {
    setRating(rate);
    if (onRate) onRate(rate);
  };

  return (
    <div className="flex space-x-1 text-2xl cursor-pointer">
      {[...Array(max)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = hover ? starValue <= hover : starValue <= rating;
        return (
          <span
            key={index}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className={`transition-colors ${
              isFilled ? 'text-yellow-400' : 'text-gray-300'
            }`}
          >
            {isFilled ? '★' : '☆'}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
