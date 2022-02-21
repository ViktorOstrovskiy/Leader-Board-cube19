import * as React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
// components
import { Button, Input } from "../../shared";
// styles
import style from "../LeadersForm/LeadersForm.module.scss";
import { FC } from "react";

type LeadersFormProps = {
  leaderValue: {
    name: string;
    score: string;
  };
  submitClickHandler: any;
};

const initialValues = {
  name: "",
  score: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  score: Yup.string().required("Required"),
});

const LeadersForm: FC<LeadersFormProps> = ({
  leaderValue,
  submitClickHandler,
}) => {
  console.log(initialValues);

  return (
    <Formik
      initialValues={leaderValue}
      onSubmit={submitClickHandler}
      validationSchema={validationSchema}
    >
      <Form>
        <div className={style.form}>
          <div className={style.form__group}>
            <Field
              name="name"
              id="name"
              parentClassName={style.form__input}
              type="text"
              placeholder="Name"
              component={Input}
            />
          </div>
          <div className={style.form__group}>
            <Field
              id="score"
              name="score"
              type="number"
              placeholder="Score"
              component={Input}
            />
          </div>
          <Button dark={true} title="Add" type="submit" />
        </div>
      </Form>
    </Formik>
  );
};

export default LeadersForm;
