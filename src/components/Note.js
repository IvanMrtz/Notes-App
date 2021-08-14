import { useState } from "react";
import { Icon } from "@iconify/react";
import "../styles/Note.css";
import Hover from "./Hover";

export default function Note(props) {
  const [color, setColor] = useState("grey");
  const { title, description, likes } = props;

  return (
    <div className="Note">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="Note-Likes">
        <Hover
          out={() => {
            setColor("grey");
          }}
          over={() => {
            setColor("red");
          }}
        >
          <Icon color={color} icon="ant-design:heart-filled" />
        </Hover>
        <p>{likes}</p>
      </div>
    </div>
  );
}
