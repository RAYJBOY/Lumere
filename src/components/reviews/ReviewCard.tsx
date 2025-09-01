import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewCardProps {
  reviewer: string;
  rating: number;
  date: string;
  review: string;
  profileImage?: string;
}

export const ReviewCard = ({
  reviewer,
  rating,
  date,
  review,
  profileImage,
}: ReviewCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full mx-auto hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        {/* Profile Image or Default Initial */}
        <div className="relative w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
          {profileImage ? (
            <Image
              src={profileImage}
              alt={reviewer}
              fill
              className="object-cover"
              sizes="48px"
            />
          ) : (
            <span className="text-xl font-semibold text-gray-600">
              {reviewer[0]}
            </span>
          )}
        </div>

        {/* Reviewer Info */}
        <div>
          <h3 className="font-semibold text-gray-800">{reviewer}</h3>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-base italic">{review}</p>
    </div>
  );
};
