import React from "react";
import { reduxForm, Field } from "redux-form";

const Form = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit} className='ui form'>
        <div className='field'>
          <label htmlFor='' className=''>
            Task Name{" "}
          </label>
          <Field name='newTask' component='input' type='text' />
        </div>
        <button className='ui primary button' type='submit'>
          submit
        </button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: "task",
})(Form);
