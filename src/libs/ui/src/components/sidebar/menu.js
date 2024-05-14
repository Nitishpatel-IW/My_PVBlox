// import React from 'react';
// import { Item } from 'baseui/side-navigation';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SolarPowerOutlinedIcon from '@mui/icons-material/SolarPowerOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import WorkspacesOutlinedIcon from '@mui/icons-material/WorkspacesOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

// type Menu = Item & { icon: React.ReactNode };

export const Nav = [
  {
    title: 'Dashboard',
    itemId: 'dashboard',
    icon: <DashboardOutlinedIcon />,
  },
  {
    title: 'Opportunities',
    itemId: 'opportunities',
    icon: <GroupOutlinedIcon />,
  },
  {
    title: 'Projects',
    itemId: 'projects',
    icon: <HomeWorkOutlinedIcon />,
  },
  {
    title: 'Customers',
    itemId: 'customers',
    icon: <PermIdentityOutlinedIcon />,
  },
  {
    title: 'Agents',
    itemId: 'agents',
    icon: <PeopleAltOutlinedIcon />,
  },
  {
    title: 'Vendors',
    itemId: 'vendors',
    icon: <SolarPowerOutlinedIcon />,
  },
  {
    title: 'Transactions',
    itemId: 'transactions',
    icon: <PaymentsOutlinedIcon />,
  },
  {
    title: 'Inventory',
    itemId: 'inventory',
    icon: <HandymanOutlinedIcon />,
  },
  {
    title: 'Investors',
    itemId: 'investors',
    icon: <WorkspacesOutlinedIcon />,
  },
  {
    title: 'Portfolios',
    itemId: 'portfolios',
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    title: 'Get Supports',
    itemId: 'Get Supports',
    icon: <WorkOutlineOutlinedIcon />,
  },
  {
    title: 'Feedback',
    itemId: 'Feedback',
    icon: <WorkOutlineOutlinedIcon />,
  },
];