import React, { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date("2024-09-13T23:59:59"); // Set your target date and time here

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTime({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="text-white bg-black h-screen mb-12">
      <div className=" text-center">
        <div className="font-bold uppercase text-xl md:text-2xl lg:text-3xl italic ">
          B.P. Mandal College of Engineering
        </div>
        <div className="italic opacity-85">PRESENTS</div>
      </div>
      <div className="text-center">
        <h1
          className="text-[6rem] md:text-[13rem] lg:text-[25rem] leading-3 py-14  md:py-40 lg:py-52 font-bold bg-gradient-to-r from-blue-400   to-orange-600 bg-clip-text text-transparent "
          id="ojax"
        >
          OJAS'X
        </h1>
        <h1 className="text-[4rem] md:text-[5rem] leading-5 py-10 font-bold bg-gradient-to-r from-blue-400   to-orange-600 italic bg-clip-text text-transparent">
          2024
        </h1>
      </div>
      <div className=" my-10 flex justify-center items-center">
        <div className="border border-neutral-600">
          <div className="md:flex flex-wrap">
            <div className="border-b pb-4 md:border-b-0 md:border-r border-neutral-600">
              <div className="px-3 md:px-6 lg:px-10 pt-5">
                <div className="flex  ">
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-6xl">
                      {time.days}
                    </div>
                    <div className="text-center pt-2 text-sm">DAY</div>
                  </div>
                  <span className="text-3xl md:text-4xl lg:text-6xl  px-1">
                    :
                  </span>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-6xl">
                      {time.hours}
                    </div>
                    <div className="text-center pt-2 text-sm">HOURS</div>
                  </div>
                  <span className="text-3xl md:text-4xl lg:text-6xl px-1">
                    :
                  </span>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-6xl">
                      {time.minutes}
                    </div>
                    <div className="text-center pt-2 text-sm">MINUTES</div>
                  </div>
                  <span className="text-2xl md:text-4xl lg:text-6xl  px-1">
                    :
                  </span>
                  <div className="text-center">
                    <div className="text-2xl md:text-4xl lg:text-6xl">
                      {time.seconds}
                    </div>
                    <div className="text-center pt-2 text-sm">SECONDS</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="p-3 md:p-5">
                <div className="text-xl md:text-3xl lg:text-4xl">
                  2024 September
                </div>
                <div className="flex justify-center pt-2 gap-4">
                  <div>
                    <span className="text-xl md:text-3xl lg:text-4xl">14</span>
                    <span>
                      <sup className="md:text-lg">TH</sup>
                    </span>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <hr className="w-2 " />
                  </div>
                  <div>
                    <span className="text-xl md:text-3xl lg:text-4xl">20</span>
                    <sup className="md:text-lg ">TH</sup>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
