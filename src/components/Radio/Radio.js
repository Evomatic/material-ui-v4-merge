import React from "react";
import PropTypes, { oneOf } from "prop-types";
import RadioM from "@material-ui/core/Radio";

function Radio(props) {
  return <RadioM {...props} />;
}

Radio.propTypes = {
   /**
   * If `true`, the radio is checked.
   * @uxpinbind onChange 1
   */
  checked: PropTypes.bool,

  /**
   * The color of the component. It supports those theme colors
   * that make sense for this component.
   */
  color: PropTypes.oneOf(['primary', 'secondary']),

    /**
   * If `true`, the radio will be disabled.
   */
  disabled: PropTypes.bool,

  /**
  * The value of the component.
  */
  value: PropTypes.string,

  /**
  * Change event to use with UXPin interactions.
  */
  onChange: PropTypes.func,

  /**
   * The size of the radio. 'small' is equivalent to the dense radio styling.
   */
  size: oneOf(['small', 'medium'])

};

export { Radio as default };
