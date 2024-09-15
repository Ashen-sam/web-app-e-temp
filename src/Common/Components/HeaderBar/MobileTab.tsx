import { Stack, useTheme } from '@mui/material'
import { Children, ReactNode } from 'react'


interface IMobile {
    children?: ReactNode
}
const MobileTab: React.FC<IMobile> = ({
    children
}) => {
    const theme = useTheme()
    return (
        <Stack
            sx={{
                backgroundColor: theme.palette.primary.main,
            }}
            position={"fixed"}
            bottom={-6}
            right={0}
            width={"100%"}
            display={{
                xs: "flex",
                sm: "flex",
                md: "none",
            }}
            alignItems={"center"}
            direction={"row"}
            gap={3}
            p={1}
            justifyContent={"space-evenly"}>
            {children}
        </Stack>
    )
}

export default MobileTab
