import React, { FC, useState } from 'react';
import style from './style.module.scss';
import { Navigation, NavigationOverrides } from "baseui/side-navigation";
import { Block } from "baseui/block";
import { Nav } from './menu';
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import { Items } from 'baseui/menu';

const engine = new Styletron();
const customTheme = {
  ...LightTheme,
  colors: {
    ...LightTheme.colors,

    primary: 'blue',
    accent: 'green',
    contentPrimary: 'white',
  }
};
type CustomNavItemProps = {
  item: Items & { icon?: string };
};
const CustomNavItem: FC<CustomNavItemProps> = ({ item, ...rest }: any) => {
  return (
    <Block
      {...rest}
      className={`${style.navItem} ${rest?.$active ? style.active : ''} `}
    >
      <span className={style.muiIcon}>{item.icon}</span>
      <span className={style.title}>{item.title}</span>
    </Block>
  );
};

const override: NavigationOverrides = {
  NavItemContainer: {
    style: ({ $theme }) => ({
      background: '#141414',
      color: $theme.colors.gray,
    }),
  },
  NavItem: {
    component: CustomNavItem,
    style: ({ $active, $theme }) => {
      if (!$active)
        return {
          color: $theme.colors.gray,
          ':hover': {
            color: $theme.colors.white,
          },
        };

      return {
        backgroundColor: $theme.colors.gray,
        borderLeftColor: $theme.colors.accent,
        color: $theme.colors.white,
        ':hover': {
          color: $theme.colors.black,
        },
      };
    },
  },
};
const Sidebar = (props: any) => {

  const [activeItemId, setActiveItemId] = useState('');
  const [location, setLocation] = useState("");
  return (
    <Block className={style.sidebar}>
      <Block className={style.logo}>
        <span className={style.top}>pvblox</span>
      </Block>
      <Block className={style.menu}>
        <StyletronProvider value={engine}>
          <BaseProvider theme={customTheme}>
            <Navigation
              items={Nav}
              activeItemId={activeItemId}
              onChange={({ event, item }) => {
                setActiveItemId(item.itemId || "")
                event.preventDefault();
                props.onChange(item.itemId || "")
              }}
              overrides={override}
            />
            <Block className={style.poweredTitle}>
              Powered By <span>PVBlox</span>{' '}
            </Block>
            <Block>
              Avatar Logo and Dropdown
            </Block>
          </BaseProvider>
        </StyletronProvider>
      </Block>
    </Block>
  )
}

export default Sidebar



