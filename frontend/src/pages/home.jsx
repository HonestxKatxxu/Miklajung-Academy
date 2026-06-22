import Layout from "../components/layout";
import { useEffect, useState } from "react";

export default function Home() {
    const sideImages = ["/home.jpg", "/1.jpg","/2.jpg","/3.jpg","/4.jpg", "/5.jpg","/6.jpg","/7.jpg","/8.jpg", "/9.jpg","/10.jpg"];

const [current, setCurrent] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % sideImages.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);
  return (
    <div className="w-full">

      {/* HERO SECTION */}
<section className="relative">

  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('/bvvv.jpg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 flex flex-col md:flex-row items-center gap-10 text-white">

    {/* TEXT */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Build a Strong Future with <br />
        Miklajung Academy
      </h1>

      <p className="mt-4 text-gray-200 text-base sm:text-lg">
        Quality education from Nursery to Class 8 with modern learning methods
        and practical teaching.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Explore Classes
        </button>

      
      </div>
    </div>

    {/* IMAGE SIDE (optional - you can remove if you want full background feel) */}
   {/* IMAGE SIDE SLIDER */}
<div className="flex-1 hidden md:block">

  <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">

    {sideImages.map((img, index) => (
      <img
        key={index}
        src={img}
        alt="slide"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          index === current ? "opacity-100" : "opacity-0"
        }`}
      />
    ))}

  </div>

</div>

  </div>
</section>

      {/* FEATURES */}
      <section className="py-14 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-6 md:grid-cols-3">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-bold">Modern Teaching</h3>
            <p className="text-gray-600 mt-2">
              Easy learning with practical examples and clear explanation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-bold">From Basics to Growth</h3>
            <p className="text-gray-600 mt-2">
              Structured learning from Nursery to Class 8.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <h3 className="text-xl font-bold">Student Focused</h3>
            <p className="text-gray-600 mt-2">
              Individual attention and better understanding.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-16 sm:py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-10">

    <img
      src="./acc.jpg"
      className="rounded-xl w-full md:w-1/2 shadow"
    />

    <div className="flex-1 text-center md:text-left">

      <h2 className="text-2xl sm:text-3xl font-bold">
        About Our Academy
      </h2>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Miklajung Academy is dedicated to providing high-quality education from Nursery to Class 8.
        We believe in building strong foundations in students through discipline, creativity, and practical learning.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        Our teaching approach focuses on understanding rather than memorization.
        Students are encouraged to think, explore, and develop problem-solving skills.
      </p>

      <p className="mt-4 text-gray-600 leading-relaxed">
        We aim to create a supportive environment where every student can grow academically,
        socially, and personally with confidence.
      </p>

      <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        Learn More
      </button>

    </div>

  </div>
</section>

      
    </div>
  );
}