import React from 'react'
import * as styles from './Projects.module.css'
import { Box, Typography } from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"


const Projects = () => {

    return (
        <Box className={styles.projects}>
            <Typography className={styles.hello} variant="h2">PROJECTS</Typography>
            <Box className={styles.list}>
                <Box className={styles.item}>
                    <StaticImage
                        src="../../images/fiverr.png"
                        alt="Education"
                        placeholder="blurred"
                        className={styles.image}
                    />
                    <Typography variant="subtitle2" sx={{textAlign: 'center'}}>10+ Projects</Typography>
                </Box>
                <Box className={styles.item}>
                    <StaticImage
                        src="../../images/upwork.png"
                        alt="Education"
                        placeholder="blurred"
                        className={styles.image}
                        
                    />
                    <Typography variant="subtitle2" sx={{textAlign: 'center'}}>0 Projects</Typography>
                </Box>
                <Box className={styles.item}>
                    <StaticImage
                        src="../../images/github.png"
                        alt="Education"
                        placeholder="blurred"
                        className={styles.image}
                        
                    />
                    <Typography variant="subtitle2" sx={{textAlign: 'center'}}>20+ Repositories</Typography>
                </Box>

            </Box>
        </Box>
    )
}

export default Projects


