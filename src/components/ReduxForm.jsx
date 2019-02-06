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
    return (
      <div className="field">
        <label>{label}</label>
        <input type="text" {...formProps.input} />
      </div>
    );
    // return <div>This is a FormField</div>;
  };

  onSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    console.log(this.props);
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

export default reduxForm({
  form: "bookForm"
})(ReduxForm);
