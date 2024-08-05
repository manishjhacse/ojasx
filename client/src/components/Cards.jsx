/* eslint-disable no-unused-vars */
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { BsFillHandbagFill } from "react-icons/bs";

export default function App({event}) {
  return (
    <div className="max-w-[900px] h-fit px-3 ">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        {/* <CardHeader className="absolute z-20 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            What to watch
          </p>
          <h4 className="text-black font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader> */}
        <Image
          isZoomed
          width={240}
          alt=""
          src={event.poster}
        />
        <CardFooter className="justify-between bg-black bg-opacity-50 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-small text-white font-semibold">{event.event_name}</p>
          <Button
            className="text-tiny text-white hover:bg-opacity-80 bg-black opacity-65"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            <BsFillHandbagFill className=" text-white sm:w-5 sm:h-5 w-5 h-5"/>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
