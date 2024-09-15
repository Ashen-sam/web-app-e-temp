import { Stack } from "@mui/material";
import React from "react";
import ProductItem from "../../Common/Components/ProductItem/ProductItem";
import Footer from "../../Common/Components/Footer/Footer";
import logo from "/Images/sample-logo.jpg";
import { Facebook, Instagram, PhoneCall, Twitter } from "lucide-react";

const HomePage: React.FC = () => {
  const fakeProducts = [
    {
      productMainTitle: "iPhone 16 Pro Max",
      productSubTitle: "Apple, Smartphone",
      productPrice: 354900,
      isOptions: true,
    },
    {
      productMainTitle: "Samsung Galaxy S23 Ultra",
      productSubTitle: "Samsung, Smartphone",
      productPrice: 299900,
      isOptions: true,
    },
    {
      productMainTitle: "Google Pixel 8",
      productSubTitle: "Google, Smartphone",
      productPrice: 199900,
      isOptions: true,
    },
    {
      productMainTitle: "OnePlus 12 Pro",
      productSubTitle: "OnePlus, Smartphone",
      productPrice: 179900,
      isOptions: true,
    },
    {
      productMainTitle: "Sony Xperia 5 IV",
      productSubTitle: "Sony, Smartphone",
      productPrice: 224900,
      isOptions: true,
    },
    {
      productMainTitle: "Huawei Mate 50",
      productSubTitle: "Huawei, Smartphone",
      productPrice: 199000,
      isOptions: true,
    },
    {
      productMainTitle: "Xiaomi Mi 13",
      productSubTitle: "Xiaomi, Smartphone",
      productPrice: 159900,
      isOptions: true,
    },
    {
      productMainTitle: "Oppo Find X6",
      productSubTitle: "Oppo, Smartphone",
      productPrice: 189900,
      isOptions: true,
    },
    {
      productMainTitle: "Vivo X90 Pro",
      productSubTitle: "Vivo, Smartphone",
      productPrice: 209900,
      isOptions: true,
    },
    {
      productMainTitle: "Realme GT Neo 5",
      productSubTitle: "Realme, Smartphone",
      productPrice: 139900,
      isOptions: true,
    },
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
              productMainTitle={data.productMainTitle}
              productSubTitle={data.productSubTitle}
              productPrice={data.productPrice}
              isOptions={true}
            />
          );
        })}
      </Stack>
      <Footer
        address="123 Galle Road, Colombo, Sri Lanka"
        contactNo="070 123 2123"
        description="Welcome to our store! We pride ourselves on offering a vast selection of high-quality products, ranging from cutting-edge electronics to the latest trends in fashion. 
        With a focus on excellent customer service, we are committed to providing you with a seamless shopping experience both online and in-store.!"
        imageText="Shop Logo"
        logo={logo}
        Contactdata={icons}
        links={links}
      />
    </>
  );
};

export default HomePage;
