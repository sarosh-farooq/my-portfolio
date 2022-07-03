
import React, { useState } from "react"
import Box from '@mui/material/Box'
import { Container, Typography, Button, IconButton } from "@mui/material"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import StyledTab from '../components/styled/StyledTab'
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "gatsby"
import '../styles/global.css'
import * as styles from './Layout.module.css'


const theme = createTheme({
    palette: {
        primary: {
            main: '#627AFF',
        },
        secondary: {
            main: '#090A1A',
        },
        info: {
            main: '#171B3C',
        },
        success: {
            main: '#000000'
        },
        Warning: {
            main: '#ffffff'
        },
        // error: {
        //     main: '#ff0000',
        // },
    },
    typography: {
        allVariants: {
            color: 'white',
            fontFamily: 'Nunito, sans-serif',
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { disabled: true },
                    style: {
                        color: 'white !important',
                        // backgroundColor: 'red'
                    },
                },
            ]
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: '#171B3C',
                    color: 'white'
                }
            }
        },
    }
})

const Layout = ({ children }) => {

    return (
        <>
            <ThemeProvider theme={theme}>

                {/*Header*/}
                <Box>
                    <Container sx={{ my: 2 }}>
                        <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h4" color='primary'>Sarosh</Typography>
                            <Box>
                                <StyledTab />
                            </Box>
                            <Box>
                                <Button variant="contained" size='large'>Hire Me</Button>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {children}

                <Box>
                    <Container>
                        <Box sx={{display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', my:3}}>
                            <Box sx={{width: '45%', px: 2}}>
                                <Typography variant="h4" color='primary'>Sarosh</Typography>
                                <Typography variant="body2" sx={{py: 2}}>I have 3+ years of experience working on various projects using trending technology. I can easily build responsive and fast e-commerce, blogging, and marketplace websites.</Typography>
                                <Box>
                                    <IconButton color='primary'>
                                        <FacebookIcon fontSize='small' />
                                    </IconButton>
                                    <IconButton color='primary'>
                                        <InstagramIcon fontSize='small' />
                                    </IconButton>
                                    <IconButton color='primary'>
                                        <LinkedInIcon fontSize='small' />
                                    </IconButton>
                                    <IconButton color='primary'>
                                        <GitHubIcon fontSize='small' />
                                    </IconButton>
                                </Box>
                            </Box>
                            <Box sx={{width: '20%', mt: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column'}}>
                                <Typography variant="h6" sx={{mb:3}}>Quick Links</Typography>
                                <Link className={styles.Link}>Home</Link>
                                <Link className={styles.Link}>About Me</Link>
                                <Link className={styles.Link}>Portfolio</Link>
                                <Link className={styles.Link}>Blog</Link>
                                <Link className={styles.Link}>Gallery</Link>
                            </Box>
                            <Box sx={{width: '20%', mt: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column'}}>
                                <Typography variant="h6" sx={{mb:3}}>Services</Typography>
                                <Link className={styles.Link}>Next Js</Link>
                                <Link className={styles.Link}>React Js</Link>
                                <Link className={styles.Link}>Gatsby </Link>
                                <Link className={styles.Link}>Material UI</Link>
                                <Link className={styles.Link}>Ant Design</Link>
                            </Box >
                            <Box sx={{width: '20%', mt: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column'}}>
                                <Typography variant="h6" sx={{mb:3}}>Services</Typography>
                                <Typography variant="body2" sx={{mb:3}}>Rahimyar Khan, Punjab, Pakistan</Typography>
                                <Typography variant="body2">Email: sarosh.faroq@gmail.com</Typography>
                            </Box>

                        </Box>
                    </Container>
                    <hr />
                    <Typography variant="subtitle1" sx={{p: 1, textAlign: 'center'}}>@2022, All Rights Reserved</Typography>
                </Box>
            </ThemeProvider>
        </>
    )
}

export default Layout

const Menu = () => {
    return (
        <ul className="menu">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>
    )
}