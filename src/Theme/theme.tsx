import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#073F8C",
      light: "rgba(7, 63, 140, 0.1)",
      dark: "rgba(7, 63, 140, 0.8)",
    },
    secondary: {
      main: "#FFC652",
      light: "rgba(255, 198, 82, 0.1)",
      dark: "rgba(255, 198, 82, 1)",
    },
    warning: {
      main: "#FF4F3D",
      light: "rgba(255, 79, 61, 0.1)",
      dark: "rgba(255, 79, 61, 1)",
    },
    info: {
      main: "#F2F2F2",
      light: "rgba(242, 242, 242, 0.1)",
      dark: "rgba(242, 242, 242, 1)",
    },
    background: {
      default: "#073F8C",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  typography: {
    fontFamily: 'Gilroy, Poppins, sans-serif', 
    button: {
      textTransform: "none",
      fontSize: "16px",
    },
    h1: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "40px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "50px",
      },
      "@media (min-width:900px)": {
        fontSize: "60px",
      },
      "@media (min-width:1200px)": {
        fontSize: "70px",
      },
      "@media (min-width:1536px)": {
        fontSize: "80px",
      },
    },
    h2: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "35px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "40px",
      },
      "@media (min-width:900px)": {
        fontSize: "50px",
      },
      "@media (min-width:1200px)": {
        fontSize: "60px",
      },
      "@media (min-width:1536px)": {
        fontSize: "70px",
      },
    },
    h3: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "30px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "35px",
      },
      "@media (min-width:900px)": {
        fontSize: "40px",
      },
      "@media (min-width:1200px)": {
        fontSize: "50px",
      },
      "@media (min-width:1536px)": {
        fontSize: "60px",
      },
    },
    h4: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "25px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "30px",
      },
      "@media (min-width:900px)": {
        fontSize: "35px",
      },
      "@media (min-width:1200px)": {
        fontSize: "40px",
      },
      "@media (min-width:1536px)": {
        fontSize: "50px",
      },
    },
    h5: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "20px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "25px",
      },
      "@media (min-width:900px)": {
        fontSize: "30px",
      },
      "@media (min-width:1200px)": {
        fontSize: "35px",
      },
      "@media (min-width:1536px)": {
        fontSize: "40px",
      },
    },
    h6: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "18px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "20px",
      },
      "@media (min-width:900px)": {
        fontSize: "25px",
      },
      "@media (min-width:1200px)": {
        fontSize: "30px",
      },
      "@media (min-width:1536px)": {
        fontSize: "35px",
      },
    },
    subtitle1: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "22px",
      color: "#ffffff",
      opacity: "85%",
      "@media (min-width:600px)": {
        fontSize: "24px",
      },
      "@media (min-width:900px)": {
        fontSize: "26px",
      },
      "@media (min-width:1200px)": {
        fontSize: "28px",
      },
      "@media (min-width:1536px)": {
        fontSize: "30px",
      },
    },
    subtitle2: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "20px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "22px",
      },
      "@media (min-width:900px)": {
        fontSize: "24px",
      },
      "@media (min-width:1200px)": {
        fontSize: "26px",
      },
      "@media (min-width:1536px)": {
        fontSize: "28px",
      },
    },
    body1: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "16px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "18px",
      },
      "@media (min-width:900px)": {
        fontSize: "20px",
      },
      "@media (min-width:1200px)": {
        fontSize: "22px",
      },
      "@media (min-width:1536px)": {
        fontSize: "24px",
      },
    },
    body2: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "14px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "16px",
      },
      "@media (min-width:900px)": {
        fontSize: "18px",
      },
      "@media (min-width:1200px)": {
        fontSize: "20px",
      },
      "@media (min-width:1536px)": {
        fontSize: "22px",
      },
    },
    caption: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "12px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "14px",
      },
      "@media (min-width:900px)": {
        fontSize: "16px",
      },
      "@media (min-width:1200px)": {
        fontSize: "18px",
      },
      "@media (min-width:1536px)": {
        fontSize: "20px",
      },
    },
    overline: {
      fontFamily: 'Gilroy, Poppins, sans-serif',
      fontSize: "10px",
      color: "#ffffff",
      "@media (min-width:600px)": {
        fontSize: "12px",
      },
      "@media (min-width:900px)": {
        fontSize: "14px",
      },
      "@media (min-width:1200px)": {
        fontSize: "16px",
      },
      "@media (min-width:1536px)": {
        fontSize: "18px",
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#073F8C",
            color: "#FFC652",
            border: "1.5px solid #FFC652",
          },
          textTransform: "capitalize",
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "16px",
          borderRadius: "8px",
          height: "44px",
          padding: "12px 24px",
          width: "auto",
          color: "#073F8C",
          backgroundColor: "#FFC652",
        },
        outlined: {
          '&:hover': {
            color: '#073F8C',
            border: "1.5px solid #FFC652",
            backgroundColor: '#FFC652',
            '& img': {
              filter: 'brightness(0) invert(1)',
            },
            '& .MuiTypography-root': {
              color: 'white',
            },
          },
          textTransform: "capitalize",
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "16px",
          borderRadius: "8px",
          height: "44px",
          padding: "12px 24px",
          width: "auto",
          border: "1.5px solid #FFC652",
          backgroundColor: '#073F8C',
          color: '#FFC652',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          '& fieldset': {
            borderRadius: '10px',
          },
          '& input::placeholder': {
            fontSize: '16px',
            fontFamily: 'Gilroy, Poppins, sans-serif',
          },
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
          opacity: "70%",
          fontSize: "20px",
        },
        shrink: ({ ownerState }) => ({
          ...(ownerState.shrink && {
            fontSize: "18px !important",
          }),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "18px",
          lineHeight: "27px",
          color: "#111111",
        },
        notchedOutline: {
          borderColor: "#ccc",
        },
        root: {
          background: "white",
          "&.Mui-focused": {
            background: "#F8F8F9",
            boxShadow: "0px 6px 12px #3C599829",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
          fontSize: "16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: "0px 2px 10px #0000001A",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "10px",
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 5px 20px #0000001A",
          borderRadius: "8px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          color: "#2B2D22",
          fontSize: "18px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "18px",
          color: "#2B2D22",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
        },
        option: {
          fontFamily: 'Gilroy, Poppins, sans-serif',
          fontSize: "18px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#ffffff", // Ensure default color is white
          fontFamily: 'Gilroy, Poppins, sans-serif',
        },
      },
    },
  },
});
