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
    <div className={`bg-black  font-poppins relative py-5 px-2 sm:px-5 mb-20  flex justify-center `}>
      <h1 className=" absolute top-2 z-10 font-bold text-5xl  text-white ">Events</h1>
      <div className=" w-[900px] flex mb-9 mt-16 flex-wrap gap-4  justify-center">
        {eventsToShow.length>0?
        eventsToShow.slice(0, 5)?.map((event) => (
          <Cards key={event._id} event={event} fromCart={false} />
        )):[0,1,2,3,4].map((index)=>{
          return  <div key={index} className="col-span-12 sm:col-span-4 h-[300px] w-[260px] bg-gray-200 rounded-lg animate-pulse">
          <div className="h-3/4 bg-gray-300 rounded-t-lg"></div>
          <div className="flex justify-between items-center p-2 bg-gray-200 rounded-b-lg">
            <div className="flex flex-col">
              <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
              <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
            </div>
            <div className="h-8 w-20 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
        })}
      </div>

      <Button color="primary" variant="shadow"
        radius="full"
        className="w-fit absolute bottom-0 z-20 font-semibold focus:outline-none"
      >
        More Events
      </Button>
    </div>
  );
};

export default Events;
