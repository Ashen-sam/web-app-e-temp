import { Stack } from '@mui/material'
import { Heart, Search, ShoppingCart } from 'lucide-react'

const ProductItemButtons = () => {
    return (
        <Stack direction={'column'} gap={0.7}>
            <ShoppingCart />
            <Heart />
            <Search />
        </Stack>
    )
}

export default ProductItemButtons
