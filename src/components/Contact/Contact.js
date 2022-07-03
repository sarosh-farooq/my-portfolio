import React, { useState } from 'react'
import { Box, Typography, TextField, Button } from '@mui/material'
import * as styles from './Contact.module.css'



const Contact = () => {

    // const [userData, setUserData] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    // });

    // const postUserData = (event) => {
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     setUserData({ ...userData, [name]: value });
    //     console.log(userData)
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     if ( userData.name == '' && userData.email == '' && userData.message == '') {
    //         alert('Please fill the form completely')
    //     }
    //     else {
    //         setLoading(true)
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        let myForm = document.getElementById("contact-form");
        let formData = new FormData(myForm);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => console.log("Form successfully submitted"))
            .catch((error) => alert(error));
    };

    return (
        <Box id="contactme" className={styles.contact}>
            <Typography className={styles.hello} variant="h2">Contact</Typography>
            <form className={styles.form} id="contact-form" name="contact-form" method='POST' netlify onSubmit="submit">
                <Box className={styles.contactBox}>
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Name*" name="name" />
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Email Address*" name="email" />
                    <TextField hiddenLabel fullWidth={true} variant="outlined" placeholder="Your Message*" name="message" multiline rows={6} />
                    <Button type="submit" variant="contained" className={styles.Btn} onClick={handleSubmit}>Submit</Button>
                </Box>
            </form>
        </Box>
    )
}

export default Contact