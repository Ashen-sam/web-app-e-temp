import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import React, { Fragment, ReactNode, useState } from "react";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import SideBar from "../Drawer/Drawer";
import SearchBarDrawer from "../Drawer/SearchBarDrawer";
import { MAIN_ROUTES } from "../../Constants/Routes/MainRoutes";
import { Link } from "react-router-dom";

interface IHeader {
  logoName?: string;
  logoImg?: ReactNode;
  links?: string[];
}

const HeaderBar: React.FC<IHeader> = ({ logoImg }) => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleCartOpen = () => {
    setIsOpenCart(true);
  };

  const handleCloseCart = () => {
    setIsOpenCart(false);
  };

  const searchOpen = () => {
    setIsSearchOpen(true);
  };

  const searchClose = () => {
    setIsSearchOpen(false);
  };

  return (
    <Fragment>
      <AppBar
        position="fixed"
        elevation={1}
        sx={{
          backgroundColor: "#F0F8FF",
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
              <Search color="#002244" size={20} onClick={searchOpen} />
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                direction={"column"}
                component={Link}
                to={MAIN_ROUTES.WISHLIST}
              >
                <Heart color="#002244" size={20} />
              </Stack>

              <ShoppingCart
                color="#002244"
                size={20}
                onClick={handleCartOpen}
              />
              <User color="#002244" size={20} />
            </Stack>

            <Stack
              sx={{
                backgroundColor: "#F0F8FF",
              }}
              position={"fixed"}
              bottom={0}
              right={0}
              width={"100%"}
              display={{
                xs: "flex",
                sm: "flex",
                md: "none",
              }}
              alignItems={"center"}
              direction={"row"}
              gap={3}
              p={2}
              justifyContent={"space-evenly"}
            >
              <Search color="#002244" size={20} onClick={searchOpen} />
              <Link to={MAIN_ROUTES.WISHLIST}>
                <Heart color="#002244" size={20} />
              </Link>
              <ShoppingCart
                color="#002244"
                size={20}
                onClick={handleCartOpen}
              />
              <User color="#002244" size={20} />
            </Stack>
          </Stack>
        </Container>
      </AppBar>

      <SideBar
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
