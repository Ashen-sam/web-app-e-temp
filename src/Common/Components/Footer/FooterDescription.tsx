import { useTheme, Stack, Typography } from "@mui/material";
import React from "react";
import defaultImage from "/Images/sample-logo.jpg";
import { MapPin, Phone } from "lucide-react";

interface IFooterDescription {
  logo?: string;
  name?: string;
  description?: string;
  imageText?: string;
  address?: string;
  contactNo?: string;
}
const FooterDescription: React.FC<IFooterDescription> = ({
  logo = defaultImage,
  description,
  imageText,
  address,
  contactNo,
}) => {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={"column"}
        maxWidth={800}
        gap={1.5}
        pr={{
          lg: 15,
        }}
        sx={{ color: theme.palette.primary.contrastText }}
      >
        <img src={logo} alt={imageText} width={100} height={100} />
        <Typography
          sx={{
            color: theme.palette.secondary.contrastText,
          }}
        >
          {description}
        </Typography>
        <Stack
          direction={"column"}
          gap={1.5}
          sx={{
            color: theme.palette.secondary.contrastText,
          }}
        >
          <Stack direction={"row"} gap={2}>
            <MapPin />
            <Typography>{address}</Typography>
          </Stack>
          <Stack direction={"row"} gap={2}>
            <Phone />
            <Typography>{contactNo}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default FooterDescription;
