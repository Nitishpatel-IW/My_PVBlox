import style from './style.module.scss';
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Divider, Grid, Stack } from '@mui/material';
import { Button, SHAPE } from 'baseui/button';
import { SyntheticEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@material-ui/lab/TabPanel';
import TabContext from '@material-ui/lab/TabContext';
import Table from '../table';
import { MultiStepIndicator } from '../progressBar';
import { stages } from '../../../../common/constant/testData';
import InputFileUpload from '../fileuploadButton';
import { Block } from 'baseui/block';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import Fileupload from '../fileuploader';

const engine = new Styletron();

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
        fontWeight: 400,
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

    const [addNotes, setAddNotes] = useState("");
    const [addTask, setAddTask] = useState("");
    const [value, setValue] = useState('1');
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    const [task, setTask] = useState('1');
    const handleTaskChange = (event: SyntheticEvent, newValue: string) => {
        setTask(newValue);
    };
    const [currentStageIndex, setCurrentStageIndex] = useState(0);

    const updateStages = (index: number) => {
        return stages.map((stage, i) => {
            if (i < index) {
                return { ...stage, status: 'completed' };
            } else if (i === index) return { ...stage, status: 'active' };
            else {
                return stage;
            }
        });
    };
    return (
        <div className={style.main}>
            <Grid container spacing={2} justifyContent={"space-between"} marginBottom={"10px"} >
                <Grid item xs={5} margin={"10px"}>
                    <div className={style.client}>NA<div style={{height:"10px", width:"10px", borderRadius:"100%", backgroundColor:"grey", marginLeft:"10px"}}></div></div>
                    <span className={style.subClient}>{Date.now()}</span>
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
                    <TabPanel value="1" style={{ padding: "25px 10px" }}>
                        <Grid container justifyContent={'space-between'} style={{ marginBottom: "10px" }}>
                            <Grid xs="auto" minWidth={900} direction={'column'} overflow={'clip'}>
                                <MultiStepIndicator
                                    active={currentStageIndex}
                                    tabs={updateStages(currentStageIndex)}
                                />
                            </Grid>
                            <Grid xs="auto">
                                <Button className={style.progressbtn}>Complete this stage</Button>
                            </Grid>
                        </Grid>
                        <Divider orientation="horizontal" flexItem style={{ margin: "10px 0", width: "100%", borderColor: " rgb(238, 238, 238) " }} />
                        <Grid container justifyContent={'space-between'}>
                            <Grid xs={4}>
                                <Box sx={{ border: "1px solid rgb(238, 238, 238)", borderRadius: "9px", marginTop: "10px" }}>
                                    <div className={style.editcontainer}>
                                        <p className={style.p1}>Opportunity details</p>
                                        <p className={style.p1}>Check and confirm the details to ensure that everything is up-to-date.</p>
                                        <Block>
                                            <Button className={style.editbtn}>Edit Prospect</Button>
                                            <InputFileUpload />
                                        </Block>
                                        <Divider orientation="horizontal" flexItem style={{ margin: "20px 0", width: "100%", borderColor: " rgb(238, 238, 238) " }} />
                                        <p className={style.p1}>Online Estimate</p>
                                        <Grid container>
                                            <Grid xs={6} container rowGap={3}>
                                                <Grid>
                                                    <div className={style.p1}>System Size</div>
                                                    <span className={style.value}>1.71KW</span>
                                                </Grid>
                                                <Grid>
                                                    <div className={style.p1}>Maintenance & Upgrade</div>
                                                    <span className={style.value}>20yrs</span>
                                                </Grid>
                                            </Grid>
                                            <Grid xs={6}>
                                                <div className={style.p1}>Monthly Lease</div>
                                                <span className={style.value}>$20/mo</span>
                                            </Grid>
                                        </Grid>
                                        <Grid container direction={"row"} justifyContent={'space-between'} margin={"20px 0"}>
                                            <Grid xs="auto">
                                                <Button className={style.preview}>Preview</Button>
                                            </Grid>
                                            <Grid xs="auto" display={'flex'} justifyContent={'space-between'}>
                                                <Button className={style.download} shape={SHAPE.square}>
                                                    <FileDownloadOutlinedIcon fontSize='small' />
                                                </Button>
                                                <Button className={style.share} shape={SHAPE.square}>
                                                    <ShareOutlinedIcon fontSize='small' />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem style={{ borderColor: " rgb(238, 238, 238) " }} />
                            <Grid minWidth={780}>
                                <Grid xs="auto" height={"fitcontent"} style={{ borderRadius: "8px", backgroundColor: 'rgb(238, 238, 238)', maxHeight: "250px", padding: "30px",marginBottom:"20px" }}>
                                    <Box sx={{ width: '100%', }}>
                                        <TabContext value={task}>
                                            <Box >
                                                <AntTabs value={task} onChange={handleTaskChange}>
                                                    <AntTab label="Tasks" value="1" />
                                                    <AntTab label="Notes" value="2" />
                                                    <AntTab label="Attachments" value="3" />
                                                </AntTabs>
                                            </Box>
                                            <TabPanel value="1" style={{ padding: "30px 0" }}>
                                                <Stack direction={'row'} spacing={2}>
                                                    <input
                                                        type='text'
                                                        style={{ border: '2px solid lightgrey', borderRadius: "10px", padding: "14px", fontSize: "14px", width: "80%" }}
                                                        value={addTask}
                                                        onChange={e => setAddTask(e.target.value)}
                                                        placeholder="Add a Task"
                                                    />
                                                    <Button style={{ border: "none", fontSize: "15px", }} disabled={!addTask && true} className={addTask ? style.disableBtn : ""}>Add Tasks</Button>
                                                </Stack>
                                            </TabPanel>
                                            <TabPanel value="2" style={{ padding: "30px 0" }}>
                                                <Stack direction={'row'} spacing={2}>
                                                    <input
                                                        type='text'
                                                        style={{ border: '2px solid lightgrey', borderRadius: "10px", padding: "14px", fontSize: "14px", width: "80%" }}
                                                        value={addNotes}
                                                        onChange={e => setAddNotes(e.target.value)}
                                                        placeholder="Add a quick notes related to the task"
                                                    />
                                                    <Button style={{ border: "none", fontSize: "15px", }} disabled={!addNotes && true} className={addNotes ? style.disableBtn : ""}>Add Notes</Button>
                                                </Stack>
                                            </TabPanel>
                                            <TabPanel value="3" style={{ padding: "15px 0" }}>
                                                <StyletronProvider value={engine}>
                                                    <BaseProvider theme={LightTheme}>
                                                        <Fileupload />
                                                    </BaseProvider>
                                                </StyletronProvider>
                                            </TabPanel>
                                        </TabContext>
                                    </Box>
                                </Grid>
                                <Divider orientation="horizontal" flexItem style={{ borderColor: " rgb(238, 238, 238) " }} />
                                <Grid>
                                    <div>
                                        Hello
                                    </div>
                                    <div>
                                        Notes
                                    </div>
                                    <div>
                                        Activity
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value="2">
                        <Table />
                    </TabPanel>
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