import style from './style.module.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Block } from 'baseui/block';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import { Divider, Grid, Stack } from '@mui/material';
import { Button } from 'baseui/button';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, useStyletron } from 'baseui';
import {
  StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
  NumericalColumn,
  StringColumn,
  NUMERICAL_FORMATS,
  CustomColumn,
} from "baseui/data-table";
import { Space } from 'antd';
import Table from '../table';

const engine = new Styletron();

type RowDataT = [string, boolean, string, number, number, number, any];

const columns = [
  StringColumn({
    title: "Name",
    mapDataToValue: (data: RowDataT) => data[0],
  }),
  BooleanColumn({
    title: "Address",
    mapDataToValue: (data: RowDataT) => data[1],
  }),
  CategoricalColumn({
    title: "Genre",
    mapDataToValue: (data: RowDataT) => data[2],
  }),
  NumericalColumn({
    title: "Production Budget (millions)",
    format: NUMERICAL_FORMATS.ACCOUNTING,
    mapDataToValue: (data: RowDataT) => data[3],
  }),
  NumericalColumn({
    title: "Box Office (millions)",
    format: NUMERICAL_FORMATS.ACCOUNTING,
    mapDataToValue: (data: RowDataT) => data[4],
  }),
  NumericalColumn({
    title: "ROI",
    precision: 2,
    mapDataToValue: (data: RowDataT) => data[5],
  }),
  CustomColumn<{ color: string }, { selection: Set<string>; exclude: boolean; description: string }>({
    title: "",
    mapDataToValue: (data: RowDataT) => data[6],
    renderCell: function Cell(props: any) {
      const [css] = useStyletron();
      return (
        <div
          className={css({
            backgroundColor: props.value.color,
            height: "12px",
            width: "12px",
            borderRadius: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          })}
        />
      );
    },
  }),
];

const rows = [
  ["Avatar", false, "Action", 237, 2784, 11.7, { color: "green" }],
  ["The Blind Side", false, "Drama", 29, 309, 10.7, { color: "green" }],
  ["The Dark Knight", false, "Action", 185, 1005, 5.4, { color: "green" }],
  ["ET: The Extra-Terrestrial", false, "Drama", 11, 793, 75.5, { color: "green" }],
  ["Finding Nemo", false, "Adventure", 94, 940, 10.0, { color: "green" }],
  ["Ghostbusters", false, "Comedy", 144, 229, 1.6, { color: "green" }],
  ["The Hunger Games", false, "Thriller/Suspense", 78, 649, 8.3, { color: "green" }],
  ["Iron Man 3", false, "Action", 178, 1215, 6.8, { color: "green" }],
  ["Jurassic Park", false, "Action", 53, 1030, 19.4, { color: "green" }],
  ["King Kong", false, "Adventure", 207, 551, 2.7, { color: "green" }],
  ["The Lion King", false, "Adventure", 115, 577, 5.0, { color: "green" }],
  ["Monsters, Inc.", false, "Adventure", 115, 577, 5.0, { color: "green" }],
  ["The Twilight Saga: New Moon", false, "Drama", 50, 710, 14.2, { color: "green" }],
  ["Oz the Great and Powerful", false, "Adventure", 160, 493, 3.1, { color: "green" }],
  ["Titanic", false, "Thriller/Suspense", 200, 2187, 10.9, { color: "green" }],
  ["Up", false, "Adventure", 175, 735, 4.2, { color: "green" }],
  ["The Vow", false, "Drama", 30, 196, 6.5, { color: "red" }],
  ["The War of the Worlds", false, "Action", 132, 704, 5.3, { color: "green" }],
  ["X-Men: The Last Stand", false, "Action", 210, 459, 2.2, { color: "green" }],
  [`You've Got Mail`, false, "Drama", 65, 251, 3.9, { color: "green" }],
  ["Zookeeper", false, "Romantic Comedy", 80, 170, 2.1, { color: "green" }],
].map((r) => ({ id: String(r[0]), data: r }));

const OppTable = () => {
  const [css] = useStyletron();
  return (
    <div className={style.main}>
      <Grid container spacing={2} justifyContent={"space-between"} marginBottom={"10px"} >
        <Grid item xs={5} margin={"10px"}>
          <div className={style.client}>All Opportunities</div>
          <span className={style.subClient}>9 items • {Date.now()} • Singapore</span>
        </Grid>
        <Grid item xs="auto" margin={"10px"} alignItems={'center'}>
          <Stack direction="row">
            <Button className={style.list}>
                <FormatListBulletedOutlinedIcon style={{height:"22px", width: "auto", margin:"5px"}}/>
                 List
            </Button>
            <Button className={style.kanban}>
              <span className={style.icon}>
                <PollOutlinedIcon style={{height:"22px", width: "auto",margin:"5px"}} />
              </span>
              <span>
                Kanban
              </span>
            </Button>
            <Button className={style.filter}>Filters</Button>
            <Divider orientation='vertical' flexItem style={{ marginLeft: "15px", marginRight: "15px" }} />
            <Button className={style.btn}>Add</Button>
            <span className={style.dot}>
              <MoreVertOutlinedIcon style={{height:"22px", width: "auto",}}/>
            </span >
          </Stack>
        </Grid>
      </Grid>
      <Table/>
    </div >
  )
}

export default OppTable;