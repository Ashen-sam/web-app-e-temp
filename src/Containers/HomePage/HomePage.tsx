import { Container, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductItem from "../../Common/Components/ProductItem/ProductItem";
import Footer from "../../Common/Components/Footer/Footer";
import logo from "/Images/sample-logo.jpg";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import SideBar from "../../Common/Components/Drawer/Drawer";
import { Messages } from "../../Common/Constants/Messages";
import { useGetAllItems } from "../../Hooks/useGetAllItems";
import ProductsSkeleton from "../../Common/Components/Skeletons/ProductsSkeleton";

const HomePage: React.FC = () => {
  const [takeData, setTakeData] = useState({
    title: "",
    sub: "",
    price: 0,
    image: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("takeData");
    if (storedData) {
      setTakeData(JSON.parse(storedData));
    }
  }, []);

  const takeDataCart = (
    title: string,
    price: number,
    sub: string,
    image: string
  ) => {
    const newData = {
      title: title,
      sub: sub,
      price: price,
      image: image,
    };
    setTakeData(newData);
    // localStorage.setItem("takeData", JSON.stringify(newData));

    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const { data, isLoading } = useGetAllItems();

  const icons: any = [
    {
      id: 1,
      icon: <Facebook size={20} />,
    },
    {
      id: 2,
      icon: <Instagram size={20} />,
    },
    {
      id: 3,
      icon: <PhoneCall size={20} />,
    },
    {
      id: 4,
      icon: <Twitter size={20} />,
    },
  ];

  const links: any = [
    {
      id: 1,
      title: "Main Categories",
      link: [
        {
          linkName: "iPhone",
        },
        {
          linkName: "iPad",
        },
        {
          linkName: "Mac",
        },
        {
          linkName: "Accessories",
        },
      ],
    },
    {
      id: 2,
      title: "Quick Navigation",
      link: [
        {
          linkName: "Home",
        },
        {
          linkName: "About",
        },
        {
          linkName: "Contact",
        },
        {
          linkName: "Newsroom",
        },
        {
          linkName: "Careers",
        },
      ],
    },
  ];

  return (
    <>
      <Container maxWidth="lg">
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          {isLoading ? (
            <ProductsSkeleton />
          ) : (
            <>
              {data.slice(0, 25).map((data) => {
                return (
                  <ProductItem
                    addToCartClick={() =>
                      takeDataCart(
                        data.title,
                        data.price,
                        data.description,
                        data.image
                      )
                    }
                    productMainTitle={data.title}
                    productSubTitle={data.description}
                    productPrice={data.price}
                    isOptions={true}
                    productImage={data.image}
                  />
                );
              })}
            </>
          )}
        </Stack>
        <SideBar
          title="Shopping Cart"
          isOpen={isOpen}
          close={handleClose}
          data={takeData}
        />
      </Container>
      <Footer
        address={Messages.address}
        contactNo={Messages.contactNo}
        description={Messages.description}
        imageText={Messages.imageText}
        logo={logo}
        Contactdata={icons}
        links={links}
      />
    </>
  );
};

export default HomePage;
