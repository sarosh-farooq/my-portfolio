import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import scrollTo from 'gatsby-plugin-smoothscroll';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: '#1890ff',
    },
});



const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 0,
    },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        borderRadius: 4,
        minHeight: '20px',
        height: '30px',
        minWidth: '80px',
        width: '30px',
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: 'primary.main',
            backgroundColor: '#ffffff21',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px',
            minWidth: '50px',
        },
    }),
);

export default function CustomizedTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == 0) {
            scrollTo('#home')
        }
        else if (newValue == 1) {
            scrollTo('#about')
        }
        else if (newValue == 2) {
            scrollTo('#service')
        }
        else if (newValue == 3) {
            scrollTo('#portfolio')
        }
        else if (newValue == 4) {
            scrollTo('#contactme')
        }
    };

    return (

        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
        >
            <StyledTab label="Home" />
            <StyledTab label="About" />
            <StyledTab label="Service" />
            <StyledTab label="Portfolio" />
            <StyledTab label="Contact" />
        </StyledTabs>

    );
}
