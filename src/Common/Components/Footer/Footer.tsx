import FooterDescription from "./FooterDescription";
import ContactInfoIcons, { IContactInfoIcons } from "./ContactInfoIcons";
import { Stack, useTheme } from "@mui/material";
import QuickLinks, { IQuickLinks } from "./QuickLinks";

interface IFooter {
  description: string;
  address: string;
  contactNo: string;
  logo: string;
  imageText: string;
  links?: IQuickLinks["links"];
  Contactdata?: IContactInfoIcons["Contactdata"];
}
const Footer: React.FC<IFooter> = ({
  description,
  address,
  contactNo,
  logo,
  imageText,
  links,
  Contactdata,
}) => {
  const theme = useTheme();

  return (
    <>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        py={5}
        px={2}
        mt={5}
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Stack
          direction={{
            lg: "row",
            sm: "column",
          }}
        >
          <Stack direction={"column"} gap={3}>
            <FooterDescription
              description={description}
              address={address}
              contactNo={contactNo}
              logo={logo}
              imageText={imageText}
            />
            <ContactInfoIcons Contactdata={Contactdata} />
          </Stack>
          <Stack
            gap={2}
            mt={{
              sm: 2,
              xs: 2,
            }}
          >
            <QuickLinks links={links} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Footer;
