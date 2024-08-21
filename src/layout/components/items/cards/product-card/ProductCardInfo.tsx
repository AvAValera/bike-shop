

interface Props {
  codeItem: number,
  rating: number
}

export default function ProductCardInfo({codeItem, rating}: Props) {
  return (
    <div className="flex items-center justify-between mb-[10px]">
      <span className="text-sm text-gray-400@ ">SKY: {codeItem}</span>
      <div className="flex items-center gap-[6px]">
        {
          ratingStars(rating)
        }
        <span className="text-sm leading-5">{rating}.0</span>
      </div>
    </div>
  );
}

function ratingStars (rate: number) {
  const normalizedRate = Math.min(Math.max(rate, 1), 5);

  const stars = [];

  for (let i = 0; i < normalizedRate; i++) {
    stars.push(<img key={i} src="/items/rate-full.svg" alt="star_icon" />);
  }

  for (let i = normalizedRate; i < 5; i++) {
    stars.push(<img key={i} src="/items/rate-null.svg" alt="star_icon" />);
  }

  return (
    <div className="flex gap-[3px] items-center">
      {stars}
    </div>
  );
}
