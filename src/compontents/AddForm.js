import React, { useState, useContext, useCallback } from "react";
import FromContainer from "./FromContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { makeStyles } from "@mui/styles";
import { List, ListItem, ListItemText, Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  listRoot: {
    width: "100%",
    justify: "center",
    "& .MuiListItem-root": {
      "&:hover": {
        color: "orange",
      },
      "&.MuiListItem-divider": {
        border: "2px solid rgba(0,0,0,0.1)",
        marginBottom: "10px",
        padding: "20px",
      },
    },
  },
  subheader: {
    backgroundColor: "rgba(0,0,0,0.1)",
    fontSize: 5,
    "&.MuiListSubheader-inset": { marginBottom: 12 }, //no space
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "1rem",
    },
  },
  listItemSpanText: {
    fontSize: "0.8rem",
  },
}));

export const AddForm = () => {
  const classes = useStyles();
  const { addForm } = useContext(GlobalContext);
  const [selectedForm, setSelectedForm] = useState(null);
  let history = useHistory();

  const updateValue = (obj) => setSelectedForm((q) => ({ ...q, ...obj }));
  const DropEnd = useCallback(
    (item) => {
      let getFields = selectedForm?.fields || [];
      getFields = [...getFields, item];
      setSelectedForm((q) => ({ ...q, fields: getFields }));
    },
    [selectedForm?.fields]
  );
  const saveForm = useCallback(() => {
    if (selectedForm?.name == null) {
      alert("Please enter a form name");
      return;
    }
    const id = Math.floor(Math.random() * 90000) + 10000;
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    const obj = { id, createdate: formattedDate, ...selectedForm };
    addForm(obj);
    history.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedForm]);
  return (
    <>
      <Card>
        <Typography align="center">
          <CardContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Form Name"
              type="text"
              variant="standard"
              required
              onChange={({ target: { value = "" } = {} }) =>
                updateValue({ name: value })
              }
              value={selectedForm?.name || ""}
            />
          </CardContent>
        </Typography>
        <Typography align="center">
          <CardContent>
            <DndProvider backend={HTML5Backend}>
              <FromContainer DropEnd={DropEnd} />
            </DndProvider>
          </CardContent>
        </Typography>
      </Card>
      <Card>
        <CardContent>
          <Box sx={{ justifyContent: "center", width: "50%" }}>
            <List className={classes.listRoot}>
              {selectedForm?.fields?.map((item, index) => {
                const labelId = `checkbox-list-label-${item.id}`;
                return (
                  <ListItem key={index} dense button divider>
                    <ListItemText id={labelId} className={classes.listItemText}>
                      Field Title: {item.title}
                    </ListItemText>
                    <ListItemText id={labelId} className={classes.listItemText}>
                      Field Type: {item.name}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </CardContent>
      </Card>
      <Card>
        <Typography align="right">
          <CardContent>
            <Button
              variant="contained"
              style={{ marginRight: "10px" }}
              onClick={saveForm}
            >
              Add
            </Button>
            <Link to="/">
              <Button variant="contained">Cancel</Button>
            </Link>
          </CardContent>
        </Typography>
      </Card>
    </>
  );
};
