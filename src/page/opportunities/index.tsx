import React from 'react';
import style from './style.module.scss';
import Sidebar from '../../libs/ui/src/components/sidebar';
import Navbar from '../../libs/ui/src/components/navbar';


const Opportunity = () => {
  return (
    <div className={style.main}>
        <Sidebar/>
        <div className={style.mainlist}>
            <Navbar/>
            
        </div>
    </div>
  )
}

export default Opportunity