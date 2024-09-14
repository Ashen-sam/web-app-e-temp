import { Box, Button, Typography } from "@mui/material";
import image from "/Images/lovee.png";

const Wishlist: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: "1rem",
        minHeight: "96vh",
        flexDirection: "column",
        // paddingTop: "5rem",
      }}
    >
      <img src={image} alt="empty wishlist" width={200} />
      <Typography sx={{ fontSize: "3rem", fontWeight: "bold" }}>
        This wishlist is empty.
      </Typography>
      <Typography
        sx={{
          color: "gray",
          width: "27%",
          textAlign: "center",
          fontSize: "0.9rem",
        }}
      >
        You don't have any products in the wishlist yet. You will find a lot of
        interesting products on our "Shop" page. Return to shop
      </Typography>
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#034694",
        }}
      >
        Return to shop
      </Button>
    </Box>
  );
};

export default Wishlist;
