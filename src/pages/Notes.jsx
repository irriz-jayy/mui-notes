import { Container, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { Masonry } from "@mui/lab";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:8000/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch(" http://localhost:8000/notes/" + id, {
      method: "DELETE",
    });

    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <>
      <Container>
        <Masonry columns={4} spacing={2}>
          {notes.map((note) => (
            <Paper key={note.id}>
              <NoteCard note={note} handleDelete={handleDelete} />
            </Paper>
          ))}
        </Masonry>
      </Container>
    </>
  );
};

export default Notes;
