"use client";

import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/img1.png" },
  { name: "Jorina Begum", role: "Chef", image: "/img2.png" },
  { name: "M. Mohammad", role: "Chef", image: "/img3.png" },
  { name: "Munna Kathy", role: "Chef", image: "/img4.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/img5.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/img6.png" },
  { name: "Motin Molladst", role: "Chef", image: "/img7.png" },
  { name: "William Rumi", role: "Chef", image: "/img8.png" },
  { name: "Kets William Roy", role: "Chef", image: "/img9.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/img10.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/img11.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/img12.png" },
];

const ChefGrid = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Background Section */}
      <div
        className="w-full bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/unsplash.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "300px",
        }}
      >
        {/* Header Section */}
        <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            Our Chef
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
            <div className="flex items-center">
              <Image
                src="/Vector.png" // Ensure the image is located in the public folder
                width={20} // Adjust width and height as necessary
                height={20}
                alt="Vector Icon"
              />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                chef
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 mt-20 bg-white">
        {/* Grid with responsive columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
                index === 6
                  ? "border-4 border-purple-600" // Complete purple border for the 7th box
                  : "border-4 border-transparent hover:border-purple-600" // Hover effect for other boxes
              }`}
            >
              {/* Chef Image */}
              <div className="flex-1">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
              </div>

              {/* Static Information Section Below Image */}
              <div className="p-4 text-center">
                <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
                <p className="text-gray-600">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefGrid;
