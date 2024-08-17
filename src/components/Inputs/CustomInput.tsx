import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { ReactNode } from 'react';
import React from 'react';

interface CustomInputProps extends InputBaseProps {
  endAdornment?: ReactNode;
}

const CustomInputWrapper = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2.3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#FFFFFF',
    border: "1px solid #00000029",
    borderRadius: "6px",
    fontSize: 16,
    padding: '8px 10px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#6563FF', 
      boxShadow: '0px 3px 6px #7643EB4D', 
      backgroundColor: '#F8F8F8', 
    },
  },
  '& .MuiInputAdornment-positionEnd': {
    marginLeft: theme.spacing(1),
    position: 'absolute',
    right: "15px",
    fontSize : '14px',
  },
}));

export default function CustomInput(props: CustomInputProps) {
  const { endAdornment, ...other } = props;
  return (
    <CustomInputWrapper
      {...other}
      endAdornment={endAdornment} 
    />
  );
}
