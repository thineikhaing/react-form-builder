import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Card, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

import "@fontsource/roboto";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listRoot: {
    width: "100%",

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
    fontSize: 24,
    "&.MuiListSubheader-inset": { marginBottom: 12 }, //no space
  },
  listItemText: {
    "& .MuiListItemText-primary": {
      fontSize: "1.2rem",
    },
  },
  listItemSpanText: {
    fontSize: "0.8rem",
  },
}));

export const FormList = () => {
  const classes = useStyles();
  const { state, removeForm } = useContext(GlobalContext);

  // the value of the search field
  const [name, setName] = useState("");

  // the search result
  const [SearchResults, setSearchResults] = useState(state);

  useEffect(() => {
    setSearchResults(state);
  }, []);

  const searchfilter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = state.filter((form) => {
        return form.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setSearchResults(results);
    } else {
      setSearchResults(state);
      // If the text field is empty, show all users
    }
    setName(keyword);
  };

  return (
    <>
      <Card>
        <TextField
          fullWidth
          id="standard-bare"
          variant="outlined"
          placeholder="Search Form"
          onChange={searchfilter}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchOutlined />
              </IconButton>
            ),
          }}
        />
      </Card>
      <List className={classes.listRoot}>
        {state.map((item, index) => {
          const labelId = `checkbox-list-label-${index}`;
          return (
            <ListItem key={index} role={undefined} dense button divider>
              <ListItemText id={labelId} className={classes.listItemText}>
                {item.name}
                <br />
                <span className={classes.listItemSpanText}>
                  {item.createdate}
                </span>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit">
                  <Link to={`/edit/${item.id}`}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon
                    onClick={() => removeForm(item.id)}
                    color="danger"
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
