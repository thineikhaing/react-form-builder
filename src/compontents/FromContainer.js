import React, { useState, useCallback } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FieldsBasket } from "./FieldsBasket";
import { Box } from "./Box";
export const FromContainer = ({ DropEnd }) => {
  const modalobj =  { open: false, title: "" };
  const [modalData, setNodalData] = useState(modalobj);
  const { open, title = "" } = modalData;
  //close the modal
  const handleClose = () => setNodalData((q) => ({ ...q, open: false }));
  // update the the drop field value into state
  const updateDataOnDragend = (item) =>
    setNodalData((q) => ({ ...q, open: true, ...item }));
  // add button click
  const handleAdd = useCallback(() => {
    DropEnd(modalData);
    setNodalData(modalobj);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalData]);
  return (
    <>
      <div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Box name="Text" show={updateDataOnDragend} />
          <Box name="Multi Line"  show={updateDataOnDragend}/>
          <Box name="Checkbox"  show={updateDataOnDragend}/>
          <Box name="Dropdown"  show={updateDataOnDragend}/>
          <Box name="Radio Button"  show={updateDataOnDragend}/>
          <Box name="DatePicker" show={updateDataOnDragend} />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <FieldsBasket DropEnd={updateDataOnDragend} />
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
            value={title||""}
            variant="standard"
            onChange={({ target: { value = "" } = {} }) =>
              setNodalData((q) => ({ ...q, title: value }))
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default FromContainer;
