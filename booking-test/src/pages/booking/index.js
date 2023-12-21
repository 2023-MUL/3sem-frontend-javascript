import useMyContext from "@/context/my-context";
import React from "react";

export default function Booking() {
  const { date } = useMyContext();
  return <div>Booking on Date: {date}</div>;
}
