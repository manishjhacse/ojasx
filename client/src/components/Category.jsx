import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Button } from "@nextui-org/react";

const images = [
  "https://i.pinimg.com/564x/54/68/a3/5468a33bc43e258995f15ad01e5ad7cc.jpg",
  "https://i.pinimg.com/564x/25/0f/d7/250fd7d90bcb46b73ec95dc5cbb116be.jpg",
  "https://i.pinimg.com/564x/d0/fd/68/d0fd686d9f97f4c8ee97e6f722f06ccc.jpg",
  "https://i.pinimg.com/736x/62/57/9d/62579d17f237d42fa501b82908429ddf.jpg",
  "https://i.pinimg.com/564x/c0/18/a7/c018a756774a46cc5f79f94fc0b7156b.jpg",
];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="w-full my-9 flex flex-col items-center font-poppins">
      <h1 className="font-bold text-3xl sm:text-5xl text-white mb-5">
        Categories
      </h1>
      <div className="relative w-fit mb-3 flex items-center justify-center">
        <Button
          onClick={prevSlide}
          className="absolute w-fit left-0  bg-gray-700 bg-opacity-50 z-30 text-white rounded-3xl focus:outline-none"
        >
          <IoIosArrowBack className="text-lg" />
        </Button>
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src={
                images[
                currentIndex === 0 ? images.length - 1 : currentIndex - 1
                ]
              }
              alt="prev"
              className="w-72 h-64 sm:h-[350px] opacity-70 transform transition-transform duration-700  scale-100 rounded-3xl"
            />
          </div>
          <div className="-ml-5 -mr-14 z-20 relative">
            <h1 className="absolute left-1 transform -translate-x-1/2 top-1/2 z-30 -rotate-90 text-white text-4xl font-medium">
              Gaming
            </h1>
            <img
              src={images[currentIndex]}
              alt="main"
              className="  w-[580px] sm:w-96 h-72  sm:h-96 transform transition-transform duration-700 scale-105 -ml-5 -mr-5 z-20 rounded-3xl"
            />
          </div>
          <div className="relative">
            <img
              src={
                images[
                currentIndex === images.length - 1 ? 0 : currentIndex + 1
                ]
              }
              alt="next"
              className="w-72 h-64 sm:h-[350px] opacity-70 transform transition-transform duration-700 scale-100 rounded-3xl"
            />
          </div>
        </div>
        <Button
          onClick={nextSlide}
          className="absolute right-0 p-2 bg-gray-700 bg-opacity-50 z-20 w-fit text-white rounded-full focus:outline-none"
        >
          <IoIosArrowForward className="text-lg" />
        </Button>
      </div>
    </div>
  );
};

export default Category;
