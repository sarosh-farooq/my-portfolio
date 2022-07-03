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
        <Typography className={styles.noBold} variant="h3">I'm</Typography>
        <Typography className={styles.noBold} variant="h3">Sarosh Farooq</Typography>
        <hr className={styles.hr} />
      </Box>
      <Box>
        <Typography variant="body1">Fort-end Developer with four years of <br /> work experience </Typography>
        <Button sx={{ mt: 4 }} variant="contained">Download CV</Button>
      </Box>
      <Box className={styles.Flex}>
        <Typography variant="body2">Follow Me</Typography>
        <Box className={styles.smallHr}></Box>
        <IconButton className={styles.Btn} color='Warning'>
          <FacebookIcon fontSize='small' />
        </IconButton>
        <IconButton className={styles.Btn} color='Warning'>
          <InstagramIcon fontSize='small' />
        </IconButton>
        <IconButton className={styles.Btn} color='Warning'>
          <LinkedInIcon fontSize='small' />
        </IconButton>
        <IconButton className={styles.Btn} color='Warning'>
          <GitHubIcon fontSize='small' />
        </IconButton>

      </Box>
    </Box>
  )
}

export default Intro