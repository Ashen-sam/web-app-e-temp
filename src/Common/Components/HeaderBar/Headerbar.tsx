import { Stack, Typography, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import React, { Fragment, ReactNode, useState } from "react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import SideBar from "../Drawer/Drawer";
import SearchBarDrawer from "../Drawer/SearchBarDrawer";
import { MAIN_ROUTES } from "../../Constants/Routes/MainRoutes";
import { useNavigate } from "react-router-dom";
import MobileTab from "./MobileTab";

interface IHeader {
  id?: number;
  logoName?: string;
  logoImg?: ReactNode;
  links?: string[];
  Icon?: ReactNode;
  link?: any;
  click?: () => void;
}

const HeaderBar: React.FC<IHeader> = ({ logoImg }) => {
  const theme = useTheme();
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const handleCartOpen = () => {
    setIsOpenCart(true);
  };

  const handleCloseCart = () => {
    setIsOpenCart(false);
  };

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const searchClose = () => {
    setIsSearchOpen(false);
  };

  const handleWhishlist = () => {
    navigate(MAIN_ROUTES.WISHLIST);
  };

  const linkOptions: IHeader[] = [
    {
      id: 1,
      Icon: <Search />,
      click: handleSearchOpen,
    },
    {
      id: 2,
      Icon: <Heart />,
      click: handleWhishlist,
    },
    {
      id: 3,
      Icon: <ShoppingCart />,
      click: handleCartOpen,
    },
    {
      id: 4,
      Icon: <User />,
    },
  ];

  return (
    <Fragment>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: theme.palette.primary.main,
          p: 1,
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack>asdl </Stack>
            <Stack color={"red"}>{logoImg} Image</Stack>
            <Stack
              position={"relative"}
              sx={{
                cursor: "pointer",
              }}
              display={{
                xs: "none",
                sm: "none",
                md: "flex",
              }}
              alignItems={"center"}
              direction={"row"}
              gap={3}
            >
              {linkOptions.map((option) => {
                {
                  console.log(option.link);
                }
                return (
                  <>
                    <Stack key={option.id} onClick={option.click}>
                      {option.Icon}
                    </Stack>
                  </>
                );
              })}
            </Stack>
            <MobileTab>
              {linkOptions.map((option) => {
                {
                  console.log(option.link);
                }
                return (
                  <>
                    <Stack key={option.id} onClick={option.click}>
                      <Typography>{option.Icon}</Typography>
                    </Stack>
                  </>
                );
              })}
            </MobileTab>
          </Stack>
        </Container>
      </AppBar>

      <SideBar
        isAddtoCart={true}
        noProducts="No products in the cart."
        title="Shopping Cart"
        close={handleCloseCart}
        isOpen={isOpenCart}
      />

      <SearchBarDrawer open={isSearchOpen} close={searchClose} />
    </Fragment>
  );
};
export default HeaderBar;
