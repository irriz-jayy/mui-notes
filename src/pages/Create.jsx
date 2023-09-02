import {
  Button,
  Container,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details, category);
    }
  };
  return (
    <>
      <Container className="create">
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
            error={titleError}
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
            error={detailsError}
          />
          <FormLabel>
            Note Category
            <RadioGroup
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <FormControlLabel
                control={<Radio />}
                value="todos"
                label="Todos"
              />
              <FormControlLabel
                control={<Radio />}
                value="money"
                label="Money"
              />
              <FormControlLabel
                control={<Radio />}
                value="reminders"
                label="Reminders"
              />
              <FormControlLabel control={<Radio />} value="work" label="Work" />
            </RadioGroup>
          </FormLabel>
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
