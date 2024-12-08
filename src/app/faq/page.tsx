"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqData = [
  {
    question: "How do we serve food?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How is our food quality?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do we give home delivery?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black">
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
              FAQ Page
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">
                Home
              </p>
              <div className="flex items-center">
                <Image
                  src="/Vector.png"
                  width={20} // Correct dimensions for the icon
                  height={20}
                  alt="Vector Icon"
                />
                <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                  faq
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <main className="max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8">
            Questions Looks Here
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="text-2xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-sm text-gray-600 mt-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FAQPage;
