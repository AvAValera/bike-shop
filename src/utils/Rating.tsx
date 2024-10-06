
interface Props {
  rate: number
}

export default function Rating({rate}: Props) {
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
