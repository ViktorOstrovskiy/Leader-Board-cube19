export const MuiButtonStyles = {
  root: {
    "&.MuiButton-root": {
      height: "20px",
      padding: "15px",
      backgroundColor: "#F4A460",
      "&.MuiButton-outlined": {
        backgroundColor: "transparent",
      },

      "& .MuiTouchRipple-root": {
        display: "none",
      },
    },
    "&.MuiButton-root:hover": {
      backgroundColor: "#808080",
    },
  },

  violet: {
    "&.MuiButton-root": {
      backgroundColor: "#6b59cc",
    },
  },
  change: {
    "&.MuiButton-root": {
      backgroundColor: "#4169E1",
      color: "#000",
      border: "none",
      boxShadow: "none",
      background: "none !important",
    },
    "&.MuiButton-root:hover": {
      borderColor: "rgba(0, 0, 0, 0.15)",
      boxShadow: "none",
      color: "rgba(0, 0, 0, 0.65)",
    },
  },

  dark: {
    "&.MuiButton-root": {
      backgroundColor: "#000",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "600",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "3rem",
      marginTop: "5px",
      padding: "0 10px",
      width: "30%",
    },
  },
  img: {
    "&.MuiButton-root": {
      paddingTop: "6px",
      background: "none !important",
      border: "none",
      cursor: "pointer",
      width: "2px",
      height: "20px",
      boxShadow: "none",
    },
    "&.MuiButton-root:hover": {
      borderColor: "rgba(0, 0, 0, 0.15)",
      boxShadow: "none",
      color: "rgba(0, 0, 0, 0.65)",
    },
  },
};
