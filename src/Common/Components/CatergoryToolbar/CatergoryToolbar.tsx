import { Button } from "@mui/material"
import PopOver from "../PopOver/Popover"
import { useState } from "react"

const CatergoryToolbar = () => {
    const [isOpen, setIsOpen] = useState(false)


    return (
        <>
            <Button disableRipple sx={{
                color: '#002244',
                cursor: 'pointer'
            }} variant="text" onClick={() => {
                setIsOpen(true)
            }}>
                Browse Catergories
            </Button>
            <PopOver
                isOpen={isOpen}
            />


        </>
    )
}

export default CatergoryToolbar
