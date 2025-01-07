import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#060440]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-[#8B8DFF] text-sm md:text-base">
              TRUSTED BY 2,20,000+ USERS
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Mentoria Solution for College Graduates
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Discover yourself and your ideal careers. Find out which electives
              to choose, when to pursue your master's degree and what job roles
              to apply for.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#4850FF] hover:bg-[#3A41FF] text-white rounded-full px-8"
              >
                BEGIN TEST
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-[#FF1654] hover:bg-[#E61449] text-white border-none rounded-full px-8 flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                PLAY VIDEO
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/placeholder.svg"
                alt="Student using laptop"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              {/* Floating Tags */}
              <div className="absolute right-4 top-4 space-y-3">
                <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full">
                  <span className="text-[#FF1654] font-medium">Cricketer</span>
                </div>
                <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full">
                  <span className="text-[#FF1654] font-medium">
                    Radiologist
                  </span>
                </div>
                <div className="bg-white/90 backdrop-blur px-6 py-2 rounded-full">
                  <span className="text-[#FF1654] font-medium">
                    UX Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <div className="fixed bottom-8 right-8">
        <Button className="bg-[#6B70FF] hover:bg-[#5156FF] text-white rounded-full px-6">
          Questions? Ask here :)
        </Button>
      </div>
    </div>
  );
}
