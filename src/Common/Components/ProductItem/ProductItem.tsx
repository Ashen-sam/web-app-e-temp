import { Paper, Stack, Typography, useTheme } from '@mui/material'
import ProductItemImage from '../ProductItemImage/ProductItemImage'
import ProductItemButtons from '../ProductItemButtons/ProductItemButtons';
import { useState } from 'react';

interface IProductItem {
    productMainTitle: string;
    productSubTitle: string;
    productPrice: number;
    isOptions?: boolean
}

const ProductItem: React.FC<IProductItem> = ({
    productMainTitle,
    productSubTitle,
    productPrice,
    isOptions
}) => {
    const theme = useTheme()
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleLeave = () => {
        setOpen(false)
    }
    return (
        <Stack onMouseOver={handleOpen} onMouseLeave={handleLeave} position={'relative'} component={Paper} elevation={1} p={2} direction={'column'} maxWidth={250} borderRadius={'5px'} border={'1px solid whitesmoke'}>
            <ProductItemImage width={'100%'} image={'public/Images/3-5-800x800.webp'} />
            <Stack direction={'column'} gap={0.6} mt={1}>
                <Typography fontWeight={'bold'} color={theme.palette.grey[700]} variant='body1'>{productMainTitle}</Typography>
                <Typography fontWeight={'bold'} color={theme.palette.grey[500]} variant='body2'>{productSubTitle}</Typography>
                <Typography fontWeight={'bold'} variant='body2' color={theme.palette.primary.light}> Rs.{productPrice}
                </Typography>
            </Stack>

            {isOptions ? (
                <Stack sx={{
                    opacity: open ? 1 : 0,
                    transform: open ? 'scale(1)' : 'scale(0.9)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease',
                }} position={'absolute'} top={10} right={10}>
                    <ProductItemButtons />
                </Stack>
            ) : ''}
        </Stack>
    )
}

export default ProductItem
