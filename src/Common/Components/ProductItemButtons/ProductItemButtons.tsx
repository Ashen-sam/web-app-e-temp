import { Stack } from "@mui/material";
import { Heart, Search, ShoppingCart } from "lucide-react";

interface IProductItemButtons {
  clickAddCart?: () => void;
}
const ProductItemButtons: React.FC<IProductItemButtons> = ({
  clickAddCart,
}) => {
  return (
    <Stack direction={"column"} gap={1}>
      <ShoppingCart onClick={clickAddCart} />
      <Heart />
      <Search />
    </Stack>
  );
};

export default ProductItemButtons;
