import {SvgIcon, styled } from '@mui/material';
import * as React from 'react';
import Button from '@mui/joy/Button';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';

const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export default function InputFileUpload() {
  return (
    <Button
      component="label"
      role={undefined}
      tabIndex={-1}
      fullWidth={true}
      style={{backgroundColor:"rgb(238, 238, 238)", color:"black", fontWeight:"400"}}
      startDecorator={
        <UploadOutlinedIcon/>
      }
    >
      Upload Roof Design
      <VisuallyHiddenInput type="file" />
    </Button>
  );
}
