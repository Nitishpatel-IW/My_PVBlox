import style from './style.module.scss';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { Block } from 'baseui/block';
import { Grid, Stack } from '@mui/material';
import { Button } from 'baseui/button';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider, useStyletron } from 'baseui';
import {
  StatefulDataTable,
  CategoricalColumn,
  CustomColumn,
  NumericalColumn,
  StringColumn,
  COLUMNS,
  NUMERICAL_FORMATS,
  BatchAction,
} from "baseui/data-table";
import { Check } from "baseui/icon";
import { useMemo, useState } from 'react';
import StyletronClient from 'styletron-engine-monolithic/lib/client/client';

const engine = new Styletron();

function makeRowsFromColumns(columns: any, rowCount: number) {
    const rows = [];
    for (let i = 0; i < rowCount; i++) {
      rows.push({
        id: i,
        data: columns.map((column: any, j: number) => {
          switch (column.kind) {
            case COLUMNS.CATEGORICAL:
              switch (i % 11) {
                case 11:
                  return "UberX";
                case 10:
                  return "UberXL";
                case 9:
                  return "Uber Select";
                case 8:
                  return "Uber Comfort";
                case 7:
                  return "Uber Pool";
                case 6:
                  return "Uber Black";
                case 5:
                  return "Uber Assist";
                case 4:
                  return "Uber WAV";
                case 3:
                  return "Transit";
                case 2:
                  return "Taxi";
                case 1:
                  return "Bike";
                case 0:
                default:
                  return "Scooter";
              }
            case COLUMNS.NUMERICAL:
              return i % 2 ? i - 1 : i + 3;
            case COLUMNS.STRING:
              return "an";
            case COLUMNS.CUSTOM:
              switch (i % 5) {
                case 4:
                  return { color: "red" };
                case 3:
                  return { color: "green" };
                case 2:
                  return { color: "blue" };
                case 1:
                  return { color: "purple" };
                case 0:
                default:
                  return { color: "yellow" };
              }
            default:
              return "default" + "an";
          }
        }),
      });
    }
    return rows;
  }
  
  type RowDataT = [string, { color: string }, string, number];
  
  const columns = [
    CategoricalColumn({
      title: "categorical",
      mapDataToValue: (data: RowDataT) => data[0],
    }),
    CustomColumn<
      { color: string },
      { selection: Set<string>; exclude: boolean; description: string }
    >({
      title: "",
      // filterable: true,
      // sortable: true,
      maxWidth: 5,
      mapDataToValue: (data: RowDataT) => data[1],
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
                alignItems: "center",
              })}
            />
        );
      },
      renderFilter: function ColorFilter(props: any) {
        const [css] = useStyletron();
        const [selection, setSelection] = useState(new Set());
        const colors = useMemo(() => {
          return props.data.reduce(
            (set: any, item: any) => set.add(item.color),
            new Set(),
          );
        }, [props.data]);
        return (
          <div>
            <ul>
              {Array.from(colors).map((color: any) => {
                return (
                  <li key={color} className={css({ backgroundColor: color })}>
                    <input
                      type="checkbox"
                      onChange={() => {
                        if (selection.has(color)) {
                          selection.delete(color);
                        } else {
                          selection.add(color);
                        }
                        setSelection(selection);
                      }}
                    />
                    <span className={css({ paddingLeft: "8px" })}>{color}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      },
      buildFilter: function (params: any) {
        return function (data: any) {
          return params.selection.has(data.color);
        };
      },
      sortFn: function (a: any, b: any) {
        return a.color.localeCompare(b.color);
      },
    }),
    StringColumn({
      title: "string",
      mapDataToValue: (data: RowDataT) => data[2],
    }),
    NumericalColumn({
      title: "accounting",
      format: NUMERICAL_FORMATS.ACCOUNTING,
      mapDataToValue: (data: RowDataT) => data[3],
    }),
  ];
  
  const initialRows = makeRowsFromColumns(columns, 100);

const Table = () => {
    const [css] = useStyletron();
  const [rows, setRows] = useState(initialRows);

  function flagRows(ids: Array<string | number>) {
    const nextRows = rows.map((row) => {
      if (ids.includes(row.id)) {
        const nextData = [...row.data];
        nextData[1] = !nextData[1];
        return { ...row, data: nextData };
      }

      return row;
    });
    setRows(nextRows);
  }
  const batchActions: BatchAction[] = [
    {
      label: "Check",
      onClick: ({ selection, clearSelection }) => {
        flagRows(selection.map((r) => r.id));
        clearSelection();
      },
      renderIcon: Check,
    },
  ];

    return (
        <div className={style.main}>
            <Grid container spacing={2} justifyContent={"space-between"} marginBottom={"10px"} >
                <Grid item xs={5} margin={"10px"}>
                    <Block className={style.client}>Opportunities</Block>
                    <span className={style.subclient}>9 items • {Date.now()} • Singapore</span>
                </Grid>
                <Grid item xs="auto" margin={"10px"} alignItems={'center'}>
                    <Stack direction="row">
                        <Button>List</Button>
                        <Button>Kanban</Button>
                        <Button>Filter</Button>
                        <Button className={style.btn}>Add</Button>
                        <span className={style.dot}>
                            <MoreVertOutlinedIcon />
                        </span >
                    </Stack>
                </Grid>
            </Grid>
            <StyletronProvider value={engine}>
                <BaseProvider theme={LightTheme}>
                    <div style={{ height: "550px" }}>
                        <StatefulDataTable
                            columns={columns}
                            rows={rows}
                            batchActions={batchActions}
                            searchable={false}
                            filterable={false}
                        />
                    </div>
                </BaseProvider>
            </StyletronProvider>
            {/* <DataGrid
                className={style.table}
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ height: '78vh', width: '99%',
                     }}
            /> */}
        </div >
    )
}

export default Table