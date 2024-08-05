/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { BsFillHandbagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { toast } from "react-hot-toast";
import { IoBagCheckOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteSweep } from "react-icons/md";
export default function App({ event, fromCart }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const [addedToCart, setAddedToCart] = useState(false);
  useState(() => {
    if (cart.some((cartEvent) => cartEvent._id === event._id)) {
      setAddedToCart(true)
    }
  }, [])
  function handleRemoveFromCart() {
    dispatch(removeFromCart(event))
    toast.success("Event Removed from Cart")
  }
  function handleAddToCart() {
    if (cart.some((cartEvent) => cartEvent._id === event._id)) {
      toast.success("Already Present in Cart")
      navigate('/mycart')
      return;
    }
    dispatch(addToCart(event));
    toast.success("Event Added to Cart")
    setAddedToCart(true)
  }

  return (
    <div className="max-w-[900px] h-fit px-3 cursor-pointer">
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
        <CardFooter className="justify-between bg-black font-poppins  bg-opacity-50 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl  bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-small text-white font-semibold">{event.event_name}</p>
          <div className="z-40"> {
            fromCart ? <Button
              onClick={handleRemoveFromCart}
              className="text-tiny text-white hover:bg-opacity-80 bg-black opacity-65"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              <MdDeleteSweep className=" text-white sm:w-5 sm:h-5 w-5 h-5" />
            </Button> : <Button
              onClick={handleAddToCart}
              className="text-tiny text-white hover:bg-opacity-80 bg-black opacity-65"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              {addedToCart ? <IoBagCheckOutline className=" text-white sm:w-5 sm:h-5 w-5 h-5" /> : <BsFillHandbagFill className=" text-white sm:w-5 sm:h-5 w-5 h-5" />}
            </Button>
          }</div>



        </CardFooter>
      </Card>
    </div>
  );
}
