import React, { useState } from 'react'
import * as styles from './Portfolio.module.css'
import { Box, Grid, Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import IconButton from '@mui/material/IconButton';

import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { GatsbyImage } from "gatsby-plugin-image"
import { useTheme } from '@mui/material/styles';


import StyledTabList from '../styled/StyledTabList'


const TabList = ["All", "Next JS", "React JS", "Gatsby JS", "Material UI"]

const Portfolio = () => {



    const data = useStaticQuery(graphql`
    query blogs {
        allProjectsJson {
          edges {
            node {
              portfolio {
                name
                type
                url
                img {
                    childImageSharp {
                        gatsbyImageData
                      }
                }
              }
            }
          }
        }
      }

    `)
    const theme = useTheme();
    const [portfolio, setPortfolio] = useState(data.allProjectsJson.edges[0].node.portfolio);
    const [filter, setFilter] = useState(portfolio);
    const [value, setValue] = React.useState(0);
    const [filterData, setFilterData] = useState("");



    return (
        <Box id="portfolio" className={styles.portfolio}>
            <Typography className={styles.hello} variant="h2">PORTFOLIO</Typography>
            <Box sx={{ width: '100%', typography: 'body1', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                <StyledTabList value={value} setValue={setValue} TabList={TabList} setFilter={setFilter} filter={filter} portfolio={portfolio} isPortfolio={true} />
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {/* <ImageList cols={3} gap={8}> */}
                    {filter.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <ImageListItem key={index}>

                                <Box className={styles.Image}>
                                    {/* <Img fluid={item.img.childImageSharp.fluid} /> */}
                                    <GatsbyImage image={item.img.childImageSharp.gatsbyImageData} />
                                </Box>

                                <ImageListItemBar
                                    title={item.name}
                                    subtitle={item.type}
                                    actionIcon={

                                        <a href={item.url} target="_blank" rel="noopener noreferrer">

                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.name}`}
                                            >
                                                <OpenInNewIcon />
                                            </IconButton>
                                        </a>


                                    }
                                />
                            </ImageListItem>
                        </Grid>
                    ))}
                    {/* </ImageList> */}
                </Grid>
            </Box>
        </Box>
    )
}

export default Portfolio


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