import { Box, Stack, useTheme } from "@mui/material";
import { ReactNode } from "react";

// export interface IContactInfoIcons {
//   Contactdata?: [
//     {
//       id?: number;
//       icon?: ReactNode;
//     }
//   ];
// }

export interface IContactInfoIcons {
  Contactdata?: {
    id?: number;
    icon?: ReactNode;
  }[];
}
const ContactInfoIcons: React.FC<IContactInfoIcons> = ({ Contactdata }) => {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      gap={1}
      sx={{
        color: theme.palette.primary.contrastText,
        width: "max-content",
      }}
    >
      {Contactdata?.map((info) => {
        return (
          <Box
            border={1}
            borderRadius="50%"
            height={40}
            width={40}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ cursor: "pointer", color: theme.palette.secondary.dark }}
          >
            {info.icon}
          </Box>
        );
      })}
    </Stack>
  );
};

export default ContactInfoIcons;
