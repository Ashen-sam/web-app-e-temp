import { Button, Divider, Drawer, Stack, Typography } from '@mui/material'
import { CircleX } from 'lucide-react'
import React, { ReactNode } from 'react'
import image from '../../../../public/Images/abandoned-cart.png'

interface ISideBar {
    close?: () => void
    isOpen?: boolean
    title?: string
    children?: ReactNode
    noProducts?: string
}
const SideBar: React.FC<ISideBar> = ({
    isOpen, close, title, noProducts
}) => {
    return (
        <Drawer anchor='right' variant='temporary' open={isOpen} >
            <Stack minWidth={{
                lg: 450,
                sm: 400,
                xs: 350
            }} minHeight={'95vh'}>
                <Stack p={2} sx={{
                    backgroundColor: '#034694'
                }} >

                    <Typography color='whitesmoke' fontSize={'1.3rem'}>
                        {title}
                    </Typography>

                </Stack>
                <Divider />

                <Stack minHeight={'80vh'} direction={'column'} alignItems={'center'} justifyContent={'center'}>

                    <Stack direction={'column'} gap={1} justifyContent={'center'} alignItems={'center'}>
                        <img src={image} alt="empty cart" width={100} />
                        <Typography fontWeight={'500'} fontSize={'1.1rem'} color='gray'>{noProducts}</Typography>
                        <Button variant='contained' disableElevation sx={{
                            backgroundColor: '#034694'
                        }}>
                            Return to shop
                        </Button>
                    </Stack>


                </Stack>


            </Stack >
            <CircleX style={{
                color: 'whitesmoke',
                position: 'absolute',
                cursor: 'pointer',
                right: '20px',
                top: '20px'
            }} onClick={close} />
        </Drawer >
    )
}

export default SideBar
