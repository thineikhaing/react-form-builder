import React from "react";
import { CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { FormList } from "../compontents";
export const Home = () => (
  <div>
    <Typography align="right">
      <CardContent style={{ paddingBottom: "0" }}>
        <Link to="/add">
          <Button variant="contained">Create Form</Button>
        </Link>
      </CardContent>
    </Typography>
    <CardContent>
      <FormList />
    </CardContent>
  </div>
);
