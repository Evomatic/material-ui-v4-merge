import React from 'react';
import ButtonGroupM from '@material-ui/core/ButtonGroup';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     '& > *' : {
    //         margin: theme.spacing(1),
    //     },
    // },
}));

/**
 * @uxpinwrappers
 * SkipContainerWrapper
 */
function ButtonGroup(props) {
    const { uxpinRef, ...other } = props;
    const classes = useStyles(props);
    return (
      <ButtonGroupM {...other} className={classes.root} ref={uxpinRef}>
          {props.children}
      </ButtonGroupM>
    );
}
ButtonGroup.propTypes = {
    /**
     * The content of the button group.
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css-api) below for more details
     */
    classes: PropTypes.object.isRequired,
    /**
     * The color of the component. It supports those theme colors
     * that make sense for this component.
     */
    color: PropTypes.oneOf(['inherit', 'primary', 'secondary']),
    /**
     * The component used for the root node. Either to
     * use a HTML element or a component.
     */
    component: PropTypes.elementType,
    /**
     * if 'true', the buttons will be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * if 'true', no elevation is used.
     */
    disableElevation: PropTypes.bool,
    /**
     * if 'true', the button keyboard focus ripple will be disabled.
     */
    disableFocusRipple: PropTypes.bool,
    /**
     * if 'true', the button ripple effect will be disabled.
     */
    disableRipple: PropTypes.bool,
    /**
     * if 'true', the buttons will take up
     * the full width of its container.
     */
    fullWidth: PropTypes.bool,
    /**
     * The group orientation (layout flow direction)
     */
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    /**
     * The size of the button. 'small' is equivalent to the
     * dense button styling.
     */
    size: PropTypes.oneOf(['large', 'medium', 'small']),
    /**
     * The variant to use.
     */
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    /**
    * Aria-label text for accessibility.
    */
    "aria-label": PropTypes.string,
}
export default ButtonGroup;