import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SelectM from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Select (props) {
  const classes = useStyles(props);
  const [age, setAge] = React.useState("")

  const handleChange = (e) => {
      setAge(e.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
    <InputLabel id="demo-simple-select-label">Age</InputLabel>
    <SelectM {...props}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={age}
      onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </SelectM>
  </FormControl>
  );
}

Select.propTypes = {

    autoWidth: PropTypes.bool,
    children: PropTypes.node,
    defaultValue: PropTypes.string,
    displayEmplty: PropTypes.bool,
    /**@uxpinignoreprop */
    IconComponent: PropTypes.elementType,
    /**@uxpinignoreprop */
    label: PropTypes.node,
    native: PropTypes.bool,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard'])

   
  };
  
  export default Select;