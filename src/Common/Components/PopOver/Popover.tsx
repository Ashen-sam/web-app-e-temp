import { Popover } from '@mui/material';
import React, { ReactNode } from 'react';

interface IPopover {
    links?: string[]
    isOpen?: boolean,
    close?: () => void,
    children?: ReactNode


}

const PopOver: React.FC<IPopover> = ({
    isOpen, close, children
}) => {
    return (
        <>
            <Popover
                sx={{
                    position: 'absolute'
                    , right: 0
                }}
                onMouseLeave={close}
                open={isOpen!}>
                {children}
            </Popover>
        </>
    )
}

export default PopOver
