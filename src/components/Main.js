import Search from "./Search";
import NoteContainer from "./NoteContainer";
import React, { useState, useMemo } from "react";
import AddNote from "./AddNote";
import ActionsBar from "./ActionsBar";

const notesContext = React.createContext();
export { notesContext };

export default function Main() {
  const [notes, setNotes] = useState([]);
  const provideNotes = useMemo(() => ({ notes, setNotes }), [notes]);

  return (
    <notesContext.Provider value={provideNotes}>
      <Search />

      <ActionsBar>
        <AddNote />
      </ActionsBar>

      <NoteContainer />
    </notesContext.Provider>
  );
}
