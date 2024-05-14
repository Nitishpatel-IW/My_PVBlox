import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import style from './style.module.scss';
import { Block } from 'baseui/block';
import { PhoneInput, COUNTRIES, StyledFlag } from "baseui/phone-input";
import 'react-phone-input-2/lib/style.css'
import { Button, KIND, SIZE } from "baseui/button";
import { Client as Styletron } from 'styletron-engine-monolithic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';
import OTP from '../otp';

function CustomFlag(props: any) {
  const { children, ...rest } = props;
  return <StyledFlag iso={props.$iso} {...rest} />;
}
const engine = new Styletron();
const MobileLogin = () => {

  const [text, setText] = React.useState("");
  const [check, setcheck] = React.useState(false);
  const [showOtpInput, setshowOtpInput] = useState(false);
  const [country, setCountry] = React.useState(COUNTRIES.SG);

  const handlePhoneSubmit = (e: any) => {
    e.preventDefault();
    if (text === '9999999902') {
      setcheck(true);
      setshowOtpInput(!showOtpInput);
    }
    else{
      alert("write valid number")
    }
  }
  return (
    <>
      {!showOtpInput ? <Block className={style.main}>
        <Block className={style.box}>
          <Block className={style.wrapper}>
            <Block className={style.header}>
              <div className={style.head1}>
                Welcome to sunollo
              </div>
              <div className={style.head2}>
                Enter your credentials to get started.
              </div>
            </Block>
            <form onSubmit={handlePhoneSubmit}>
              <Block className={style.input}>
                <div className={style.label}>Mobile Number*</div>
                <StyletronProvider value={engine}>
                  <BaseProvider theme={LightTheme}>
                    <PhoneInput
                      text={text}
                      country={country}
                      placeholder='000000000'
                        
                      onTextChange={(event) => {
                        setText(event.currentTarget.value);
                      }}
                      onCountryChange={(event: any) => {
                        setCountry(event.option);
                      }}
                      overrides={{
                        FlagContainer: {
                          component: CustomFlag,
                        },
                      }}
                    />
                  </BaseProvider>
                </StyletronProvider>
                <div className={style.notice}>We will send an security code on this phone to verify your account. Check the number as you will receive an OTP to verify it.</div>
              </Block>
              <Block className={style.footer}>
                <Button className={style.btn}
                  onClick={check? () => alert("OTP sent") : handlePhoneSubmit}
                  kind={KIND.secondary}
                  size={SIZE.large}
                >
                  Sent OTP
                </Button>
              </Block>
            </form>
          </Block>
        </Block>
      </Block > : <OTP number={text} fixedOtp={'1234'} landingPage='/dashboard' />}
    </>
  )
}

export default MobileLogin;