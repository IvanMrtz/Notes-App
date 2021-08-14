import { Icon } from "@iconify/react";
import { useState } from "react";
import "../styles/AddNote.css";
import Hover from "./Hover";

export default function AddNote() {
  const [color, setColor] = useState("white");

  return (
    <div className="Container-Add-Note">
      <p>Add new note</p>
      <Hover
        over={() => {
          setColor("cyan");
        }}
        out={() => {
          setColor("white");
        }}
      >
        <Icon color={color} height="100%" icon="carbon:add-alt" />
      </Hover>
    </div>
  );
}
