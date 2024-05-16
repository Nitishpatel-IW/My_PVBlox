import style from './style.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Divider, Grid, Stack } from '@mui/material';
import { Button } from 'baseui/button';
import { SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Table from '../table';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        backgroundColor: 'lightgreen',
        height: "5px",
    },
});

const AntTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        minWidth: 0,
        [theme.breakpoints.up('sm')]: {
            minWidth: 0,
        },
        fontWeight:400,
        fontSize: "15px",
        marginRight: theme.spacing(0),
        color: 'gray',
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            backgroundColor: '#e8e8e8',
            opacity: 1,
        },
        '&.Mui-selected': {
            color: 'black',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&.Mui-focusVisible': {
            backgroundColor: '#d1eaff',
        },
    }),
);

interface StyledTabProps {
    label: string;
    value: string;
}

const Details = () => {

    const [value, setValue] = useState('1');
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className={style.main}>
            <Grid container spacing={2} justifyContent={"space-between"} marginBottom={"10px"} >
                <Grid item xs={5} margin={"10px"}>
                    <div className={style.client}>All Opportunities</div>
                    <span className={style.subClient}>9 items • {Date.now()} • Singapore</span>
                </Grid>
                <Grid item xs="auto" margin={"10px"} alignItems={'center'}>
                    <Stack direction="row">
                        <Button className={style.filter}>Assign</Button>
                        <Divider orientation='vertical' flexItem style={{ marginLeft: "15px", marginRight: "15px" }} />
                        <Button className={style.btn}>Convert</Button>
                        <Button className={style.dot}>More</Button>
                        <span className={style.clear}>
                            <ClearIcon style={{ height: "22px", width: "auto" }} />
                        </span>
                    </Stack>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%' }}>
                <TabContext value={value}>
                    <Box sx={{ bgcolor: '#fff' }}>
                        <AntTabs value={value} onChange={handleChange}>
                            <AntTab label="Manage" value="1" />
                            <AntTab label="Estimate" value="2" />
                            <AntTab label="All Tasks" value="3" />
                            <AntTab label="Attachment" value="4" />
                            <AntTab label="Notes" value="5" />
                            <AntTab label="Overview" value="6" />
                        </AntTabs>
                    </Box>
                    <TabPanel value="1">
                        <Table />
                        <h1>Hello</h1>
                    </TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                    <TabPanel value="4">Item One</TabPanel>
                    <TabPanel value="5">Item Two</TabPanel>
                    <TabPanel value="6">Item Three</TabPanel>
                </TabContext>
            </Box>
        </div >
    )
}

export default Details;