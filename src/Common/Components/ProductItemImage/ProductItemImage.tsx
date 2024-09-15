import { Stack, SxProps } from '@mui/material'

interface IProductItemImage {
    sx?: SxProps
    height?: number | string;
    width?: number | string;
    imageText?: string;
    image: string
}

const ProductItemImage: React.FC<IProductItemImage> = ({
    width,
    height,
    image,
    imageText,
    sx,
}) => {
    return (
        <Stack sx={sx} height={height} width={width}>
            <img src={image} alt={imageText} />
        </Stack>
    )
}

export default ProductItemImage
