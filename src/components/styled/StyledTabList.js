import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

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
        // minWidth: '80px',
        // width: '30px',
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: 'primary.main',
            backgroundColor: '#ffffff21',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export default function CustomizedTabs({ value, setValue, TabList }) {


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="styled tabs example"
        >
            {TabList.map((item, index) =>
                    <StyledTab label={item} key={index} />
            )}
        </StyledTabs>

    );
}
