
import React from "react";
import LoginDialogue from "./LoginDialogue";
import {AppBar, Toolbar, Box, styled} from '@mui/material'


const BoxContainer = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`

const Header = styled(AppBar)`
    height: 200px;
    background-color: #00A884;
    color: #fff;
    box-shadow: none;
`

const Messenger = () => {

    return(

        <React.Fragment>
            <BoxContainer>
                <Header>
                    <Toolbar></Toolbar>
                </Header>
                <LoginDialogue/>
            </BoxContainer>
        </React.Fragment>

    )
}

export default Messenger;