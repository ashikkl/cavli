/* eslint-disable @next/next/no-img-element */
import React from "react";
import FileList from "./FileList";
import Chart from "./Chart";
import { Button } from "./ui/Button";
import sensor_data from "../../public/data/sensor_data.json";

type Props = {};

export default function Landing({}: Props) {
  return (
    <header className="flex flex-col md:flex-row min-h-[100dvh] pb-16 mt-4 sm:mt-12 w-[80%] md:w-[95%]  ">
      <Button className="flex md:hidden pb-4 md:pb-0 items-center text-gray-800 dark:text-slate-200 bg-gray-800 dark:bg-black hover:bg-gray-600 dark:hover:bg-slate-600">
        Upload
      </Button>

      <div className="l-0 w-full md:w-[25vw]">
        <FileList />
      </div>
      <div className="w-full flex flex-col">
        <span className="w-full justify-end hidden md:flex">
          <Button className="text-gray-800 dark:text-slate-200 bg-gray-800 dark:bg-black hover:bg-gray-600 dark:hover:bg-slate-600">
            Upload
          </Button>
        </span>
        <Chart
          data={[
            {
              id: sensor_data.data[0].tid,
              data: [
                {
                  x: sensor_data.data[0].timestamps,
                  y: sensor_data.data[0].values,
                },
              ],
            },
          ]}
        />
      </div>
    </header>
  );
}
