import React from 'react'
import * as styles from './Skills.module.css'
import { Box, Typography } from '@mui/material'

const Skills = () => {
    return (
        <Box className={styles.skill}>
            <Typography className={styles.hello} variant="h2">SKILLS</Typography>
            <Box className={styles.skills}>
                <Box className={styles.skillList}>
                    <Typography className={styles.skillName}>Next JS</Typography>
                    <Box className={styles.skillRate}>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}>80%</Box>
                        <Box className={styles.circleGrey}></Box>
                        <Box className={styles.circleGrey}></Box>
                    </Box>
                </Box>
                <Box className={styles.skillList}>
                    <Typography className={styles.skillName}>React JS</Typography>
                    <Box className={styles.skillRate}>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}>90%</Box>
                        <Box className={styles.circleGrey}></Box>
                    </Box>
                </Box>
                <Box className={styles.skillList}>
                    <Typography className={styles.skillName}>Gatsby JS</Typography>
                    <Box className={styles.skillRate}>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}>70%</Box>
                        <Box className={styles.circleGrey}></Box>
                        <Box className={styles.circleGrey}></Box>
                        <Box className={styles.circleGrey}></Box>
                    </Box>
                </Box>
                <Box className={styles.skillList}>
                    <Typography className={styles.skillName}>Material UI</Typography>
                    <Box className={styles.skillRate}>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}>100%</Box>
                    </Box>
                </Box>
                <Box className={styles.skillList}>
                    <Typography className={styles.skillName}>Ant Design</Typography>
                    <Box className={styles.skillRate}>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}>100%</Box>
                    </Box>
                </Box>
                <Box className={styles.skillList}>
                    <Typography className={styles.skillName}>Tailwind CSS</Typography>
                    <Box className={styles.skillRate}>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}></Box>
                        <Box className={styles.circle}>100%</Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills