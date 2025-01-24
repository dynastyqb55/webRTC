import  Box from '@mui/material/Box'
import { styled } from '@mui/system'
import React from 'react'


interface AuthBox {
    children: React.ReactNode
}

const BoxWrapper = styled('div')({
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000'
})

const AuthBox = (props: AuthBox) => {
    return(
        <BoxWrapper>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                bgcolor: '#fff',
                padding: '50px 40px',
                color: '#000'
            }}>
                {props.children}
            </Box>
        </BoxWrapper>
    )
}


export default AuthBox;