import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { CircleX, XIcon } from "lucide-react";
import React, { useState, ReactNode } from "react";
import image from "/Images/empty-cart.png";
import { Plus, Minus } from "lucide-react";
import CustomTooltip from "../Tooltip/customTooltip";
import TextWithTooltip from "../Tooltip/customTooltip";

interface ISideBar {
  close?: () => void;
  isOpen?: boolean;
  title?: string;
  children?: ReactNode;
  noProducts?: string;
  isAddtoCart?: boolean;
  counter?: number;
  data?: {
    title: string;
    sub: string;
    price: number;
    image: string;
  };
}
const SideBar: React.FC<ISideBar> = ({
  isOpen,
  close,
  title,
  noProducts,
  data,
  counter,
}) => {
  const theme = useTheme();

  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <Drawer anchor="right" variant="temporary" open={isOpen}>
      <Stack
        minWidth={{
          lg: 350,
          sm: 300,
          xs: 350,
        }}
        minHeight={"95vh"}
      >
        <Stack
          p={2}
          sx={{
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Typography color="whitesmoke" fontSize={"1.3rem"}>
            {title}
          </Typography>
        </Stack>
        <Divider />

        <Stack
          minHeight={"93vh"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={data ? "space-between" : "center"}
        >
          {data ? (
            <>
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={2}
                width={"100%"}
                position={"relative"}
                p={2}
                pl={2}
                borderBottom={"1px solid lightgray"}
                sx={{
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                <img src={data.image} height={70} />
                <Stack direction={"column"}>
                  {/* <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
                    {data.title}
                  </Typography> */}
                  <TextWithTooltip
                    title={data.title}
                    lgMaxWidth={200}
                    smMaxWidth={100}
                  />
                  <Stack direction={"row"} alignItems={"center"} gap={1} py={1}>
                    <Button
                      onClick={handleIncrement}
                      variant="outlined"
                      sx={{
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.contrastText,
                        border: `lpx solid ${theme.palette.secondary.dark}`,
                      }}
                    >
                      <Plus size={14} />
                    </Button>
                    <Box
                      fontSize={"0.8rem"}
                      sx={{
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.contrastText,
                        border: `lpx solid ${theme.palette.secondary.dark}`,
                      }}
                    >
                      {counter}
                    </Box>
                    <Button
                      onClick={handleDecrement}
                      variant="outlined"
                      sx={{
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.secondary.contrastText,
                        border: `lpx solid ${theme.palette.secondary.dark}`,
                      }}
                    >
                      <Minus size={14} />
                    </Button>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <Typography
                      fontSize={"0.9rem"}
                      color={theme.palette.secondary.dark}
                    >{`${count} × `}</Typography>
                    <Typography
                      fontSize={"0.9rem"}
                      color={theme.palette.primary.main}
                    >{`Rs.${(data.price * count).toFixed(2)}`}</Typography>
                  </Stack>
                  {/* <Typography>{data.sub}</Typography> */}
                </Stack>

                <XIcon
                  size={30}
                  style={{
                    padding: "7px",
                    color: "black",
                    backgroundColor: "whitesmoke",
                    borderRadius: "50%",
                    position: "absolute",
                    cursor: "pointer",
                    top: 15,
                    right: 18,
                  }}

                  // onClick={close}
                />
              </Stack>
              <Stack width={"100%"} p={1} borderTop={"1px solid lightgray"}>
                <Stack
                  direction={"row"}
                  py={1}
                  justifyContent={"space-between"}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                    }}
                  >
                    Subtotal :
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1.2rem",
                      color: theme.palette.primary.main,
                    }}
                  >
                    RS.100000
                  </Typography>
                </Stack>
                <Stack direction={"column"} gap={1}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.light,
                      color: theme.palette.primary.main,
                      p: 1,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    View Cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      p: 1,
                      textTransform: "uppercase",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    Checkout
                  </Button>
                </Stack>
              </Stack>
            </>
          ) : (
            <Stack
              direction={"column"}
              gap={1}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <img src={image} alt="empty cart" width={100} />
              <Typography fontWeight={"500"} fontSize={"1.1rem"} color="gray">
                {noProducts}
              </Typography>
              <Button
                variant="contained"
                // disableElevation
                // sx={{
                //   backgroundColor: "#034694",
                // }}
              >
                Return to shop
              </Button>
            </Stack>
          )}
        </Stack>
      </Stack>
      <CircleX
        style={{
          color: "whitesmoke",
          position: "absolute",
          cursor: "pointer",
          right: "20px",
          top: "20px",
        }}
        onClick={close}
      />
    </Drawer>
  );
};

export default SideBar;
