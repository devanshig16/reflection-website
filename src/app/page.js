// src/app/page.js
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* ✅ Background Image */}
      <Image
        src="/welcome-page.png"
        alt="Background"
        fill
        priority
        className="object-cover "
      />

      {/* ✅ Welcome Text as Separate Image */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2 w-[80vw] max-w-[500px] z-10">
        <Image
          src="/welcome-text.png"
          alt="Welcome"
          width={500}
          height={150}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* ✅ Play Button */}
      <div
        className="absolute left-1/2 top-[60%] -translate-x-1/2 cursor-pointer z-10"
        onClick={() => router.push("/hub")}
      >
        <Image
          src="/play-button.png"
          alt="Play Button"
          width={300}
          height={70}
          className="w-[70vw] max-w-[350px] h-auto"
          priority
        />
      </div>
    </div>
  );
}
