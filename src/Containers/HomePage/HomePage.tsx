import { Box, Stack } from '@mui/material'
import React from 'react'
import ProductItem from '../../Common/Components/ProductItem/ProductItem'

const HomePage: React.FC = () => {

    const fakeProducts = [
        {
            productMainTitle: 'iPhone 16 Pro Max',
            productSubTitle: 'Apple, Smartphone',
            productPrice: 354900,
            isOptions: true,
        },
        {
            productMainTitle: 'Samsung Galaxy S23 Ultra',
            productSubTitle: 'Samsung, Smartphone',
            productPrice: 299900,
            isOptions: true,
        },
        {
            productMainTitle: 'Google Pixel 8',
            productSubTitle: 'Google, Smartphone',
            productPrice: 199900,
            isOptions: true,
        },
        {
            productMainTitle: 'OnePlus 12 Pro',
            productSubTitle: 'OnePlus, Smartphone',
            productPrice: 179900,
            isOptions: true,
        },
        {
            productMainTitle: 'Sony Xperia 5 IV',
            productSubTitle: 'Sony, Smartphone',
            productPrice: 224900,
            isOptions: true,
        },
        {
            productMainTitle: 'Huawei Mate 50',
            productSubTitle: 'Huawei, Smartphone',
            productPrice: 199000,
            isOptions: true,
        },
        {
            productMainTitle: 'Xiaomi Mi 13',
            productSubTitle: 'Xiaomi, Smartphone',
            productPrice: 159900,
            isOptions: true,
        },
        {
            productMainTitle: 'Oppo Find X6',
            productSubTitle: 'Oppo, Smartphone',
            productPrice: 189900,
            isOptions: true,
        },
        {
            productMainTitle: 'Vivo X90 Pro',
            productSubTitle: 'Vivo, Smartphone',
            productPrice: 209900,
            isOptions: true,
        },
        {
            productMainTitle: 'Realme GT Neo 5',
            productSubTitle: 'Realme, Smartphone',
            productPrice: 139900,
            isOptions: true,
        }
    ];

    return (
        <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={2}>

            {fakeProducts.map(data => {
                return (
                    <ProductItem productMainTitle={data.productMainTitle} productSubTitle={data.productSubTitle} productPrice={data.productPrice} isOptions={true} />

                )
            })}
        </Stack>
    )
}

export default HomePage
