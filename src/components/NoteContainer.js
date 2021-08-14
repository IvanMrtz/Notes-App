import { useEffect } from "react";
import useNote from "../hooks/useNote";
import { useContext } from "react";
import { notesContext } from "./Main";
import Note from "./Note";

export default function NoteContainer() {
  const { notes, setNotes } = useContext(notesContext);
  const { getAll } = useNote();

  useEffect(() => {
    getAll().then(setNotes);
  }, []);

  return <div>
      {notes.length ? notes.map(note => {
          return <Note key = {note.id} {...note}></Note>
      }) : null}
  </div>;
}
