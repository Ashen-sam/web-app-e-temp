import { Stack } from "@mui/material";
import React, { useState } from "react";
import ProductItem from "../../Common/Components/ProductItem/ProductItem";
import Footer from "../../Common/Components/Footer/Footer";
import logo from "/Images/sample-logo.jpg";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";
import SideBar from "../../Common/Components/Drawer/Drawer";
import { Messages } from "../../Common/Constants/Messages";

const HomePage: React.FC = () => {
  const [takeData, setTakeData] = useState({
    title: "",
    sub: "",
    price: 0,
    image: "",
  });

  const [isOpen, setIsOpen] = useState(false);

  const takeDataCart = (
    title: string,
    price: number,
    sub: string,
    image: string
  ) => {
    setTakeData({
      title: title,
      sub: sub,
      price: price,
      image: image,
    });
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const fakeProducts = [
    {
      productMainTitle: "iPhone 16 Pro Max",
      productSubTitle: "Apple, Smartphone",
      productPrice: 354900,
      isOptions: true,
      productImage: "/Images/phone-Image.webp",
    },
    // {
    //   productMainTitle: "Samsung Galaxy S23 Ultra",
    //   productSubTitle: "Samsung, Smartphone",
    //   productPrice: 299900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Google Pixel 8",
    //   productSubTitle: "Google, Smartphone",
    //   productPrice: 199900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "OnePlus 12 Pro",
    //   productSubTitle: "OnePlus, Smartphone",
    //   productPrice: 179900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Sony Xperia 5 IV",
    //   productSubTitle: "Sony, Smartphone",
    //   productPrice: 224900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Huawei Mate 50",
    //   productSubTitle: "Huawei, Smartphone",
    //   productPrice: 199000,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Xiaomi Mi 13",
    //   productSubTitle: "Xiaomi, Smartphone",
    //   productPrice: 159900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Oppo Find X6",
    //   productSubTitle: "Oppo, Smartphone",
    //   productPrice: 189900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Vivo X90 Pro",
    //   productSubTitle: "Vivo, Smartphone",
    //   productPrice: 209900,
    //   isOptions: true,
    // },
    // {
    //   productMainTitle: "Realme GT Neo 5",
    //   productSubTitle: "Realme, Smartphone",
    //   productPrice: 139900,
    //   isOptions: true,
    // },
  ];

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
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        {fakeProducts.map((data) => {
          return (
            <ProductItem
              addToCartClick={() =>
                takeDataCart(
                  data.productMainTitle,
                  data.productPrice,
                  data.productSubTitle,
                  data.productImage
                )
              }
              productMainTitle={data.productMainTitle}
              productSubTitle={data.productSubTitle}
              productPrice={data.productPrice}
              isOptions={true}
              productImage={data.productImage}
            />
          );
        })}
      </Stack>
      <Footer
        address={Messages.address}
        contactNo={Messages.contactNo}
        description={Messages.description}
        imageText={Messages.imageText}
        logo={logo}
        Contactdata={icons}
        links={links}
      />

      <SideBar
        title="Shopping Cart"
        isOpen={isOpen}
        close={handleClose}
        data={takeData}
      />
    </>
  );
};

export default HomePage;
