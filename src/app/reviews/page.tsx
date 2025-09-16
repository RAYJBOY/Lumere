"use client";

import { useEffect } from "react";
import { FadeInSection } from "@/components/shared/FadeInSection";

export default function ReviewsPage() {
  useEffect(() => {
    // Clear any old widget content
    const container = document.getElementById("reviews-widget-484");
    if (container) container.innerHTML = "";

    // Inject script
    const script = document.createElement("script");
    script.src =
      "https://app.reviewconnect.me/embed/TsxAWfipm3bU0phR2xgk2ibstwCX3gda/widget.js";
    script.async = true;
    container?.appendChild(script);
  }, []);

  return (
    <div className="w-[95%] mx-auto">
      <div className="pt-20 px-2 max-w-8xl w-full overflow-x-hidden mb-12 md:mb-24">
        <h2 className="text-4xl font-semibold text-center mb-8">Reviews</h2>
        <p className="text-center text-lg max-w-3xl mx-auto">
          See what our customers are saying about their experiences at Lumeré.
          We value your feedback and strive to provide the best service
          possible.
        </p>
      </div>

      <FadeInSection>
        <div id="reviews-widget-484"></div>
      </FadeInSection>
    </div>
  );
}
