import * as React from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { Modal, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { leaderInitialValue } from "./helpers";
import { Leader } from "../../../core/types";
import { FC } from "react";

// components
import LeadersForm from "../../LeadersForm";
// functions
import { addLeader, message } from "../../../store/form-service/actions";
// styles
import cx from "classnames";
import { MuiModalStyles } from "./muiStyles";

type ModalAddProps = {
  open: boolean;
  handleClose: any;
};

const ModalAdd: FC<ModalAddProps> = ({ open, handleClose }) => {
  const useStyle = makeStyles(MuiModalStyles);

  const dispatch = useDispatch();

  const addLeaderClickHandler = (leaderValue: Leader | any) => {
    dispatch(message(leaderValue.name));
    dispatch(addLeader(leaderValue));

    handleClose();
  };

  const leaderValue = { ...leaderInitialValue, id: nanoid() };

  const classes = useStyle();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box className={cx(classes.root)}>
        <Typography className={cx(classes.root)}>Add user score</Typography>
        <LeadersForm
          leaderValue={leaderValue}
          submitClickHandler={addLeaderClickHandler}
        />
      </Box>
    </Modal>
  );
};

export default ModalAdd;
