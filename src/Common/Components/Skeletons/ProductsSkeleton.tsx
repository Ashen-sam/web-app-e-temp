import { Skeleton, Stack } from "@mui/material";

const ProductsSkeleton = () => {
  return (
    <Stack
      flexWrap={"wrap"}
      direction={"row"}
      justifyContent={"center"}
      gap={1}
      width={"100%"}
    >
      {Array.from({ length: 8 }, (_, index) => {
        return (
          <Stack
            position={"relative"}
            p={2}
            direction={"column"}
            maxWidth={250}
            borderRadius={"5px"}
          >
            <Skeleton
              key={index}
              height={200}
              width={200}
              variant="rectangular"
              animation="wave"
            />
            <Stack direction={"column"} gap={0.6} mt={1}>
              <Skeleton />
              <Skeleton height={60} />
              <Skeleton />
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ProductsSkeleton;
