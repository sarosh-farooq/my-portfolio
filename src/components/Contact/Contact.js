import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import * as styles from './Contact.module.css'



const Contact = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const postUserData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUserData({ ...userData, [name]: value });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = userData;

        if (name && email && message) {
            const res = fetch(
                "https://portfolio-5c5b3-default-rtdb.firebaseio.com/contact.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }
            );

            if (res) {
                setUserData({
                    name: "",
                    email: "",
                    message: "",
                });
                alert("Your message is submitted");
            } else {
                alert("Please fill the form");
            }
        } else {
            alert("Please fill the form");
        }
    };

    return (
        <Box id="contactme" className={styles.contact}>
            <Typography className={styles.hello} variant="h2">Contact</Typography>
            <form className={styles.form} id="contact-form" name="contact-form" method="POST" onSubmit={handleSubmit}>
                <Box className={styles.contactBox}>
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Name*" name="name" value={userData.name} onChange={postUserData} />
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Email Address*" name="email" value={userData.email} onChange={postUserData} />
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Message*" name="message" multiline rows={6} value={userData.message} onChange={postUserData} />
                    <Button type="submit" variant="contained" className={styles.Btn} onClick={handleSubmit}>Submit</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Contact