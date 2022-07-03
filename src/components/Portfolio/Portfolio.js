import React, { useState } from 'react'
import * as styles from './Portfolio.module.css'
import { Box, Typography } from '@mui/material'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import MuiLink from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

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

    const [portfolio, setPortfolio] = useState(data.allProjectsJson.edges[0].node.portfolio);

    const [value, setValue] = React.useState(0);


    return (
        <Box id="portfolio" className={styles.portfolio}>
            <Typography className={styles.hello} variant="h2">PORTFOLIO</Typography>
            <Box sx={{ width: '100%', typography: 'body1', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
                <StyledTabList value={value} setValue={setValue} TabList={TabList} />
            </Box>
            <Box>
                <ImageList cols={3} gap={8}>
                    {portfolio.map((item, index) => (
                        <ImageListItem key={index}>
                            {/* <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            /> */}
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
                    ))}
                </ImageList>
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