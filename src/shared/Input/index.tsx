import * as React from "react";
import { FC } from "react";
import { makeStyles } from "@mui/styles";
import { Input as MuiInput } from "@mui/material";
import { MuiInputStyles } from "./muiStyles";
import { FieldInputProps, FieldProps, useFormikContext } from "formik";
// styles
import s from "./Input.module.scss";
import cx from "classnames";

const useStyle = makeStyles(MuiInputStyles);

type InputProps = {
  type: string;
  placeholder: string;
  field: FieldInputProps<string>;
};

export const Input: FC<InputProps> = ({ type, placeholder, field }) => {
  const styles = useStyle();
  const form = useFormikContext<any>();

  const error =
    form &&
    field &&
    form.errors[field.name] &&
    form.touched[field.name] &&
    form.errors[field.name];

  return (
    <div>
      <MuiInput
        className={cx(styles.root)}
        type={type}
        placeholder={placeholder}
        {...field}
      />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};
