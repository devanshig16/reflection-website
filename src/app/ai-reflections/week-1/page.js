// src/app/ai-reflections/week-1/page.js
"use client";
import { Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function WeekOneReflection() {
  return (
    <div
      className={`${geistMono.variable} font-mono text-white bg-black min-h-screen p-6`}
      style={{
        backgroundImage: 'url("/hub-page.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-3xl text-[#ffce00] mb-4">Week 1 Reflection</h1>

      <p className="mb-6">
        <strong>Key Learning:</strong> This week, I learned about the structure
        of experiential learning and reflected on how AI tools like ChatGPT help
        me brainstorm ideas for journal entries.
      </p>

      <p className="mb-6">
        <strong>Personal Connection:</strong> I often struggle with starting
        creative tasks. Using AI helped me organize my thoughts quickly and
        confidently.
      </p>

      <p className="mb-6">
        <strong>Challenges:</strong> At first, I felt guilty using AI for
        something reflective. But I realized that it supports — not replaces —
        my voice.
      </p>

      <p className="mb-6">
        <strong>🤖 AI Tool Used:</strong> ChatGPT (used for outline & tone
        check)
      </p>
    </div>
  );
}
