import React, { useState } from "react";
import style from './style.module.scss';
import Sidebar from "../../libs/ui/src/components/sidebar";
import Navbar from "../../libs/ui/src/components/navbar";
import Table from "../../libs/ui/src/components/dataTable";
import { Block } from "baseui/block";
import Dashboard from "../../libs/ui/src/components/dashboard";



const Landing = () => {
  const [active, setActive] = useState("dashboard");
  const getData = (data: any) => {
    setActive(data);
  }
  return (

    <div className={style.main}>
      <div className={style.sidebar}>
        <Sidebar onChange={getData} />
      </div>
      <Block className={style.mainContainer}>
        <Navbar />
        <div className={style.menu}>
          {active === "dashboard" && <Dashboard />}
          {active === "opportunities" && <Table />}
        </div>
      </Block>

    </div>
  );
}
export default Landing;