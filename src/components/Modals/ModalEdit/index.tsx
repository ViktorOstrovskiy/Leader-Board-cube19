import * as React from "react";
import { useDispatch } from "react-redux";
import { Modal, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// components
import LeadersForm from "../../LeadersForm";
// functions
import { editLeader } from "../../../store/form-service/actions";
// styles
import { MuiModalStyles } from "./muiStyles";
import cx from "classnames";
import { Leader } from "../../../core/types";

const ModalEdit = ({ open, handleClose, leaderData }: any) => {
  const useStyle = makeStyles(MuiModalStyles);
  const dispatch = useDispatch();

  const editLeaderClickHandler = (newValue: Leader) => {
    dispatch(editLeader(newValue));
    handleClose();
  };

  const classes = useStyle();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={cx(classes.root)}>
        <Typography className={cx(classes.root)}>Edit user score</Typography>
        <LeadersForm
          leaderValue={leaderData}
          submitClickHandler={editLeaderClickHandler}
        />
      </Box>
    </Modal>
  );
};

export default ModalEdit;
