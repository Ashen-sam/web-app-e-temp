import { Paper, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import ProductItemImage from "../ProductItemImage/ProductItemImage";
import ProductItemButtons from "../ProductItemButtons/ProductItemButtons";
import { useState } from "react";

interface IProductItem {
  productMainTitle: string;
  productSubTitle: string;
  productPrice: number;
  isOptions?: boolean;
  productImage?: string;
  qty?: number;
  addToCartClick?: () => void;
}

const ProductItem: React.FC<IProductItem> = ({
  productMainTitle,
  productSubTitle,
  productPrice,
  isOptions,
  productImage,
  qty,
  addToCartClick,
}) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleLeave = () => {
    setOpen(false);
  };
  return (
    <Stack
      onMouseOver={handleOpen}
      onMouseLeave={handleLeave}
      position={"relative"}
      component={Paper}
      elevation={1}
      p={2}
      minHeight={370}
      direction={"column"}
      maxWidth={250}
      borderRadius={"5px"}
      border={"1px solid whitesmoke"}
    >
      <ProductItemImage
        sx={{
          aspectRatio: 3 / 2,
        }}
        width={"100%"}
        image={productImage!}
      />
      <Stack direction={"column"} gap={0.6} mt={1}>
        <Typography
          sx={{
            wordBreak: "break-all",
          }}
          fontWeight={"bold"}
          color={theme.palette.grey[700]}
          variant="body1"
          minHeight={30}
        >
          {productMainTitle}
        </Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
            lineHeight: "1.5em",
          }}
          fontWeight={"bold"}
          color={theme.palette.grey[500]}
          variant="body2"
        >
          {productSubTitle}
        </Typography>

        <Typography
          fontWeight={"bold"}
          variant="body2"
          color={theme.palette.primary.light}
        >
          {" "}
          Rs.{productPrice}
        </Typography>
      </Stack>

      {isOptions ? (
        <Stack
          sx={{
            opacity: open ? 1 : 0,
            transform: open ? "scale(1)" : "scale(0.9)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
          component={Paper}
          p={1}
          position={"absolute"}
          top={10}
          right={10}
        >
          <ProductItemButtons clickAddCart={addToCartClick} />
        </Stack>
      ) : (
        ""
      )}
    </Stack>
  );
};

export default ProductItem;
