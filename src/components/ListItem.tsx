"use client";
import React from "react";
import { Button } from "./ui/Button";

type Props = { name: string; file: any };

function ListItem({ name, file }: Props) {
  return (
    <div className="flex flex-row flex-grow justify-space-between items-center">
      <h1 className="pr-4">{name}</h1>
      <Button
        className="text-gray-800 dark:text-slate-200 bg-gray-800 dark:bg-black hover:bg-gray-600 dark:hover:bg-slate-600"
        onClick={() => {
          alert("Chart generated");
        }}
      >
        View
      </Button>
    </div>
  );
}

export default ListItem;
