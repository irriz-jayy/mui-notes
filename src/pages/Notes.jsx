import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const Notes = () => {
  return (
    <>
      <div>Notes</div>
      <Button variant="contained" color="success" endIcon={<SendIcon />}>
        Send
      </Button>
    </>
  );
};

export default Notes;
