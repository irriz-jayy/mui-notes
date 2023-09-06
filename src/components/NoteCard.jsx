import { DeleteOutline } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const NoteCard = ({ note, handleDelete }) => {
  const getAvatarBackgroundColor = (category) => {
    switch (category) {
      case "work":
        return "#FFC107";
      case "money":
        return "#4CAF50";
      case "todos":
        return "#E91E63";
      default:
        return "#2196F3";
    }
  };
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar
              style={{
                backgroundColor: getAvatarBackgroundColor(note.category),
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutline />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary2">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
