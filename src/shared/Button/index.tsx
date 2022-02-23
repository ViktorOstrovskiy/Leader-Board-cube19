import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button as MuiButton } from "@mui/material";
import { MuiButtonStyles } from "./muiStyles";
import { FC } from "react";
// styles
import cx from "classnames";

type ButtonProps = {
  title?: string;
  clickHandler?: () => void;
  startIcon?: any;
  endIcon?: any;
  violet?: boolean;
  parentClassName?: boolean;
  disabled?: boolean;
  dark?: boolean;
  img?: boolean;
  change?: boolean;
  type?: string;
};

const useStyle = makeStyles(MuiButtonStyles);

export const Button: FC<ButtonProps> = ({
  title,
  clickHandler,
  startIcon,
  endIcon,
  violet,
  parentClassName,
  disabled,
  dark,
  img,
  change,
  type,
}: any) => {
  const classes = useStyle();

  return (
    <MuiButton
      className={cx(
        classes.root,
        {
          [classes.dark]: dark,
          [classes.violet]: violet,
          [classes.img]: img,
          [classes.change]: change,
          parentClassName,
        },
        parentClassName && parentClassName
      )}
      onClick={clickHandler}
      disabled={disabled}
      variant="contained"
      type={type}
    >
      {startIcon && <img src={startIcon} />}
      {title}
      {endIcon && <img src={endIcon} />}
    </MuiButton>
  );
};
