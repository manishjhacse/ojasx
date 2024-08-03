/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "./Cards";
import { Button } from "@nextui-org/react";

const Events = () => {
  return (
    <div className={`bg-gradient-to-r from-slate-900 to-slate-700 relative py-5 px-5  flex justify-center `}>
      <div className=" w-[900px] flex mb-9 flex-wrap gap-4  justify-center">
        {[1, 2, 3, 4, 5].map((event, index) => (
          <Cards key={index} />
        ))}
      </div>

      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg absolute bottom-0 z-20 font-semibold"
      >
        More Events
      </Button>
    </div>
  );
};

export default Events;
