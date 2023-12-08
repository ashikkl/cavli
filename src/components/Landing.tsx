/* eslint-disable @next/next/no-img-element */
import React from "react";
import FileList from "./FileList";
import Chart from "./Chart";

type Props = {};

export default function Landing({}: Props) {
  return (
    <header className="flex flex-col md:flex-row min-h-[100dvh] pb-16 mt-4 sm:mt-12 w-[95%] ">
      <div className="l-0 w-full md:w-[25vw]">
        <FileList />
      </div>
      <div className="w-full flex flex-col"><Chart/></div>

    </header>
  );
}
