import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

type FeaturedTaskerCardProps = {
  name: string;
  rating: number;
  skills?: { name: string; price: string }[];
  image: string;
};

const FeaturedTaskerCard = ({ name, rating, skills = [], image }: FeaturedTaskerCardProps) => {
  const generateRating = () => {
    const numStars = Math.floor(rating);
    const halfStars = rating - numStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - numStars - halfStars;

    const stars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push(<FaStar key={`star-${i}`} className="text-yellow-400 h-4 w-4" />);
    }

    if (halfStars === 1) {
      stars.push(<FaStar key={`star-half`} className="text-yellow-400 h-4 w-4" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`star-empty-${i}`} className="text-gray-300 h-4 w-4" />);
    }

    return <div className="flex justify-center items-center my-2">{stars}</div>;
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-xl overflow-hidden">
      <div className="relative h-96">
        <Image src={image} layout="fill" objectFit="cover" alt={`Photo of ${name}`} />
      </div>

      <div className="px-4 py-2">
        <h5 className="text-xl font-bold mb-2">{name}</h5>
        <div className="flex items-center justify-center mb-2">{generateRating()}</div>
        <hr className="my-6" />
        <div className="text-sm text-gray-500">
          {skills && skills.slice(0, 3).map((skill) => (
            <div key={skill.name} className="mb-2">
              <span className="font-medium">{skill.name}</span> - {skill.price}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedTaskerCard;
