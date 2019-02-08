import React from "react";
import { Field, reduxForm } from "redux-form";

class ReduxForm extends React.Component {
  //   renderInput = formProps => {
  //     console.log(formProps);
  //     return (
  //       <input
  //         type="text"
  //         onChange={formProps.input.onChange}
  //         value={formProps.input.value}
  //       />
  //     );
  //     // return <div>This is a FormField</div>;
  //   };

  renderInput = formProps => {
    // console.log(formProps);
    const { input, label, resultOfCustomProp, meta } = formProps;
    console.log(meta);
    return (
      <div className="field">
        <label>{label}</label>
        <input type="text" {...formProps.input} autoComplete="off" />
      </div>
    );
    // return <div>This is a FormField</div>;
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    // console.log(this.props);
    /**
     * onSubmit -> FormSubmit event
     * this.props.handleSubmit -> formSubmit handler function passed by ReduxForm
     *  this.onSubmit -> our custom formSubmit method
     */
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title" // This is a custom props and passed to renderInput function
          customProp="1_ResultOfCustomProp" // This is a custom props and passed to renderInput function
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description" // This is a custom props and passed to renderInput function
          customProp="2_ResultOfCustomProp" // This is a custom props and passed to renderInput function
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

/**
 * Field -> Component which will setup the automatic functionality of Redux form
 * <Field component={renderJsx()} />  -> component is basically the main jsx component which will be passed to Field component and Field will render them
 *
 * key name of errors object and value of the name property of Field element must be same.
 * errors.title <Field name="title" /> in this case
 */

/**
 * For every user interaction with ReduxForm, this validate function will be called to validate Form data
 * If validate function does not return an empty object then it will re-render the Component
 * Every Field will render with the error message passed to property
 */
const validate = formValues => {
  //   console.log("validate", formValues);
  return { title: "Book Title", description: "Book Description" };
};

export default reduxForm({
  form: "bookForm",
  validate: validate
})(ReduxForm);
