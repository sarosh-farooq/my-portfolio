import React from 'react'
import { Box, Typography, Grid, Button } from '@mui/material'
import PropTypes from 'prop-types';
import { StaticImage } from "gatsby-plugin-image"
import StyledTabList from '../styled/StyledTabList'
import * as moment from 'moment'


import * as styles from './About.module.css'


const bio = [
    {
        title: 'Age',
        detail: moment("08/27/1999", "MM/DD/YYYY").fromNow().split(" ")[0]
    },
    {
        title: 'Nationality',
        detail: 'Pakistani'
    },
    {
        title: 'Freelance',
        detail: 'Available'
    },
    {
        title: 'Address',
        detail: 'Rahimyar Khan, Pakistan'
    },
    {
        title: 'Email',
        detail: 'sarosh.faroq@gmail.com'
    },
]

const TabList = ["Bio", "Education", "Experience"]

const About = () => {

    const [value, setValue] = React.useState(0);


    return (
        <Box id="about" className={styles.about}>
            <Typography className={styles.hello} variant="h2">ABOUT</Typography>
            <Box>
                <Box className={styles.AboutDetail}>
                    <Box className={styles.Flex2}>
                        <StaticImage
                            src="../../images/education.svg"
                            alt="Education"
                            placeholder="blurred"
                            className={styles.Image}
                        />
                    </Box>
                    <Box className={styles.Flex}>
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <StyledTabList value={value} setValue={setValue} TabList={TabList} />
                            <TabPanel value={value} index={0}>
                                <Box className={styles.bio}>
                                    <Typography variant="body2">I'm a young software engineer with a passion to achieve high skills. Currently, I'm working as a front-end developer. The technologies I can work with are Next JS, React JS, Gatsby Js, Material UI, CSS, Javascript, Bootstrap, HTML5, Tailwind CSS, and Ant Design.</Typography>
                                    <Typography variant="body2">My future goals include learning new web technologies and skills.</Typography>

                                    <Grid container spacing={1}>
                                        {bio.map((item, index) =>
                                            <Grid item xs={12} sm={6} key={index} className={styles.bioDetail}>
                                                <Typography variant="body2" sx={{ fontWeight: 600, display: 'inline' }} color="primary">{item.title} : . . .</Typography>
                                                <Typography variant="body2" sx={{ display: 'inline', ml: 1, fontWeight: 600, }}>{item.detail}</Typography>
                                            </Grid>
                                        )}
                                    </Grid>
                                    <Box className={styles.BtnGroup}>
                                        <a href="mailto:sarosh.faroq@gmail.com" style={{ textDecoration: 'none' }}>
                                            <Button variant="outlined" className={styles.Btn}>Contact Me</Button>
                                        </a>
                                        <a style={{ textDecoration: 'none' }} href="https://www.fiverr.com/saroshfarooq" target="_blank" rel="noopener noreferrer">
                                            <Button variant="contained" className={styles.Btn}>Hire Me</Button>
                                        </a>
                                    </Box>
                                </Box>
                            </TabPanel>
                            <TabPanel value={value} index={1}>

                                <Box className={styles.bio}>
                                    <Typography variant="body2">I feel honored for getting my education from a prestigious school & college. All these institutions helped me to build the dreams that I'm living now.</Typography>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12} className={styles.bioDetail}>
                                            <Typography variant="body1" sx={{ fontWeight: 600, }} color="primary">Undergraduate</Typography>
                                            <Typography variant="body2">BS Software Engineering From KFUEIT</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={styles.bioDetail}>
                                            <Typography variant="body1" sx={{ fontWeight: 600, }} color="primary">College</Typography>
                                            <Typography variant="body2">Punjab Groups of Colleges</Typography>
                                        </Grid>
                                        <Grid item xs={12} className={styles.bioDetail}>
                                            <Typography variant="body1" sx={{ fontWeight: 600, }} color="primary">School</Typography>
                                            <Typography variant="body2">National Garrison Cadet School </Typography>
                                        </Grid>
                                    </Grid>

                                </Box>

                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Typography variant="body2">Check out me Linkedin Account</Typography>
                            </TabPanel>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default About



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ px: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

