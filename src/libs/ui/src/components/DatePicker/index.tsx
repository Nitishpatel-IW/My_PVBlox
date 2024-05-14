import {
    DatePicker as BaseDatePicker,
    DatepickerProps,
    DatepickerOverrides,
  } from 'baseui/datepicker';
  import { Input } from 'baseui/input';
  
  export const DatePicker = (props: DatepickerProps) => {
    const overrides: DatepickerOverrides = Object.assign(
      {
        Input: {
          component: ({ ...rest }) => (
            <Input
              size={props.size}
              {...rest}
              overrides={{
                Input: {
                  style: ({ $theme }) => ({
                    paddingLeft: '0px',
                  }),
                },
              }}
              startEnhancer={
                <span
                  className={`material-icons-outlined ${
                    props.size === 'compact' ? 'f14' : ''
                  }`}
                >
                  calendar_today
                </span>
              }
            />
          ),
        },
      },
      props.overrides
    );
  
    return <BaseDatePicker overrides={overrides} {...props} />;
  };
  