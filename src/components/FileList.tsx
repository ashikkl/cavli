import React from "react";
import ListItem from "./ListItem";
import sensor_data from "../../public/data/sensor_data.json";
type Props = {};

function FileList({}: Props) {
    const file= sensor_data
  return (
    <div className="w-full">
      <h2 className="font-bold leading-loose pb-2">Files</h2>
      <ListItem name={"sensor_data"} file={file}/>
    </div>
  );
}

export default FileList;
