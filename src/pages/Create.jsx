import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && details) {
      console.log(title, details);
    }
  };
  return (
    <>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          gutterBottom
          color="textSecondary"
        >
          Create a new note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            label="Note Title"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            label="Note Details"
            variant="outlined"
            fullWidth
            required
            multiline
            rows="4"
            margin="normal"
          />

          <Button
            type="submit"
            variant="contained"
            color="secondary"
            endIcon={<SendOutlinedIcon />}
            onClick={() => console.log("You clicked me")}
          >
            Submit
          </Button>
        </form>

        <br />
      </Container>
    </>
  );
};

export default Create;
