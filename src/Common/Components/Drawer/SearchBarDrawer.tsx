import { Drawer, Stack, TextField, Typography } from "@mui/material";
import { CircleX } from "lucide-react";
import React from "react";

interface ISearchBarDrawer {
  open?: boolean;
  close?: () => void;
}
const SearchBarDrawer: React.FC<ISearchBarDrawer> = ({ open, close }) => {
  return (
    <Drawer anchor="bottom" variant="temporary" open={open}>
      <Stack
        // minWidth={{
        //   lg: 450,
        //   sm: 400,
        //   xs: 350,
        // }}
        minHeight={"96vh"}
      >
        <Stack>
          <TextField
            variant="outlined"
            // focused={false}
            autoFocus={false}
            placeholder="Search for Products"
            sx={{
              // border: "1px solid red",
              "& .MuiTextField-root": {
                border: "none",
              },
              // "& .MuiInputBase-root": {
              //   height: 85,
              //   display: "flex",
              //   alignItems: "center",
              //   fontSize: "2rem",
              // },
              "& .MuiInputBase-input": {
                textAlign: "center",
              },
              // "& .Mui-focused .MuiInputBase-input": {
              //   outline: "none",
              // },
              // "& .Mui-focused .MuiInputBase-input .MuiInput-underline": {
              //   borderBottom: "none",
              //   outline: "none",
              // },
              // "& .MuiInput-underline:before": {
              //   borderBottom: "none",
              // },
              // "& .MuiInput-underline:after": {
              //   borderBottom: "none",
              // },
              // "& .Mui-hover .MuiInputBase-input": {
              //   outline: "none",
              // },
            }}
          />
          <CircleX
            stroke="black"
            strokeWidth="1.1"
            style={{
              color: "black",
              position: "absolute",
              cursor: "pointer",
              right: "20px",
              top: "20px",
              // fontSize: "40px",
              width: "45px",
              height: "45px",
            }}
            onClick={close}
          />
        </Stack>
        <Typography paddingTop={2.5} textAlign={"center"} color="gray">
          Start typing to see products you are looking for.
        </Typography>
      </Stack>
    </Drawer>
  );
};

export default SearchBarDrawer;
