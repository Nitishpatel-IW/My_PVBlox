import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { Block } from 'baseui/block';
import style from './style.module.scss'
import { Button } from 'baseui/button';
import { useNavigate } from 'react-router-dom';

type Props = {
    number: string
    fixedOtp: string;
    landingPage: string;
}

const OTP = (props: Props) => {

    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const handleVerify = (e:any) => {
        e.preventDefault();
        if (otp === props.fixedOtp) {
          navigate(props.landingPage); // Navigate to landing page on success
        } else {
          alert('Invalid OTP. Please try again.'); // Show error on failure
        }
      };

    return (

        <Block className={style.main}>
            <Block className={style.box}>
                <Block className={style.wrapper}>
                    <Block className={style.header}>
                        <div className={style.head1}>
                            Welcome to sunollo
                        </div>
                        <div className={style.head2}>
                            We have sent an OTP to {props.number} to verify your identity.
                        </div>
                    </Block>
                    <form>
                        <Block className={style.input}>
                            <div className={style.label}>OTP*</div>
                            < OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={4}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    height: "45px",
                                    width: "30px",
                                    border: "none",
                                    borderRadius: "10px",
                                    margin: "5px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    color: "black",
                                    backgroundColor: "rgb(238, 238, 238)",

                                }}
                            />
                            <div className={style.notice}>
                                Didn’t you receive any code? <a>Resend OTP</a>
                            </div>
                        </Block>
                        <Block className={style.footer}>
                            <Button className={style.btn}  onClick={handleVerify}>
                                Verify
                            </Button>
                        </Block>
                    </form>
                </Block>
            </Block>
        </Block >
    )
}

export default OTP;