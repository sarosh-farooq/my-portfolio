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
        console.log(userData)
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if ( userData.name == '' && userData.email == '' && userData.message == '') {
            alert('Please fill the form completely')
        }
        else {
            setLoading(true)
        }
    }

    return (
        <Box id="contact" className={styles.contact}>
            <Typography className={styles.hello} variant="h2">Contact</Typography>
            <form className={styles.form} name="contact" method='POST' netlify onSubmit="submit">
                <Box className={styles.contactBox}>
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Name*" name="name" value={userData.name} onChange={postUserData} />
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Email Address*" name="email" value={userData.email} onChange={postUserData} />
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Message*" name="message" value={userData.message} onChange={postUserData} multiline rows={6} />
                    <Button type="submit" variant="contained" className={styles.Btn}>Submit</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Contact