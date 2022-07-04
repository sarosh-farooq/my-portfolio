
import React, { useState } from "react"
import Box from '@mui/material/Box'
import { Container, Typography, Button, IconButton } from "@mui/material"
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import StyledTab from '../components/styled/StyledTab'
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
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

    const myTheme = useTheme();
    const [small, setSmall] = useState(myTheme.breakpoints.up('sm'));

    return (
        <>
            <ThemeProvider theme={theme}>

                {/*Header*/}
                <Box>
                    <Container sx={{ my: 2 }}>
                        <Box sx={{ display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}>
                            <Typography variant="h4" color='primary'>Sarosh</Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <StyledTab />
                            </Box>
                            <Box>
                                <a style={{ textDecoration: 'none' }} href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                    <Button variant="contained" size='large'>Hire Me</Button>
                                </a>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                {children}

                <Box sx={{ display: {xs: 'none', md: 'block'}}}>
                    <Container>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', my: 3 }}>
                            <Box sx={{ width: '45%', px: 2 }}>
                                <Typography variant="h4" color='primary'>Sarosh</Typography>
                                <Typography variant="body2" sx={{ py: 2, mr: 3 }}>I have 3+ years of experience working on various projects using trending technology. I can easily build responsive and fast e-commerce, blogging, and marketplace websites.</Typography>
                                <Box>
                                    <a href="https://www.facebook.com/sarosh.farooq.9" target="_blank" rel="noopener noreferrer">
                                        <IconButton color='primary'>
                                            <FacebookIcon fontSize='small' />
                                        </IconButton>
                                    </a>
                                    <a href="https://www.instagram.com/sarosh.faroq" target="_blank" rel="noopener noreferrer">
                                        <IconButton color='primary'>
                                            <InstagramIcon fontSize='small' />
                                        </IconButton>
                                    </a>
                                    <a href="https://www.linkedin.com/in/sarosh-farooq" target="_blank" rel="noopener noreferrer">
                                        <IconButton color='primary'>
                                            <LinkedInIcon fontSize='small' />
                                        </IconButton>
                                    </a>
                                    <a href="https://github.com/sarosh-farooq" target="_blank" rel="noopener noreferrer">
                                        <IconButton color='primary'>
                                            <GitHubIcon fontSize='small' />
                                        </IconButton>
                                    </a>
                                </Box>
                            </Box>
                            <Box sx={{ width: '20%', mt: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ mb: 3 }}>Quick Links</Typography>
                                <Button className={styles.Link} onClick={() => scrollTo('#home')}>Home</Button>
                                <Button className={styles.Link} onClick={() => scrollTo('#about')}>About Me</Button>
                                <Button className={styles.Link} onClick={() => scrollTo('#portfolio')}>Portfolio</Button>
                                <Button className={styles.Link} onClick={() => scrollTo('#blogs')}>Blog</Button>
                                {/* <Button className={styles.Link}>Gallery</Button> */}
                            </Box>
                            <Box sx={{ width: '20%', mt: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ mb: 3 }}>Services</Typography>
                                <a href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                    <Button className={styles.Link}>Next Js</Button>
                                </a>
                                <a href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                    <Button className={styles.Link}>React Js</Button>
                                </a>
                                <a href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                    <Button className={styles.Link}>Gatsby </Button>
                                </a>
                                <a href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                    <Button className={styles.Link}>Material UI</Button>
                                </a>
                                <a href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                    <Button className={styles.Link}>Ant Design</Button>
                                </a>
                            </Box >
                            <Box sx={{ width: '20%', mt: '10px', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'column' }}>
                                <Typography variant="h6" sx={{ mb: 3 }}>Services</Typography>
                                <Typography variant="body2" sx={{ mb: 1.5 }}>Rahimyar Khan, Punjab, Pakistan</Typography>
                                <Typography variant="body2">Email: sarosh.faroq@gmail.com</Typography>
                            </Box>

                        </Box>
                    </Container>
                    <hr />
                    <Typography variant="subtitle1" sx={{ p: 1, textAlign: 'center' }}>@2022, All Rights Reserved</Typography>
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