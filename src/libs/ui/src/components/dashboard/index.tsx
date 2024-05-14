import React, { useState } from 'react'
import style from './style.module.scss';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from 'antd';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import { DatePicker } from 'baseui/datepicker';
import { Divider } from '@mui/material';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
const data = [
    {
        name: 'Opportunities',
        count: 46,
    },
    {
        name: 'Projects',
        count: 8,
    },
    {
        name: 'Customers',
        count: 8,
    }
];

const engine = new Styletron();
const Dashboard = () => {
    const [rangeDate, setRangeDate] = useState<any>([]);
    return (
        <div className={style.main}>
            <Box sx={{ flexGrow: 10 }}>
                <Grid container spacing={1} >
                    <Grid item xs="auto" flexGrow={1} padding={"0px !important"} marginTop={"20px"} marginRight={"10px"}>
                        <Grid container spacing={2} justifyContent={"space-between"} marginBottom={"10px"} >
                            <Grid item xs={5} margin={"10px"}>
                                <div className={style.client}>Welcome Sunollo Client</div>
                                <span className={style.subclient}>Today • {Date.now()} • Singapore</span>
                            </Grid>
                            <Grid item xs="auto" margin={"10px"}>
                                <Stack direction="row" spacing={3}>
                                    <Button className={style.btn}>Create Report</Button>
                                    <span style={{zIndex:100000000, width:"250px"}}>
                                        <StyletronProvider value={engine}>
                                            <BaseProvider theme={LightTheme}>
                                                <DatePicker
                                                    range
                                                    value={rangeDate}
                                                    onChange={({ date }) => setRangeDate(date)}
                                                    placeholder="YYYY/MM/DD – YYYY/MM/DD"
                                                    size= "compact"
                                                />
                                            </BaseProvider>
                                        </StyletronProvider>
                                    </span>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Divider orientation="horizontal" variant="middle" flexItem />
                        <Grid container margin={"10px"} >
                            <Stack spacing={3} direction={"row"}>
                                <Grid item xs="auto" padding={"0px !important"} >
                                    <Stack direction="row" spacing={3}>
                                        <Stack spacing={3}>
                                            <Card sx={{ minWidth: 175, minHeight: 117, backgroundColor: '#eff4fe' }}>
                                                <CardContent>
                                                    <Typography gutterBottom color="gray" fontSize={14}>
                                                        Total Projects
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" fontSize={30}>
                                                        8
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 175, minHeight: 117, backgroundColor: "#f9f1ff" }}>
                                                <CardContent>
                                                    <Typography gutterBottom color="gray" fontSize={14}>
                                                        Completed Projects
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" fontSize={30}>
                                                        2
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Stack>
                                        <Stack spacing={3}>
                                            <Card sx={{ minWidth: 175, minHeight: 117, backgroundColor: "#f9f1ff" }}>
                                                <CardContent>
                                                    <Typography gutterBottom color="gray" fontSize={14}>
                                                        Ongoing Projects
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" fontSize={30}>
                                                        5
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                            <Card sx={{ minWidth: 175, minHeight: 117, backgroundColor: "#feeff9" }}>
                                                <CardContent>
                                                    <Typography gutterBottom color="gray" fontSize={14}>
                                                        Upcoming Projects
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" fontSize={30}>
                                                        6
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Stack>
                                    </Stack>
                                </Grid>
                                <Grid item xs="auto" padding={"0px !important"} marginLeft={"15px"} >
                                    <Card className={style.chart} sx={{ backgroundColor: '#eff4fe', padding: "8px" }}>
                                        <span className={style.heading}>Projects</span>
                                        <ResponsiveContainer height={215} width={390} >
                                            <BarChart data={data} layout={'vertical'}>
                                                <XAxis dataKey="count" type="number" width={90} />
                                                <YAxis dataKey="name" type="category" width={100} fontSize={16} />
                                                <Bar dataKey="count" fill="#C490F9" layout={'vertical'} barSize={9} />
                                                <Tooltip />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </Card>
                                </Grid>
                            </Stack>
                        </Grid>
                        <Grid xs={8} margin={"10px"}>
                            <Box className={style.mapbox}>
                                <span className={style.maphead}>Projects by locations</span>
                                <MapContainer center={[22.3595, 82.7501]} zoom={16} scrollWheelZoom={true} className={style.map}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[22.3595, 82.7501]} />
                                    <Marker position={[22.3574, 82.7512]} />
                                    <Marker position={[22.3574, 82.7477]} />
                                </MapContainer>
                            </Box>
                        </Grid>
                    </Grid>
                    <Divider orientation='vertical' variant='middle' flexItem />
                    <Grid item xs="auto" flexGrow={800000} padding={"0px !important"} margin={"20px 10px 0 25px"}>
                        <div className={style.activity}>
                            <h4 className={style.act}>Activities</h4>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                            <Divider orientation="horizontal" flexItem />
                            <span className={style.content}>
                                <p className={style.head}>Contact stage updated</p>
                                <p className={style.para}>Contact skipped when moving from Prospect to Sunollo Client by Sunollo client</p>
                                <div className={style.date}>{Date()}</div>
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Dashboard