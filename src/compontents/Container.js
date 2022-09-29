import React, { useState, useContext, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Dustbin } from "./Dustbin";
import { Box } from "./Box";
import { GlobalContext } from "../context/GlobalState";
import { useParams } from "react-router-dom";

export const Container = () => {
  const [open, setOpen] = useState(false);
  const { forms } = useContext(GlobalContext);
  console.log(forms);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Box name="Text" show={handleClickOpen} />
          <Box name="Multi Line" show={handleClickOpen} />
          <Box name="Checkbox" show={handleClickOpen} />
          <Box name="Dropdown" show={handleClickOpen} />
          <Box name="Radio Button" show={handleClickOpen} />
          <Box name="DatePicker" show={handleClickOpen} />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Dustbin />
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Field</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Field Label"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
