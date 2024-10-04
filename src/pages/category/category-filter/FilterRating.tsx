import { useState } from "react";
import { filtersStore } from "../../../../store/filters/filters";

export default function FilterRating() {
  const [selectedRating, setSelectedRating] = useState<number | null>(6);
  const setRating = filtersStore(state => state.setRating);

  function handleCheckboxChange(rating: number) {
    if (selectedRating === rating) {
      setSelectedRating(null);
    } else {
      setSelectedRating(rating);
    }
  }

  function ratingStars(rate: number) {
    const normalizedRate = Math.min(Math.max(rate, 1), 5);

    const stars = [];

    for (let i = 0; i < normalizedRate; i++) {
      stars.push(<img key={i} src="/items/rate-full.svg" alt="star_icon" />);
    }

    for (let i = normalizedRate; i < 5; i++) {
      stars.push(<img key={i} src="/items/rate-null.svg" alt="star_icon" />);
    }

    return <div className="flex gap-[3px] items-center">{stars}</div>;
  }

  return (
    <div className="flex flex-col gap-[10px]">
      {[1, 2, 3, 4, 5, 6].map((rating) => (
        <div key={rating} className="flex gap-[10px] items-center">
          <input
            className="w-5 h-5 border-gray-200@ rounded checked:bg-purple@ text-purple@ focus:ring-purple@ cursor-pointer"
            type="checkbox"
            checked={selectedRating === rating}
            onChange={() => {
              setRating(rating);
              handleCheckboxChange(rating);
            }}
          />
          {rating === 6 ? "All" : ratingStars(rating)}
        </div>
      ))}
    </div>
  );
}
