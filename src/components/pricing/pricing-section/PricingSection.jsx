import { Star, StarHalf } from "lucide-react";

export default function PricingSection() {
  return (
    <div className="relative px-4 py-16 sm:px-6 lg:px-8">
      {/* Curved background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-blue-50 rounded-b-[100px]" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Pricing
        </h1>

        {/* Rating section */}
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-xl font-semibold text-blue-600">4.6</span>
          <div className="flex gap-1">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <StarHalf className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </div>
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 font-medium ml-2"
          >
            See our Google reviews
          </a>
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
          Wondering which of our career guidance plans is perfect for you, or
          how much they cost? Take a look!
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Mentoria&apos;s Plans
          </button>
          <button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
          >
            Customise Your Mentorship Plan
          </button>
        </div>
      </div>
    </div>
  );
}
