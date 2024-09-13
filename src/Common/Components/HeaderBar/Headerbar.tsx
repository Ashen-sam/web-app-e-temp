import { Collapse, Fade, Grow, Paper, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import React, { Fragment, ReactNode, useEffect, useRef, useState } from 'react';
import { Heart, Search, ShoppingCart, User } from 'lucide-react';
import SideBar from '../Drawer/Drawer';
import UserBox from '../UserBox/UserBox';


interface IHeader {
    logoName?: string;
    logoImg?: ReactNode;
    links?: string[]

}

const HeaderBar: React.FC<IHeader> = ({
    logoImg
}) => {

    const [isOpenCart, setIsOpenCart] = useState(false)
    const [isPopOverOpen, setIsPopOverOpen] = useState(false)
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const handleCartOpen = () => {
        setIsOpenCart(true)
    }

    const handleCloseCart = () => {
        setIsOpenCart(false)
    }

    const handleOpenPopOver = () => {
        setIsPopOverOpen(true)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setIsPopOverOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (

        <Fragment>
            <AppBar position="fixed" elevation={1} sx={{
                backgroundColor: '#F0F8FF',
            }}>
                <Container maxWidth="lg">
                    <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} p={1}>
                        <Stack>
                            asd
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
                            <User color='#002244' size={20}
                                onClick={handleOpenPopOver}
                            />

                            <Fade in={isPopOverOpen}>
                                <Paper
                                    elevation={5}
                                    ref={popoverRef}
                                    sx={{
                                        backgroundColor: 'white',
                                        position: 'absolute',
                                        top: 40,
                                        right: -20,
                                        borderRadius: '3px',
                                        minHeight: 200,
                                        minWidth: 300
                                    }}
                                >
                                    <UserBox />
                                </Paper>
                            </Fade>


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
                isOpen={isOpenCart} />

        </Fragment>
    );
}
export default HeaderBar;
