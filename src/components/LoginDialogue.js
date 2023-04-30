
import { Box, Dialog, Typography, List, ListItem, styled } from '@mui/material'
import React from 'react'
import { qrCodeImage } from '../constants/data'

const dialogStyle = {
  height: '700px',
  marginTop: '12%',
  width: '60%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  overflow: 'none'
}

const Boxrow = styled(Box)` 
  display: flex;
  justify-content: space-around;
`

const Boxcolumn = styled(Box)`
  padding: 52px 0 29px 0px;
`

const QrCode = styled('img') ({
    height: 264,
    width: 264,
})

const Title = styled(Typography)`
  font-family: inherit;
  font-size: 2rem;
  margin-bottom: 25px;
`

const LoginDialogue = () => {

  return (
    <React.Fragment>
        <Dialog open={true} PaperProps={{sx: dialogStyle}}>
          <Boxrow>
            <Boxcolumn>
              <Title>Use WhatsApp on your computer</Title>
              <List>
                <ListItem>1. Open WhatsApp on your phone</ListItem>
                <ListItem>2. Tap Menu Settings and linked devices</ListItem>
                <ListItem>3. Tap On Link A Device</ListItem>
              </List>
            </Boxcolumn>
            <Boxcolumn>
                <QrCode src={qrCodeImage} alt=''/>
            </Boxcolumn>
          </Boxrow>
        </Dialog>
    </React.Fragment>
  )
}

export default LoginDialogue;
