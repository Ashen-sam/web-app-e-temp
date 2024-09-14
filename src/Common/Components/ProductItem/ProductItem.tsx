import { Paper, Stack, Typography, useTheme } from '@mui/material'
import ProductItemImage from '../ProductItemImage/ProductItemImage'

interface IProductItem {
    productMainTitle: string;
    productSubTitle: string;
    productPrice: number;
}

const ProductItem: React.FC<IProductItem> = ({
    productMainTitle,
    productSubTitle,
    productPrice
}) => {
    const theme = useTheme()

    return (
        <Stack component={Paper} elevation={1} p={2} direction={'column'} maxWidth={250} borderRadius={'5px'} border={'1px solid whitesmoke'}>
            <ProductItemImage width={'100%'} image={'public/Images/3-5-800x800.webp'} />
            <Stack direction={'column'} gap={0.6} mt={1}>
                <Typography fontWeight={'bold'} color={theme.palette.grey[700]} variant='body1'>{productMainTitle}iPhone 16 & 16 Plus</Typography>
                <Typography fontWeight={'bold'} color={theme.palette.grey[500]} variant='body2'>{productSubTitle}Apple, iPhone</Typography>
                <Typography fontWeight={'bold'} variant='body2' color={theme.palette.primary.light}> Rs.{productPrice}
                    354,900.00</Typography>
            </Stack>
        </Stack>
    )
}

export default ProductItem
