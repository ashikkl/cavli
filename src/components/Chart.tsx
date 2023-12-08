"use client";
import React from "react";
import { ResponsiveLine } from "@nivo/line";

export default function Chart({
  data,
}: {
  data: Array<{
    id: string | number;
    data: Array<{
      x: number | string | Date;
      y: number | string | Date;
    }>;
  }>;
}) {

  return (
    <div className="w-full h-screen text-black dark:text-gray-700">
      <ResponsiveLine
        animate
        axisBottom={{
          format: ".%L",
          legend: "time scale",
          legendOffset: -12,
          tickValues: "every 10 milliseconds",
        }}
        axisLeft={{
          legend: "linear scale",
          legendOffset: 12,
        }}
        curve="monotoneX"
        data={[
          {
            data: [
              {
                x: "2018-01-01 12:00:01.100",
                y: 7,
              },
              {
                x: "2018-01-01 12:00:01.110",
                y: 5,
              },
              {
                x: "2018-01-01 12:00:01.120",
                y: 11,
              },
              {
                x: "2018-01-01 12:00:01.130",
                y: 9,
              },
              {
                x: "2018-01-01 12:00:01.140",
                y: 12,
              },
              {
                x: "2018-01-01 12:00:01.150",
                y: 16,
              },
              {
                x: "2018-01-01 12:00:01.160",
                y: 13,
              },
              {
                x: "2018-01-01 12:00:01.170",
                y: 13,
              },
            ],
            id: "signal A",
          },
          {
            data: [
              {
                x: "2018-01-01 12:00:01.100",
                y: 14,
              },
              {
                x: "2018-01-01 12:00:01.110",
                y: 14,
              },
              {
                x: "2018-01-01 12:00:01.120",
                y: 15,
              },
              {
                x: "2018-01-01 12:00:01.130",
                y: 11,
              },
              {
                x: "2018-01-01 12:00:01.140",
                y: 10,
              },
              {
                x: "2018-01-01 12:00:01.150",
                y: 12,
              },
              {
                x: "2018-01-01 12:00:01.160",
                y: 9,
              },
              {
                x: "2018-01-01 12:00:01.170",
                y: 7,
              },
            ],
            id: "signal B",
          },
        ]}
        enablePointLabel
        margin={{
          bottom: 60,
          left: 80,
          right: 20,
          top: 20,
        }}
        pointBorderColor={{
          from: "color",
          modifiers: [["darker", 0.3]],
        }}
        pointBorderWidth={1}
        pointSize={16}
        useMesh
        enablePoints={false}
        xFormat="time:%Y-%m-%d %H:%M:%S.%L"
        xScale={{
          format: "%Y-%m-%d %H:%M:%S.%L",
          precision: "millisecond",
          type: "time",
          useUTC: false,
        }}
        yScale={{
          type: "linear",
        }}
      />
    </div>
  );
}
