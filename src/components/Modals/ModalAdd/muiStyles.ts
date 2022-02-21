export const MuiModalStyles = {
  root: {
    "&.MuiBox-root": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: 600,
      height: 350,
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      backgroundColor: "#FFF",
      textAlign: "center",
      paddingTop: "100px",
      borderRadius: 15,
      fontWeight: "bold",
    },
    "&.MuiTypography-root": {
      marginBottom: 20,
      color: "#000",
      fontWeight: "bold",
      fontSize: 27,
    },
  },
};
