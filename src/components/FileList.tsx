import React from "react";
import ListItem from "./ListItem";

type Props = {};

function FileList({}: Props) {
  return (
    <div className="w-full">
      <h2 className="font-bold leading-loose pb-2">Files</h2>
      <ListItem name={"sensor_data"} file={""}/>
    </div>
  );
}

export default FileList;
