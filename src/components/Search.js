import { Icon } from "@iconify/react";
import { useState } from "react";
import "../styles/Search.css";

export default function Search() {
  const [search, setSearch] = useState("");

  return (
    <div className="Search">
      <Icon icon="akar-icons:search" />
      <input placeholder="Search..." value={search} onChange={(ev) => {
          setSearch(ev.target.value);
      }} type="text" />
    </div>
  );
}
