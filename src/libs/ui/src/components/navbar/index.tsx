import React from 'react';
import style from './style.module.scss';
import { Block } from 'baseui/block';
import AddIcon from '@mui/icons-material/Add';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import { Select, Space } from 'antd';
import { Divider } from '@mui/material';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
]

const handleChange = (value: string | string[]) => {
  console.log(`Selected: ${value}`);
};
const Navbar = () => {
  return (
    <Block className={style.main}>
      <Block className={style.wrapper}>
        <Block className={style.search}>
          <SearchIcon />
          <Space direction="vertical" style={{ width: '100', border:'none',}}>
            <Select
              size="large"
              defaultValue="dashboard"
              onChange={handleChange}
              style={{ minWidth: 130, fontSize: 40, fontWeight: 600 }}
              options={options}
              variant="borderless"
            />
          </Space>
          <input
            className={style.input}
            placeholder='Search by Name, phone, address' />
        </Block>
        <Block className={style.navmenu}>
          <span className={style.plus}>
            <AddIcon />
          </span>
          <Divider orientation="vertical" variant="middle" flexItem />
          <span className={style.bell}>
            <NotificationsNoneIcon  sx={{ fontSize: 22, fontWeight: 400 }} />
          </span>
          <span className={style.setting}>
            <SettingsOutlinedIcon sx={{ fontSize: 22,fontWeight: 400 }}/>
          </span>
          <Divider orientation="vertical" variant="middle" flexItem />
          <span className={style.country}>Singapore</span>
          <span className={style.globe}>
            <LanguageIcon sx={{ fontSize: 22,fontWeight: 400 }} />
          </span>
        </Block>
      </Block>
    </Block>
  )
}
export default Navbar;