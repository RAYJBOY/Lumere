import { ReviewCard } from "@/components/reviews/ReviewCard";

export default function ReviewsPage() {
  return (
    <>
      <div className="pt-20 px-2 max-w-8xl w-full overflow-x-hidden mb-8">
        <h2 className="text-4xl font-semibold text-center col-span-1 md:col-span-3 mb-8">
          Reviews
        </h2>
        <p className="text-center text-lg max-w-3xl mx-auto">
          See what our customers are saying about their experiences at Lumeré.
          We value your feedback and strive to provide the best service
          possible.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center mb-20">
        {/* Example reviews */}
        <ReviewCard
          reviewer="John Smith"
          rating={4}
          date="2 weeks ago"
          review="Amazing food and atmosphere! The service was impeccable and everything we ordered was delicious. Will definitely be coming back!"
          profileImage="/images/avatar.png"
        />
        <ReviewCard
          reviewer="John Smith"
          rating={4}
          date="2 weeks ago"
          review="Amazing food and atmosphere! The service was impeccable and everything we ordered was delicious. Will definitely be coming back!"
          profileImage="/images/avatar.png"
        />
        <ReviewCard
          reviewer="John Smith"
          rating={4}
          date="2 weeks ago"
          review="Amazing food and atmosphere! The service was impeccable and everything we ordered was delicious. Will definitely be coming back!"
          profileImage="/images/avatar.png"
        />
        <ReviewCard
          reviewer="John Smith"
          rating={4}
          date="2 weeks ago"
          review="Amazing food and atmosphere! The service was impeccable and everything we ordered was delicious. Will definitely be coming back!"
          profileImage="/images/avatar.png"
        />
      </div>
    </>
  );
}
