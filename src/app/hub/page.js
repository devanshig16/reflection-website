"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* ✅ Background Image */}
      <Image
        src="/hub-page.png"
        alt="Background"
        fill
        priority
        className="object-cover "
      />

      <div className="absolute left-1/2 top-[5%] -translate-x-1/2 w-[80vw] max-w-[500px] z-10">
        <Image
          src="/destination-hub.png"
          alt="Welcome"
          width={500}
          height={150}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 flex space-x-8 z-10">
        {/* About Me Button */}
        <button
            onClick={() => router.push("/about-me")}
            className="font-mono text-lg tracking-wider px-8 py-3 rounded-xl border-2 shadow-lg
                    bg-[#ffce00] text-black border-[#ffce00]
                    hover:bg-black hover:text-[#ffce00] hover:border-[#ffce00]
                    transition-transform duration-300 ease-in-out hover:scale-105"
        >
            About Me
        </button>

        {/* Reflections Button */}
        <button
            onClick={() => router.push("/ai-reflections")}
            className="font-mono text-lg tracking-wider px-8 py-3 rounded-xl border-2 shadow-lg
                    bg-[#ffce00] text-black border-[#ffce00]
                    hover:bg-black hover:text-[#ffce00] hover:border-[#ffce00]
                    transition-transform duration-300 ease-in-out hover:scale-105"
        >
            Reflections
        </button>
        </div>

    </div>
  );
}
