import React, { useEffect, useState } from "react";
import useMyContext from "@/context/my-context";
import Link from "next/link";
import { DatePicker } from "@mantine/dates";

export default function dato() {
  const contextValue = useMyContext();

  const [value, setValue] = useState(null);

  useEffect(() => {
    if (!value) return;
    console.log(value);
  }, [value]);

  function handleChange(event) {
    contextValue.setDate(event.target.value);
  }

  return (
    <div>
      <p>Vælg dato for booking</p>
      <div>
        <DatePicker value={value} onChange={setValue} />;
        <input type="date" value={contextValue.date} onChange={handleChange} />
      </div>
      <Link href="/booking/">
        <button>to booking page</button>
      </Link>
    </div>
  );
}
