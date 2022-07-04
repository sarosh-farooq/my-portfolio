import React from 'react'
import * as styles from './Feedback.module.css'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRight from '@mui/icons-material/ArrowRightAlt';
import QuoteIcon from '@mui/icons-material/FormatQuote';





const steps = [
    {
        label: 'TearMark87',
        company: 'Fiverr',
        description: `Easy to work with. Answered all my questions and delivery was on time. I hope to move with this product and make a success out of it. Would definitely recommend him.`,
    },
    {
        label: 'Talha Abbas',
        company: 'Team Member',
        description:
            'I could see how much effort you put into creating that strategy. Great work!',
    },
    {
        label: 'Uzair Aslam',
        company: 'LinkedIn',
        description: `Amazing UI and clean code that reflects your efforts on this project. Keep going and Good luck!`,
    },
];

const Feedback = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };


    return (
        <Box className={styles.feedback}>
            <Typography className={styles.hello} variant="h2">FEEDBACK</Typography>
            <Box className={styles.stepper}>
                <QuoteIcon color='primary' className={styles.notion} />
                <Box sx={{ height: 255, maxWidth: {sm: 400, xs: '60%'}, width: '100%', p: 2, color: 'white' }}>
                    <Typography variant="subtitle1" className={styles.description} sx={{ textAlign: 'center', fontSize: {xs: '12px' , sm: '14px', md: '16px'} }}>{steps[activeStep].description}</Typography>
                    <Box>
                        <Typography variant="h5" color="primary" sx={{ textAlign: 'center', fontWeight: 600, mt: 2 }}>{steps[activeStep].label}</Typography>
                        <Typography variant="subtitle1" sx={{ textAlign: 'center', fontSize: {xs: '16px',sm: '20px', md: '24px'}}}>{steps[activeStep].company}</Typography>
                    </Box>
                </Box>

                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    sx={{ backgroundColor: 'transparent', color: 'transparent', top: '50%', width: {xs: '100%', sm: '90%', md: '80%'}, position: 'absolute' }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}

                        >
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </Box>
        </Box>
    )
}

export default Feedback

