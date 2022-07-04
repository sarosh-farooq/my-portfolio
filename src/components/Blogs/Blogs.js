import React from 'react'
import { Link } from 'gatsby';
import { Box, Typography, IconButton } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import * as styles from './Blogs.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img from 'gatsby-image'
import * as moment from 'moment'


function Blogs({ blogList }) {

    const settings = {
        // className: "center",
        // centerMode: true,
        // centerPadding: "60px",
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <div
                style={{
                    padding: "-20px",
                    marginTop: "30px",
                    bottom: '-50px'
                }}
            >
                <ul style={{ margin: "0px", color: 'transparent' }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <Box
                className={styles.list}
            >
                {i + 1}
            </Box>
        )

    };

    return (
        <Box id="blogs" className={styles.blogs}>
            <Typography className={styles.hello} variant="h2">Blogs</Typography>
            <Box className={styles.BlogList}>
                <Slider {...settings}>

                    {blogList.map((blog, index) =>
                        <div key={index}>
                            <Card sx={{ borderRadius: '10px', backgroundColor: 'info.main', mx: 2 }}>

                                <CardMedia className={styles.image}>
                                    <Img fluid={blog.frontmatter.image.childImageSharp.fluid} />
                                </CardMedia>
                                <CardContent>
                                    <Box className={styles.FlexTime}>
                                        <Typography variant="body2" color="success">{blog.frontmatter.date}</Typography>
                                        <Typography variant="body2" color="primary">{blog.frontmatter.category}</Typography>
                                    </Box>
                                    <Typography gutterBottom variant="h6" component="div" color="success" className={styles.blogTitle}>
                                        {blog.frontmatter.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className={styles.blogDetail}>
                                        {blog.frontmatter.metaDescription}
                                    </Typography>
                                    <Box className={styles.Btn}>
                                        <Link to={"blogs/" + blog.frontmatter.slug} key={blog.id} className={styles.Link}>
                                            <Button variant="contained" color="primary">Read More</Button>
                                        </Link>
                                    </Box>
                                </CardContent>

                            </Card>
                        </div>
                    )}

                </Slider>
            </Box>
        </Box>
    )
}

export default Blogs