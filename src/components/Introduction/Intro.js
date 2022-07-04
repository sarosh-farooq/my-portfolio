import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Button } from 'gatsby-theme-material-ui'
import FacebookIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import * as styles from './Intro.module.css'

const Intro = () => {
  return (
    <Box id="home" className={styles.Relative}>
      <Box>
        <Typography className={styles.hello} variant="h1">HELLO</Typography>
      </Box>
      <Box>
        <Typography className={styles.noBold} variant="h3" sx={{fontSize: {xs: '25px',sm: '30px', md: '50px'}}}>I'm</Typography>
        <Typography className={styles.noBold} variant="h3" sx={{fontSize: {xs: '25px',sm: '30px', md: '50px'}}}>Sarosh Farooq</Typography>
        <hr className={styles.hr} />
      </Box>
      <Box>
        <Typography variant="body1" sx={{fontSize: {xs: '16px',sm: '20px', md: '32px'}}}>Fort-end Developer with four years of <br /> work experience </Typography>
        <a href="mailto:sarosh.faroq@gmail.com" style={{textDecoration: 'none'}}>
          <Button sx={{ mt: 4 }} variant="contained">Contact Me</Button>
        </a>
      </Box>
      <Box className={styles.Flex}>
        <Typography variant="body2">Follow Me</Typography>
        <Box className={styles.smallHr}></Box>
        <a href="https://www.facebook.com/sarosh.farooq.9" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.Btn} color='Warning'>
            <FacebookIcon fontSize='small' />
          </IconButton>
        </a>
        <a href="https://www.instagram.com/sarosh.faroq" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.Btn} color='Warning'>
            <InstagramIcon fontSize='small' />
          </IconButton>
        </a>
        <a href="https://www.linkedin.com/in/sarosh-farooq" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.Btn} color='Warning'>
            <LinkedInIcon fontSize='small' />
          </IconButton>
        </a>
        <a href="https://github.com/sarosh-farooq" target="_blank" rel="noopener noreferrer">
          <IconButton className={styles.Btn} color='Warning'>
            <GitHubIcon fontSize='small' />
          </IconButton>
        </a>

      </Box>
    </Box>
  )
}

export default Intro