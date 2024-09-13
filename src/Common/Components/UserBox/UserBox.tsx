import { Box, Button, Stack, TextField, Typography } from "@mui/material"


interface IUserBox {
    open?: boolean,
    close?: () => void
}
const UserBox: React.FC<IUserBox> = ({

}) => {
    return (
        <Stack p={1.5} direction={'column'} justifyContent={'center'}
            alignItems={'center'} gap={1}>
            <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'} gap={2}>
                <Typography variant="h5">Sign in</Typography>
                <Typography variant="body1">Sign in</Typography>
            </Stack>

            <Stack width={'100%'} direction={'column'} gap={1}>
                <TextField placeholder="Username" />
                <TextField type="password" placeholder="Password" />
                <Button variant="contained">Submit</Button>
            </Stack>
        </Stack>
    )
}

export default UserBox
