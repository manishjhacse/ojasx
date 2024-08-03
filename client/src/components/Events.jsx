/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Cards from "./Cards";
import { Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Events = () => {
  const events = useSelector((state) => state.events);
  const [eventsToShow, setEventsToShow] = useState([]);
  useEffect(() => {
    setEventsToShow(events);
  }, [events]);
  return (
    <div
      className={`bg-gradient-to-r from-slate-900 to-slate-700 relative py-5 px-5  flex justify-center `}
    >
      <div className=" w-[900px] flex mb-9 flex-wrap gap-4  justify-center">
        {eventsToShow.slice(0,5)?.map((event) => (
          <Cards key={event._id} event={event} />
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
