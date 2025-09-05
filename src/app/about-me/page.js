"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutMe() {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const description = [
    "Name: Devanshi Gupta",
    "Role: Computer Science",
    "some skill",
    "more skill",
    "skill skill skill",
  ];

  // Typewriter effect
  useEffect(() => {
    let line = 0;
    let char = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (line < description.length) {
        if (char < description[line].length) {
          currentText += description[line][char];
          setDisplayedText(currentText);
          char++;
        } else {
          currentText += "\n";
          setDisplayedText(currentText);
          line++;
          char = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" min-h-screen w-full bg-[#d9d7d4] text-black font-mono">
      {/* Top header area */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-start px-0 py-2">
        {/* Image box */}
        <div className="flex justify-start items-start -mt-20 -ml-10">
          <Image
            src="/meettheplayer.png"
            alt="Meet the Player"
            width={700}
            height={700}
            className="h-auto"
          />
        </div>

        {/* Home button aligned top-right */}
        <div className="ml-auto">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-[#5b97f7] text-white font-bold rounded-lg shadow-md hover:bg-[#161a22] transition"
          >
            Home
          </button>
        </div>
      </div>


      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start px-5 py-10 space-y-10 lg:space-y-0 lg:space-x-10">
        {/* Video */}
        <div className="w-full max-w-xs lg:-mt-25  ">
          <video
            src="/aboutme.mp4"
            autoPlay
            muted
            playsInline
           
            className="w-full h-auto rounded-lg "
          />
        </div>

        {/* Description box */}
        <div className="w-full max-w-lg bg-white/80 border-4 border-gray-800 rounded-xl p-6 shadow-lg text-lg whitespace-pre-line leading-relaxed -ml-10 mt-10">
          {displayedText || "> Loading profile..."}
        </div>
      </div>

      
      <div className='flex justify-start items-start -mt-50 ml-240'>
      <Image
        src="/terrain.png"
        alt="Terrain"
        width={200}
        height={200}
        className="h-auto w-auto max-w-full"
        priority
      />
    </div>

    

    <div className='flex justify-start items-start -mt-80 ml-290'>
      <Image
        src="/terrain.png"
        alt="Terrain"
        width={200}
        height={200}
        className="h-auto w-auto max-w-full"
        priority
      />
    </div>

    <div className='flex justify-start items-start -mt-80 ml-240'>
      <Image
        src="/terrain.png"
        alt="Terrain"
        width={200}
        height={200}
        className="h-auto w-auto max-w-full"
        priority
      />
    </div>

    </div>
  );
}

/*"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutMe() {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const description = [
    "Name: Devanshi Gupta",
    "Role: Computer Science",
    "some skill",
    "more skill",
    "skill skill skill",
  ];

  // Typewriter effect
  useEffect(() => {
    let line = 0;
    let char = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (line < description.length) {
        if (char < description[line].length) {
          currentText += description[line][char];
          setDisplayedText(currentText);
          char++;
        } else {
          currentText += "\n";
          setDisplayedText(currentText);
          line++;
          char = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#d9d7d4] text-black font-mono">

      <div className="w-full flex justify-between items-center px-5 py-4">
        <Image
          src="/meettheplayer.png"
          alt="Meet the Player"
          width={600}
          height={600}
          className="h-auto"
        />

        <button
          onClick={() => router.push("/hub")}
          className="px-6 py-3 bg-[#5b97f7] text-white font-bold rounded-lg shadow-md hover:bg-[#161a22] transition"
        >
          Home
        </button>
      </div>

      
      <div className="flex flex-col lg:flex-row items-start px-5 py-10 space-y-10 lg:space-y-0 lg:space-x-10">

        <div className="w-full max-w-xs lg:mt-10">
          <video
            src="/aboutme.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>


        <div className="w-full max-w-xl bg-white/80 border-4 border-gray-800 rounded-xl p-6 shadow-lg text-lg whitespace-pre-line leading-relaxed">
          {displayedText || "> Loading profile..."}
        </div>
      </div>


      <div className="px-5 py-10">
        <h2 className="text-2xl font-bold mb-4">More Coming Soon!</h2>
        <p className="text-lg">
          You can add more sections here and the page will scroll smoothly. 😊
          
        </p>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AboutMe() {
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");
  const description = [
    "Name: Devanshi Gupta",
    "Role: Computer Science",
    "some skill",
    "more skill",
    "skill skill skill",
  ];

  // Typewriter effect
  useEffect(() => {
    let line = 0;
    let char = 0;
    let currentText = "";

    const interval = setInterval(() => {
      if (line < description.length) {
        if (char < description[line].length) {
          currentText += description[line][char];
          setDisplayedText(currentText);
          char++;
        } else {
          currentText += "\n";
          setDisplayedText(currentText);
          line++;
          char = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row items-start min-h-screen px-5 py-10 font-mono bg-[#d9d7d4] text-black">
      
      <Image
        src="/vine.png"
        alt="Tree Branch"
        width={550}        
        height={500}         
        className="absolute -top-25 right-2 h-auto"
      />
      <Image
        src="/meettheplayer.png"
        alt="Meet the Player"
        width={900}        
        height={900}         
        className="absolute -top-25 left-2 h-auto"
      />

      <button
        onClick={() => router.push("/hub")}
        className="absolute top-4 right-4 px-6 py-3 bg-[#5b97f7] text-white font-bold rounded-lg shadow-md hover:bg-[#161a22] transition"
      >
        Home
      </button>

      <div className="w-80 flex-shrink-0 mr-6 mt-60">
        <video
          src="/aboutme.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-auto rounded-lg"
        />
      </div>

      <div className="mt-40 lg:mt-60 lg:ml-20 ml-4 max-w-xl w-full bg-white/80 border-4 border-gray-800 rounded-xl p-6 shadow-lg text-lg whitespace-pre-line leading-relaxed">
    {displayedText || "> Loading profile..."}
  </div>
    </div>
  );
}


"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function AboutMe() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen px-5 font-mono bg-[#d9d7d4] relative">
      
      <Image
        src="/meettheplayer.png"
        alt="Meet the Player"
        width={900}          // px
        height={900}         // or whatever aspect ratio you want
        className="absolute -top-25 left-2 h-auto"
      />

      <button
        onClick={() => router.push("/hub")}
        className="absolute top-4 right-4 px-6 py-3 bg-[#ffce00] text-black font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
      >
        Home
      </button>

     
      <div className="w-80 flex-shrink-0 mr-6 mt-60">
        <video
          src="/aboutme.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
*/