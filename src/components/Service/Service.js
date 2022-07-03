import React from 'react'
import * as styles from './Service.module.css'
import { Typography, Box, Grid } from '@mui/material'
import { StaticImage } from "gatsby-plugin-image"

const Service = () => {
    return (
        <Box id="service" className={styles.service}>
            <Typography className={styles.hello} variant="h2">SERVICES</Typography>
            <Box mt='20px'>
                <Grid container
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >

                    <Grid container item xs={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item className={styles.serviceDetail}>
                            <Box className={styles.icon}>
                                <StaticImage
                                    src="../../images/next.png"
                                    alt="Next JS"
                                    placeholder="blurred"
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography variant="body2" className={styles.title}>Next JS</Typography>
                            <Typography variant="body2" className={styles.detail}>Next.js gives you the best developer experience with all the features you need for production.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        
                        <Grid item className={styles.serviceDetail2}>
                            <Box className={styles.icon}>
                                <StaticImage
                                    src="../../images/react.png"
                                    alt="React JS"
                                    placeholder="blurred"
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography variant="body2" className={styles.title}>React JS</Typography>
                            <Typography variant="body2" className={styles.detail}>React makes it painless to create interactive UIs. Design simple views for each state in your application.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        
                        <Grid item className={styles.serviceDetail}>
                            <Box className={styles.icon}>
                                <StaticImage
                                    src="../../images/gatsby.png"
                                    alt="Gatsby JS"
                                    placeholder="blurred"
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography variant="body2" className={styles.title}>Gatsby JS</Typography>
                            <Typography variant="body2" className={styles.detail}>Gatsby is the fast and flexible framework that makes building websites with any CMS, API, or database fun again.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        
                        <Grid item className={styles.serviceDetail2}>
                            <Box className={styles.icon}>
                                <StaticImage
                                    src="../../images/material.png"
                                    alt="Material UI"
                                    placeholder="blurred"
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography variant="body2" className={styles.title}>Material UI</Typography>
                            <Typography variant="body2" className={styles.detail}>MUI offers a comprehensive suite of UI tools to help you ship new features faster and to build the website</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        
                        <Grid item className={styles.serviceDetail}>
                            <Box className={styles.icon}>
                                <StaticImage
                                    src="../../images/tailwind.png"
                                    alt="Tailwind CSS"
                                    placeholder="blurred"
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography variant="body2" className={styles.title}>Tailwind CSS</Typography>
                            <Typography variant="body2" className={styles.detail}>A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={4}
                        direction="column"
                        justifyContent="center"
                        alignItems="center">
                        
                        <Grid item className={styles.serviceDetail2}>
                            <Box className={styles.icon}>
                                <StaticImage
                                    src="../../images/antd.png"
                                    alt="Ant Design"
                                    placeholder="blurred"
                                    width={60}
                                    height={60}
                                />
                            </Box>
                            <Typography variant="body2" className={styles.title}>Ant Design</Typography>
                            <Typography variant="body2" className={styles.detail}>A design system for enterprise-level products. Create an efficient and enjoyable work experience.</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


        </Box>
    )
}

export default Service