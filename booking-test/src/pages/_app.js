import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { MyContext } from "@/context/my-context";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [date, setDate] = useState("2023-12-04");

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  const contextValue = {
    date,
    setDate,
  };

  return (
    <MyContext.Provider value={contextValue}>
      <MantineProvider theme={theme}>
        <DefaultLayout>
          <h1>Layout Title</h1>
          <p>Description</p>
          <Component {...pageProps} />
        </DefaultLayout>
      </MantineProvider>
    </MyContext.Provider>
  );
}
