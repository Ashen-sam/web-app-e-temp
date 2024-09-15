import { Box, Stack, Typography, useTheme } from "@mui/material";

// export interface IQuickLinks {
//   links?: [
//     {
//       id?: number;
//       title?: string;
//       link?: [
//         {
//           linkName?: string;
//         }
//       ];
//     }
//   ];
// }
export interface IQuickLinks {
  links?: {
    id?: number;
    title?: string;
    link?: {
      linkName?: string;
    }[];
  }[];
}

const QuickLinks: React.FC<IQuickLinks> = ({ links }) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        color: theme.palette.secondary.contrastText,
      }}
    >
      {links?.map((item) => {
        return (
          <Box pb={2}>
            <Typography
              fontSize={"1rem"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              pb={1}
            >
              {item.title}
            </Typography>
            <Stack
              direction={"column"}
              fontSize={"0.9rem"}
              gap={1}
              sx={{
                cursor: "pointer",
              }}
            >
              {item.link?.map((data: any) => {
                return <Stack direction={"column"}>{data.linkName}</Stack>;
              })}
            </Stack>
          </Box>
        );
      })}
    </Stack>
  );
};

export default QuickLinks;
