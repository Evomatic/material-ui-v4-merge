import React from "react";
import PropTypes from "prop-types";
import red from "@material-ui/core/colors/red";
import pink from "@material-ui/core/colors/pink";
import purple from "@material-ui/core/colors/purple";
import deepPurple from "@material-ui/core/colors/deepPurple";
import indigo from "@material-ui/core/colors/indigo";
import blue from "@material-ui/core/colors/blue";
import lightBlue from "@material-ui/core/colors/lightBlue";
import cyan from "@material-ui/core/colors/cyan";
import teal from "@material-ui/core/colors/teal";
import green from "@material-ui/core/colors/green";
import lightGreen from "@material-ui/core/colors/lightGreen";
import lime from "@material-ui/core/colors/lime";
import yellow from "@material-ui/core/colors/yellow";
import amber from "@material-ui/core/colors/amber";
import orange from "@material-ui/core/colors/orange";
import deepOrange from "@material-ui/core/colors/deepOrange";
import brown from "@material-ui/core/colors/brown";
import grey from "@material-ui/core/colors/grey";
import blueGrey from "@material-ui/core/colors/blueGrey";
import AvatarM from "@material-ui/core/Avatar";
import Icon from "@material-ui/core/icon";

function Avatar(props) {
    return (
      <AvatarM {...props}>
        {props.icon ? <Icon>{props.icon}</Icon> : props.children}
      </AvatarM>
    );
  }

  Avatar.propTypes = {
    /**
     * Letters for initial icons
     */
    /** @uxpinpropname  Letters */
    children: PropTypes.string,
  
    /**
     * The name of the icon from https://material.io/resources/icons.
     */
    icon: PropTypes.string,
  
    /**
     * The image URL source.
     */
    /** @uxpinpropname  ImageURL */
    src: PropTypes.string,
  
    /**
     * Used in combination with `src` or `srcSet` to
     * provide an alt attribute for the rendered `img` element.
     */
    /** @uxpinignoreprop */
    alt: PropTypes.string,
  
    /**
     * Color of the background of the avatar. Visible unless there's an image inside of the circle.
     */
    /** @uxpinignoreprop */
    backgroundShade: PropTypes.oneOf([
      "white",
      "red",
      "pink",
      "purple",
      "deepPurple",
      "indigo",
      "blue",
      "lightBlue",
      "cyan",
      "teal",
      "green",
      "lightGreen",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deepOrange",
      "brown",
      "grey",
      "blueGrey"
    ]),
    /**
     * Hue of the background of the avatar. Visible unless there's an image inside of the circle.
     */
    /** @uxpinignoreprop */
    backgroundHue: PropTypes.oneOf([
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "A100",
      "A200",
      "A400",
      "A700"
    ]),
    /**
     * Color of the content of the avatar. Visible unless there's an image inside of the circle.
     */
    /** @uxpinignoreprop */
    contentShade: PropTypes.oneOf([
      "white",
      "red",
      "pink",
      "purple",
      "deepPurple",
      "indigo",
      "blue",
      "lightBlue",
      "cyan",
      "teal",
      "green",
      "lightGreen",
      "lime",
      "yellow",
      "amber",
      "orange",
      "deepOrange",
      "brown",
      "grey",
      "blueGrey"
    ]),
    /**
     * Hue of the content of the avatar. Visible unless there's an image inside of the circle.
     */
    /** @uxpinignoreprop */
    contentHue: PropTypes.oneOf([
      "50",
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
      "A100",
      "A200",
      "A400",
      "A700"
    ]),
  
    /**
     * The `srcSet` attribute for the `img` element.
     */
    /** @uxpinignoreprop */
    srcSet: PropTypes.string,
  
    /**
     * Override or extend the styles applied to the component.
     */
    /** @uxpinignoreprop */
    classes: PropTypes.object,
  
    /**
     * Attributes applied to the `img` element if the component
     * is used to display an image.
     */
    /** @uxpinignoreprop */
    imgProps: PropTypes.object,
    /**
     * The `sizes` attribute for the `img` element.
     */
    /** @uxpinignoreprop */
    sizes: PropTypes.string
  };
  
  export { Avatar as default };