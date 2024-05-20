import style from './style.module.scss';
import { Block } from 'baseui/block';
import { colors } from '../../../../common/constant/variable';
import { useEffect, useState } from 'react';
import { Dropdown } from 'antd';


const statusColor: any = {
  active: colors.accent,
  disabled: colors.outline,
  completed: colors.gray,
};

const dummyData = [
  { status: 'completed', title: 'Prospect' },
  { status: 'active', title: 'Prospect' },
  { status: 'active', title: 'Prospect' },
  { status: 'active', title: 'Prospect' },
  { status: 'disabled', title: 'Prospect' },
  { status: 'disabled', title: 'Prospect' },
  { status: 'disabled', title: 'Prospect' },
];

const projectDummyData = [
  { status: 'completed', title: 'Contract' },
  { status: 'active', title: 'Site Assessment' },
  { status: 'active', title: 'Design' },
  { status: 'active', title: 'Installation' },
  { status: 'disabled', title: 'Handover' },
  { status: 'disabled', title: 'Permits' },
];
type MultiStepIndicatorProps = {
  tabs?: { status: string; title: string }[];
  onChange?: (selected: string, index: number) => void;
  active?: number;
  clickDisable?: boolean;
};

export const MultiStepIndicator = ({
  tabs = dummyData,
  onChange,
  active = 0,
  clickDisable = false,
}: MultiStepIndicatorProps) => {
  const [selectedTab, setSelectedTab] = useState(active);

  const handleSelectedTab = (title: string, index: number) => {
    if (clickDisable) {
      window.alert('Navigation now allowed');
      return;
    }
    setSelectedTab(index);
    if (onChange) onChange(title, index);
  };

  const renderIndicator = (data: any, idx: number, tabs: any[]) => (
    <Block
      key={idx}
      className={style.indicator}
      style={{ transform: `translateX(${idx * -10}px)` }}
    >
      {idx > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="36"
          viewBox="0 0 17 36"
          fill="none"
        >
          <path
            d="M0 0L12 18L0 36H17V0H0Z"
            fill={
              idx === selectedTab && data.status === 'active'
                ? statusColor['active']
                : statusColor[data.status]
            }
          />
        </svg>
      )}

      <Block
        className={`${style.title} ${idx === 0 ? style.start : ''} ${
          idx === 0 && tabs.length > 1 ? style.disabledRightBorder : ''
        } ${
          tabs.length > 1 && idx === tabs.length - 1
            ? style.applyRightBorder
            : ''
        }
        ${
          idx === selectedTab && data.status === 'active'
            ? style['active']
            : style[data.status]
        }
        `}
        backgroundColor={
          idx === selectedTab && data.status === 'active'
            ? statusColor['active']
            : statusColor[data.status]
        }
        width="109px"
        onClick={() =>
          data.status !== 'disabled' && handleSelectedTab(data.title, idx)
        }
      >
        {data.status === 'completed' && (
          <span className="material-icons-outlined">check</span>
        )}

        {data.title}
      </Block>

      {tabs.length > 1 && idx !== tabs.length - 1 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="36"
          viewBox="0 0 20 36"
          fill="none"
        >
          <path
            d="M8 0H0V36H8L20 18L8 0Z"
            fill={
              idx === selectedTab && data.status === 'active'
                ? statusColor['active']
                : statusColor[data.status]
            }
          />
        </svg>
      )}

      {data.status === 'completed' && (
        <Block className={style.date}>Fri, Dec 22, 2023</Block>
      )}
    </Block>
  );

  useEffect(() => {
    setSelectedTab(active);
  }, [active]);

  return (
    <Block className={style.indicatorWrapper}>
      {tabs.map((data, idx) => renderIndicator(data, idx, tabs))}
    </Block>
  );
};




















// import React from 'react';
// import style from './style.module.scss';
// import { Grid } from 'baseui/layout-grid';
// import { Block } from 'baseui/block';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// interface ProgressBarProps {
//   progress: number;
//   label?: string;
// }

// const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
//   const progressPercentage = Math.floor(progress * 100);

//   return (
//     <Block className={style.main}>
//       <div className={style.stage}>Prospect</div>
//       <div></div>
//       <div className={style.stage}>Contact</div>
//       <div className={style.stage}>Vendor Quotation</div>
//       <div className={style.stage}>Customer Quotation</div>
//       <div className={style.stage}>Negotiation</div>
//       <div className={style.stage}>Closure <ExpandMoreIcon style={{height:"20px"}}/> </div>
//     </Block>
//   );
// };

// export default ProgressBar;
