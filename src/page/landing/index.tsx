import React, { useState } from "react";
import style from './style.module.scss';
import Sidebar from "../../libs/ui/src/components/sidebar";
import Navbar from "../../libs/ui/src/components/navbar";
import { Block } from "baseui/block";
import Dashboard from "../../libs/ui/src/components/dashboard";
import Details from "../../libs/ui/src/components/tableDetails";
import OppTable from "../../libs/ui/src/components/opportunityTable";



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
          {/* {active === "opportunities" && <OppTable />} */}
          {active === "opportunities" && <Details/> }
        </div>
      </Block>

    </div>
  );
}
export default Landing;