import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import React, { Fragment, ReactNode, useState } from 'react';
import CatergoryToolbar from '../CatergoryToolbar/CatergoryToolbar';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import SideBar from '../Drawer/Drawer';
import PopOver from '../PopOver/Popover';


interface IHeader {
    logoName?: string;
    logoImg?: ReactNode;
    links?: string[]

}

const HeaderBar: React.FC<IHeader> = ({
    logoImg
}) => {

    const [isOpenCart, setIsOpenCart] = useState(false)
    const [open, setOpen] = useState(false)
    const [, setAnchorEl] = useState<null | SVGSVGElement>(null);


    const handleCartOpen = () => {
        setIsOpenCart(true)
    }

    const handleCloseCart = () => {
        setIsOpenCart(false)

    }


    const handleOpen = (event: React.MouseEvent<SVGSVGElement>) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setAnchorEl(null);
    };
    return (

        <Fragment>
            <AppBar position="fixed" elevation={1} sx={{
                backgroundColor: '#F0F8FF',
            }}>
                <Container maxWidth="lg">
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                        <Stack>
                            <CatergoryToolbar />
                        </Stack>
                        <Stack color={'red'}>
                            {logoImg} Image
                        </Stack>

                        <Stack position={'relative'} sx={{
                            cursor: 'pointer'
                        }} display={{
                            xs: 'none',
                            sm: 'none',
                            md: 'flex',
                        }} alignItems={'center'} direction={'row'} gap={3}>
                            <Search color='#002244' size={20} />
                            <Heart color='#002244' size={20} />
                            <ShoppingCart color='#002244' size={20} onClick={handleCartOpen} />
                            <User color='#002244' size={20} onMouseOver={handleOpen} />
                        </Stack>


                        <Stack
                            sx={{
                                backgroundColor: '#F0F8FF',
                            }} position={'fixed'} bottom={0} right={0} width={'100%'} display={{
                                xs: 'flex',
                                sm: 'flex',
                                md: 'none',
                            }} alignItems={'center'} direction={'row'} gap={3} p={2} justifyContent={'space-evenly'}>
                            <Search color='#002244' size={20} />
                            <Heart color='#002244' size={20} />
                            <ShoppingCart color='#002244' size={20} onClick={handleCartOpen} />
                            <User color='#002244' size={20} />

                        </Stack>
                    </Stack>
                </Container>
            </AppBar>

            <SideBar
                noProducts='No products in the cart.'
                title='Shopping Cart'
                close={handleCloseCart}
                isOpen={
                    isOpenCart} />


            <PopOver
                isOpen={open}
                close={handleClose} />
        </Fragment>
    );
}
export default HeaderBar;
